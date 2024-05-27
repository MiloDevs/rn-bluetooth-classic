import React, { useState, useContext, createContext, useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import RNBluetoothClassic from "react-native-bluetooth-classic";

// Define permissions
const reqPerms = [
  PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
  PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
];

// Request permissions
const requestBluetoothPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(reqPerms);
    if (
      granted[PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT] !==
        PermissionsAndroid.RESULTS.GRANTED ||
      granted[PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN] !==
        PermissionsAndroid.RESULTS.GRANTED ||
      granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] !==
        PermissionsAndroid.RESULTS.GRANTED ||
      granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] !==
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      throw new Error("Bluetooth permissions not granted");
    }
    console.log("Bluetooth permissions granted");
  } catch (error) {
    console.error("Error requesting Bluetooth permissions:", error);
    throw error;
  }
};

// Create Bluetooth context
const BluetoothContext = createContext({
  isScanning: false,
  isBluetoothEnabled: false,
  devices: [],
  connectedDevice: null,
  receivedData: "",
  scanDevices: () => {},
  stopScan: () => {},
  connectToDevice: (deviceAddress) => {},
  error: null,
});

// Custom hook to access Bluetooth context
export const useBluetooth = () => {
  return useContext(BluetoothContext);
};

// BluetoothProvider component
export const BluetoothProvider = ({ children }) => {
  // State variables
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false);
  const [devices, setDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [receivedData, setReceivedData] = useState("");
  const [error, setError] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  // Effect to initialize Bluetooth and start scanning
  useEffect(() => {
    const initializeBluetooth = async () => {
      try {
        await requestBluetoothPermission();
        scanDevices();
      } catch (error) {
        setError(error);
      }
    };

    initializeBluetooth();

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Function to scan for Bluetooth devices
  const scanDevices = async () => {
    try {
      if (isScanning) {
        console.log("Already scanning for devices...");
        return;
      }
      // Check if Bluetooth is available and enabled
      const available = await RNBluetoothClassic.isBluetoothAvailable();
      if (!available) {
        console.log("Bluetooth is not available on this device");
        return;
      }
      const enabled = await RNBluetoothClassic.isBluetoothEnabled();
      setIsBluetoothEnabled(enabled);
      if (!enabled) {
        RNBluetoothClassic.openBluetoothSettings();
        setIsBluetoothEnabled(enabled);
        console.log("Bluetooth is not enabled");
        return;
      }
      // Discover devices and add them to the state
      setIsScanning(true);
      await RNBluetoothClassic.startDiscovery().then((discovered) => {
        console.log("Discovered devices:", discovered);
        const newDevices = discovered.filter(
          (device) => !devices.some((d) => d.address === device.address)
        );
        setDevices((prevDevices) => {
          setError(null);
          setIsScanning(false);
          return [...prevDevices, ...newDevices];
        });
      });
    } catch (error) {
      console.error("Error during discovery:", error);
      setError(error);
      setIsScanning(false);
    }
  };

  // Function to stop scanning for Bluetooth devices
  const stopScan = async () => {
    try {
      await RNBluetoothClassic.cancelDiscovery();
      setIsScanning(false);
    } catch (error) {
      console.error("Error stopping discovery:", error);
      setError(error);
    }
  };

  // Function to connect to a Bluetooth device
  const connectToDevice = async (deviceAddress) => {
    try {
      const connected = await RNBluetoothClassic.connectToDevice(deviceAddress);
      const subscription = connected.onDataReceived((data) => {
        setReceivedData(data.data.replace(/\r?\n|\r/g, ""));
      });
      setConnectedDevice(connected);
      console.log("Connected to device:", connected);
    } catch (error) {
      console.error("Error connecting to device:", error);
      setError(error);
    }
  };

  // Render Bluetooth context provider with state and functions
  return (
    <BluetoothContext.Provider
      value={{
        isScanning,
        isBluetoothEnabled,
        devices,
        connectedDevice,
        receivedData,
        scanDevices,
        stopScan,
        connectToDevice,
        error,
      }}
    >
      {children}
    </BluetoothContext.Provider>
  );
};
