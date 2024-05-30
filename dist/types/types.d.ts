import { BluetoothDevice } from "react-native-bluetooth-classic";
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
    writeToDevice: (message: string) => Promise<void>;
}
