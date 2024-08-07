import {
  BluetoothDevice,
  BluetoothEventSubscription,
} from "react-native-bluetooth-classic";
import { StateChangeEvent } from "react-native-bluetooth-classic/lib/BluetoothEvent";

export interface BluetoothContextType {
  status: "IDLE" | StateChangeEvent;
  isBluetoothEnabled: boolean;
  devices: BluetoothDevice[];
  connectedDevice: BluetoothDevice | null;
  receivedData: string;
  error: Error | null;
  isScanning: boolean;
  scanForDevices: () => Promise<void>;
  connectToDevice: (address: string) => Promise<void>;
  disconnectDevice: () => Promise<void>;
  writeToDevice: (
    address: string,
    data: any,
    encoding?: Encodings
  ) => Promise<void>;
}

export type Encodings =
  | "ascii"
  | "utf8"
  | "utf16le"
  | "ucs2"
  | "base64"
  | "latin1"
  | "binary"
  | "hex";
