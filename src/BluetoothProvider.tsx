import React, { createContext, useContext, useEffect, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import RNBluetoothClassic, {
  BluetoothDevice,
  BluetoothEventSubscription,
} from "react-native-bluetooth-classic";
import { BluetoothContextType, Encodings } from "./types";
import { StateChangeEvent } from "react-native-bluetooth-classic/lib/BluetoothEvent";

// Define the context with the type
const BluetoothContext = createContext<BluetoothContextType>({
  status: "IDLE",
  isBluetoothEnabled: false,
  devices: [],
  connectedDevice: null,
  receivedData: "",
  error: null,
  isScanning: false,
  scanForDevices: async () => {},
  connectToDevice: async () => {},
  disconnectDevice: async () => {},
  writeToDevice: async () => {},
});

/**
 * BluetoothProvider component that manages Bluetooth functionality
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components
 */
export const BluetoothProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [status, setStatus] = useState<StateChangeEvent | "IDLE">("IDLE");
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false);
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);
  const [connectedDevice, setConnectedDevice] =
    useState<BluetoothDevice | null>(null);
  const [receivedData, setReceivedData] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermissions, setHasPermissions] = useState(false);
  const [subscription, setSubscription] =
    useState<BluetoothEventSubscription | null>(null);
  const [attemptingToConnect, setAttemptingToConnect] = useState(false);

  /**
   * Request necessary Bluetooth permissions on Android
   */
  const requestBluetoothPermissions = async (): Promise<void> => {
    if (Platform.OS !== "android") return;

    const reqPerms = [
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ];

    const grantedPermissions = await PermissionsAndroid.requestMultiple(
      reqPerms
    );
    const deniedPermissions = reqPerms.filter(
      (perm) => grantedPermissions[perm] !== PermissionsAndroid.RESULTS.GRANTED
    );

    if (deniedPermissions.length > 0) {
      setError(new Error("Some Bluetooth permissions were denied"));
    }
    setHasPermissions(deniedPermissions.length === 0);
  };

  /**
   * Scan for available Bluetooth devices
   */
  const scanForDevices = async (): Promise<any> => {
    if (Platform.OS === "android" && !hasPermissions) {
      await requestBluetoothPermissions();
      if (!hasPermissions) return;
    }

    const available = await RNBluetoothClassic.isBluetoothAvailable();
    if (!available) {
      setError(new Error("Bluetooth is not available"));
      return;
    }

    const enabled = await RNBluetoothClassic.isBluetoothEnabled();
    setIsBluetoothEnabled(enabled);
    if (!enabled) {
      RNBluetoothClassic.openBluetoothSettings();
      setError(new Error("Bluetooth is not enabled"));
      return;
    }

    setIsScanning(true);
    try {
      const foundDevices = await RNBluetoothClassic.startDiscovery();
      if (!foundDevices) {
        setError(new Error("No devices found"));
        return;
      }
      setDevices((prevDevices) => {
        const newDevices = foundDevices.filter(
          (device) =>
            !prevDevices.some((prev) => prev.address === device.address)
        );
        return [...prevDevices, ...newDevices];
      });
      return foundDevices;
    } catch (e: any) {
      setError(new Error(`Error scanning for devices: ${e.message}`));
    } finally {
      setIsScanning(false);
    }
  };

  /**
   * Connect to a Bluetooth device
   * @param {string} address - The address of the device to connect to
   */
  const connectToDevice = async (address: string): Promise<any> => {
    try {
      const device = await RNBluetoothClassic.connectToDevice(address);
      setConnectedDevice(device);

      const sub = device.onDataReceived((data: any) => {
        setReceivedData(data.data);
      });
      setSubscription(sub);
      setError(null);
      return device;
    } catch (e: any) {
      setError(new Error(`Error connecting to device: ${e.message}`));
    } finally {
      setAttemptingToConnect(false);
    }
  };

  /**
   * Disconnect from the currently connected Bluetooth device
   */
  const disconnectDevice = async (): Promise<void> => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }
    if (connectedDevice) {
      try {
        await connectedDevice.disconnect();
      } catch (e: any) {
        setError(new Error(`Error disconnecting device: ${e.message}`));
      } finally {
        setConnectedDevice(null);
        setReceivedData("");
      }
    }
  };

  /**
   * Write data to the connected Bluetooth device
   * @param {any} data - The data to write
   * @param {Encodings} encoding - The encoding to use (default: 'utf8')
   */
  const writeToDevice = async (
    deviceAddress: string,
    data: any,
    encoding: Encodings = "utf8"
  ): Promise<void> => {
    try {
      await RNBluetoothClassic.writeToDevice(deviceAddress, data, encoding);
    } catch (e: any) {
      setError(new Error(`Error writing to device: ${e.message}`));
    }
  };

  useEffect(() => {
    const initializeBluetooth = async () => {
      await requestBluetoothPermissions();
      await scanForDevices();
    };

    initializeBluetooth().catch((e) =>
      setError(new Error(`Initialization error: ${e.message}`))
    );

    // Set up state change listener
    const sub = RNBluetoothClassic.onStateChanged((state) => {
      setStatus(state);
      if (state.toString() !== "PoweredOn") {
        disconnectDevice();
      }
    });

    return () => {
      if (subscription) {
        subscription.remove();
      }
      disconnectDevice();
      sub.remove();
    };
  }, []);

  return (
    <BluetoothContext.Provider
      value={{
        status,
        isBluetoothEnabled,
        devices: devices,
        connectedDevice,
        receivedData,
        error,
        isScanning,
        scanForDevices,
        connectToDevice,
        disconnectDevice,
        writeToDevice,
      }}
    >
      {children}
    </BluetoothContext.Provider>
  );
};

/**
 * Custom hook to use the Bluetooth context
 * @returns {BluetoothContextType} The Bluetooth context
 */
export const useBluetooth = () => {
  return useContext(BluetoothContext);
};
