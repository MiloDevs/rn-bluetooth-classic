import {} from "./lib/index"


const App = () => {
    const {devices, } = useBluetooth()

    return (
        <BluetoothProvider>
        <div>
        <button onClick={connect}>Connect</button>
        <button onClick={disconnect}>Disconnect</button>
        <ul>
            {devices.map(device => <li key={device.id}>{device.name}</li>)}
        </ul>
        </div>
        </BluetoothProvider>
    )
    }
