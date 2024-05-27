---

# react-native-bluetooth-classic

`react-native-bluetooth-classic` is a React Native package that provides a Bluetooth context and hooks for managing Bluetooth functionality in your app. It handles permissions, device scanning, connection management, and data reception.

## Installation

You can install `react-native-bluetooth-classic` via npm or yarn:

```bash
npm install react-native-bluetooth-classic
```

or

```bash
yarn add react-native-bluetooth-classic
```

## Usage

### 1. Import the `BluetoothProvider` and wrap your app with it in your root component:

```javascript
import { BluetoothProvider } from 'react-native-bluetooth-classic';

const App = () => {
  return (
    <BluetoothProvider>
      <YourApp />
    </BluetoothProvider>
  );
};
```

### 2. Use the `useBluetooth` hook in your components to access Bluetooth functionality:

```javascript
import { useBluetooth } from 'react-native-bluetooth-classic';

const YourComponent = () => {
  const { isScanning, devices, scanDevices, connectToDevice } = useBluetooth();

  // Your component logic here...
};
```

## Features

- Request Bluetooth permissions
- Scan for nearby Bluetooth devices
- Connect to a Bluetooth device
- Receive data from connected devices

## Example

For a complete example of how to use `react-native-bluetooth-classic`, check out the [example](example) directory in this repository.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you find any bugs or want to suggest improvements.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this template with additional information specific to your package. Make sure to replace placeholders like `YourApp` with actual names or values.