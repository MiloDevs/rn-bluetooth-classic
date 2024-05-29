declare module "react-native-bluetooth-classic" {
  export interface useBluetooth {
    isScanning: boolean;
    isBluetoothEnabled: boolean;
    devices: Device[];
    connectedDevice: Device | null;
    receivedData: string;
    scanDevices: () => Promise<void>;
    stopScan: () => Promise<void>;
    connectToDevice: (deviceAddress: string) => Promise<void>;
    error: Error | null;
  }


  export const useBluetooth: useBluetooth;
}
