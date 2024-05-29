
---

# rn-native-bluetooth-classic

`rn-bluetooth-classic` is a React Native package that provides a Bluetooth context and hooks for managing Bluetooth functionality in your app. It handles permissions, device scanning, connection management, and data reception.

## Installation

You can install `rn-bluetooth-classic` via npm or yarn:

```bash
npm install rn-bluetooth-classic
```

or

```bash
yarn add rn-bluetooth-classic
```

## Dependencies

`rn-bluetooth-classic` uses `react-native-bluetooth-classic` under the hood to scan and connect to devices and only acts as a wrapper on top to make it easier to use.

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
import { BluetoothProvider } from 'rn-bluetooth-classic';

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
import { useBluetooth } from 'rn-bluetooth-classic';

const YourComponent = () => {
  const { isScanning, devices, scanDevices, connectToDevice } = useBluetooth();

  // Your component logic here...
};
```

## Use with Expo

If you are using Expo and want to integrate `rn-bluetooth-classic`, you can use the `with-rn-bluetooth-classic` Expo plugin maintained by amitferman. This plugin helps with auto-configuration of permissions and protocols.

### Expo Plugin

amitferman has released and maintains a `with-rn-bluetooth-classic` Expo plugin to get things working.

- [with-rn-bluetooth-classic GitHub Repository](https://github.com/amitferman/with-rn-bluetooth-classic)

### Expo Installation

You can install `react-native-bluetooth-classic` and `with-rn-bluetooth-classic` from npm using Expo's `expo install` command:

```bash
expo install react-native-bluetooth-classic with-rn-bluetooth-classic
```

### Configure app.json or app.config.json

After installation, configure your `app.json` or `app.config.json` with the following settings:

```json
{
  "plugins": [
    ["with-rn-bluetooth-classic",
      {
        "peripheralUsageDescription": "Allow myDevice to check bluetooth peripheral info",
        "alwaysUsageDescription": "Allow myDevice to always use bluetooth info",
        "protocols": [
          "com.myCompany.p1",
          "com.myCompany.p2"
        ]
      }
    ]
  ]
}
```

Make sure to replace `"com.myCompany.p1"` and `"com.myCompany.p2"` with your own protocol identifiers.

## Features

- Request Bluetooth permissions
- Scan for nearby Bluetooth devices
- Connect to a Bluetooth device
- Receive data from connected devices

## Example

For a complete example of how to use `rn-bluetooth-classic`, check out the [example](example) directory in this repository.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you find any bugs or want to suggest improvements.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this template with additional information specific to your package. Make sure to replace placeholders like `YourApp` with actual names or values.
