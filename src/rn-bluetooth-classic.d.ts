import {
  BluetoothDevice,
  BluetoothEventSubscription,
} from "react-native-bluetooth-classic";
import { Encodings } from "./types";
import { StateChangeEvent } from "react-native-bluetooth-classic/lib/BluetoothEvent";

declare module "rn-bluetooth-classic" {
  // Export BluetoothContextType interface
  export interface BluetoothContextType {
    status: "IDLE" | StateChangeEvent;
    isBluetoothEnabled: boolean;
    devices: BluetoothDevice[];
    connectedDevice: BluetoothDevice | null;
    receivedData: string;
    error: Error | null;
    isScanning: boolean;
    scanForDevices: () => Promise<void>;
    connectToDevice: (deviceAddress: string) => Promise<void>;
    disconnectDevice: () => Promise<void>;
    writeToDevice: (data: any, encoding: Encodings) => Promise<void>;
  }

  // Export BluetoothProvider component
  export const BluetoothProvider: ({
    children,
  }: {
    children: React.ReactNode;
  }) => JSX.Element;

  // Export useBluetooth hook
  export const useBluetooth: () => BluetoothContextType;
}
