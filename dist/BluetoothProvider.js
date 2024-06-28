"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBluetooth = exports.BluetoothProvider = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_bluetooth_classic_1 = __importDefault(require("react-native-bluetooth-classic"));
// Define the context with the type
var BluetoothContext = (0, react_1.createContext)({
    status: "IDLE",
    isBluetoothEnabled: false,
    devices: [],
    connectedDevice: null,
    receivedData: "",
    error: null,
    isScanning: false,
    scanForDevices: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    connectToDevice: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    disconnectDevice: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    writeToDevice: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
});
/**
 * BluetoothProvider component that manages Bluetooth functionality
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components
 */
var BluetoothProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)("IDLE"), status = _b[0], setStatus = _b[1];
    var _c = (0, react_1.useState)(false), isBluetoothEnabled = _c[0], setIsBluetoothEnabled = _c[1];
    var _d = (0, react_1.useState)([]), devices = _d[0], setDevices = _d[1];
    var _e = (0, react_1.useState)(null), connectedDevice = _e[0], setConnectedDevice = _e[1];
    var _f = (0, react_1.useState)(""), receivedData = _f[0], setReceivedData = _f[1];
    var _g = (0, react_1.useState)(null), error = _g[0], setError = _g[1];
    var _h = (0, react_1.useState)(false), isScanning = _h[0], setIsScanning = _h[1];
    var _j = (0, react_1.useState)(false), hasPermissions = _j[0], setHasPermissions = _j[1];
    var _k = (0, react_1.useState)(null), subscription = _k[0], setSubscription = _k[1];
    var _l = (0, react_1.useState)(false), attemptingToConnect = _l[0], setAttemptingToConnect = _l[1];
    /**
     * Request necessary Bluetooth permissions on Android
     */
    var requestBluetoothPermissions = function () { return __awaiter(void 0, void 0, void 0, function () {
        var reqPerms, grantedPermissions, deniedPermissions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (react_native_1.Platform.OS !== "android")
                        return [2 /*return*/];
                    reqPerms = [
                        react_native_1.PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                        react_native_1.PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                        react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                    ];
                    return [4 /*yield*/, react_native_1.PermissionsAndroid.requestMultiple(reqPerms)];
                case 1:
                    grantedPermissions = _a.sent();
                    deniedPermissions = reqPerms.filter(function (perm) { return grantedPermissions[perm] !== react_native_1.PermissionsAndroid.RESULTS.GRANTED; });
                    if (deniedPermissions.length > 0) {
                        setError(new Error("Some Bluetooth permissions were denied"));
                    }
                    setHasPermissions(deniedPermissions.length === 0);
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * Scan for available Bluetooth devices
     */
    var scanForDevices = function () { return __awaiter(void 0, void 0, void 0, function () {
        var available, enabled, foundDevices_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(react_native_1.Platform.OS === "android" && !hasPermissions)) return [3 /*break*/, 2];
                    return [4 /*yield*/, requestBluetoothPermissions()];
                case 1:
                    _a.sent();
                    if (!hasPermissions)
                        return [2 /*return*/];
                    _a.label = 2;
                case 2: return [4 /*yield*/, react_native_bluetooth_classic_1.default.isBluetoothAvailable()];
                case 3:
                    available = _a.sent();
                    if (!available) {
                        setError(new Error("Bluetooth is not available"));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.isBluetoothEnabled()];
                case 4:
                    enabled = _a.sent();
                    setIsBluetoothEnabled(enabled);
                    if (!enabled) {
                        react_native_bluetooth_classic_1.default.openBluetoothSettings();
                        setError(new Error("Bluetooth is not enabled"));
                        return [2 /*return*/];
                    }
                    setIsScanning(true);
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, 8, 9]);
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.startDiscovery()];
                case 6:
                    foundDevices_1 = _a.sent();
                    if (!foundDevices_1) {
                        setError(new Error("No devices found"));
                        return [2 /*return*/];
                    }
                    setDevices(function (prevDevices) {
                        var newDevices = foundDevices_1.filter(function (device) {
                            return !prevDevices.some(function (prev) { return prev.address === device.address; });
                        });
                        return __spreadArray(__spreadArray([], prevDevices, true), newDevices, true);
                    });
                    return [2 /*return*/, foundDevices_1];
                case 7:
                    e_1 = _a.sent();
                    setError(new Error("Error scanning for devices: ".concat(e_1.message)));
                    return [3 /*break*/, 9];
                case 8:
                    setIsScanning(false);
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Connect to a Bluetooth device
     * @param {string} address - The address of the device to connect to
     */
    var connectToDevice = function (address) { return __awaiter(void 0, void 0, void 0, function () {
        var device, sub, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.connectToDevice(address)];
                case 1:
                    device = _a.sent();
                    setConnectedDevice(device);
                    sub = device.onDataReceived(function (data) {
                        setReceivedData(data.data);
                    });
                    setSubscription(sub);
                    setError(null);
                    return [2 /*return*/, device];
                case 2:
                    e_2 = _a.sent();
                    setError(new Error("Error connecting to device: ".concat(e_2.message)));
                    return [3 /*break*/, 4];
                case 3:
                    setAttemptingToConnect(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Disconnect from the currently connected Bluetooth device
     */
    var disconnectDevice = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (subscription) {
                        subscription.remove();
                        setSubscription(null);
                    }
                    if (!connectedDevice) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, connectedDevice.disconnect()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_3 = _a.sent();
                    setError(new Error("Error disconnecting device: ".concat(e_3.message)));
                    return [3 /*break*/, 5];
                case 4:
                    setConnectedDevice(null);
                    setReceivedData("");
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Write data to the connected Bluetooth device
     * @param {any} data - The data to write
     * @param {Encodings} encoding - The encoding to use (default: 'utf8')
     */
    var writeToDevice = function (deviceAddress, data, encoding) {
        if (encoding === void 0) { encoding = "utf8"; }
        return __awaiter(void 0, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, react_native_bluetooth_classic_1.default.writeToDevice(deviceAddress, data, encoding)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        setError(new Error("Error writing to device: ".concat(e_4.message)));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    (0, react_1.useEffect)(function () {
        var initializeBluetooth = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, requestBluetoothPermissions()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, scanForDevices()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        initializeBluetooth().catch(function (e) {
            return setError(new Error("Initialization error: ".concat(e.message)));
        });
        // Set up state change listener
        var sub = react_native_bluetooth_classic_1.default.onStateChanged(function (state) {
            setStatus(state);
            if (state.toString() !== "PoweredOn") {
                disconnectDevice();
            }
        });
        return function () {
            if (subscription) {
                subscription.remove();
            }
            disconnectDevice();
            sub.remove();
        };
    }, []);
    return (react_1.default.createElement(BluetoothContext.Provider, { value: {
            status: status,
            isBluetoothEnabled: isBluetoothEnabled,
            devices: devices,
            connectedDevice: connectedDevice,
            receivedData: receivedData,
            error: error,
            isScanning: isScanning,
            scanForDevices: scanForDevices,
            connectToDevice: connectToDevice,
            disconnectDevice: disconnectDevice,
            writeToDevice: writeToDevice,
        } }, children));
};
exports.BluetoothProvider = BluetoothProvider;
/**
 * Custom hook to use the Bluetooth context
 * @returns {BluetoothContextType} The Bluetooth context
 */
var useBluetooth = function () {
    return (0, react_1.useContext)(BluetoothContext);
};
exports.useBluetooth = useBluetooth;
