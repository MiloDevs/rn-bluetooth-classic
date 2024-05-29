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
exports.BluetoothProvider = exports.useBluetooth = exports.BluetoothContext = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_bluetooth_classic_1 = __importDefault(require("react-native-bluetooth-classic"));
// Define permissions
var reqPerms = [
    react_native_1.PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
    react_native_1.PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
];
// Request permissions
var requestBluetoothPermission = function () { return __awaiter(void 0, void 0, void 0, function () {
    var granted, _i, _a, permission, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, react_native_1.PermissionsAndroid.requestMultiple(reqPerms)];
            case 1:
                granted = _b.sent();
                // Check if all permissions were granted
                for (_i = 0, _a = Object.values(granted); _i < _a.length; _i++) {
                    permission = _a[_i];
                    if (permission !== react_native_1.PermissionsAndroid.RESULTS.GRANTED) {
                        throw new Error("Bluetooth permissions not granted");
                    }
                }
                console.log("Bluetooth permissions granted");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error("Error requesting Bluetooth permissions:", error_1);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
// Create Bluetooth context with default values
exports.BluetoothContext = (0, react_1.createContext)({
    isScanning: false,
    isBluetoothEnabled: false,
    devices: [],
    connectedDevice: null,
    receivedData: "",
    scanDevices: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stopScan: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    connectToDevice: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    error: null,
});
// Custom hook to access Bluetooth context
var useBluetooth = function () {
    return (0, react_1.useContext)(exports.BluetoothContext);
};
exports.useBluetooth = useBluetooth;
// BluetoothProvider component
var BluetoothProvider = function (_a) {
    var children = _a.children;
    // State variables
    var _b = (0, react_1.useState)(false), isBluetoothEnabled = _b[0], setIsBluetoothEnabled = _b[1];
    var _c = (0, react_1.useState)([]), devices = _c[0], setDevices = _c[1];
    var _d = (0, react_1.useState)(null), connectedDevice = _d[0], setConnectedDevice = _d[1];
    var _e = (0, react_1.useState)(""), receivedData = _e[0], setReceivedData = _e[1];
    var _f = (0, react_1.useState)(null), error = _f[0], setError = _f[1];
    var _g = (0, react_1.useState)(false), isScanning = _g[0], setIsScanning = _g[1];
    // Function to check individual permissions
    var checkPermissions = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _i, reqPerms_1, permission, granted, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    _i = 0, reqPerms_1 = reqPerms;
                    _a.label = 1;
                case 1:
                    if (!(_i < reqPerms_1.length)) return [3 /*break*/, 4];
                    permission = reqPerms_1[_i];
                    return [4 /*yield*/, react_native_1.PermissionsAndroid.check(permission)];
                case 2:
                    granted = _a.sent();
                    if (!granted) {
                        throw new Error("Permission ".concat(permission, " not granted"));
                    }
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Permission check failed:", error_2);
                    throw error_2;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    // Function to initialize Bluetooth and start scanning
    var initializeBluetooth = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    if (!(react_native_1.Platform.OS === 'android')) return [3 /*break*/, 2];
                    return [4 /*yield*/, requestBluetoothPermission()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, scanDevices()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    setError(error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // Function to scan for Bluetooth devices
    var scanDevices = function () { return __awaiter(void 0, void 0, void 0, function () {
        var available, enabled, discovered, newDevices_1, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    if (!(react_native_1.Platform.OS === 'android')) return [3 /*break*/, 2];
                    return [4 /*yield*/, checkPermissions()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (isScanning) {
                        console.log("Already scanning for devices...");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.isBluetoothAvailable()];
                case 3:
                    available = _a.sent();
                    if (!available) {
                        throw new Error("Bluetooth is not available on this device");
                    }
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.isBluetoothEnabled()];
                case 4:
                    enabled = _a.sent();
                    setIsBluetoothEnabled(enabled);
                    if (!!enabled) return [3 /*break*/, 6];
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.openBluetoothSettings()];
                case 5:
                    _a.sent();
                    console.log("Bluetooth is not enabled");
                    return [2 /*return*/];
                case 6:
                    setIsScanning(true);
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.startDiscovery()];
                case 7:
                    discovered = _a.sent();
                    console.log("Discovered devices:", discovered);
                    newDevices_1 = discovered.filter(function (device) { return !devices.some(function (d) { return d.address === device.address; }); });
                    setDevices(function (prevDevices) {
                        setError(null);
                        setIsScanning(false);
                        return __spreadArray(__spreadArray([], prevDevices, true), newDevices_1, true);
                    });
                    return [3 /*break*/, 9];
                case 8:
                    error_4 = _a.sent();
                    console.error("Error during discovery:", error_4);
                    setError(error_4);
                    setIsScanning(false);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    // Function to stop scanning for Bluetooth devices
    var stopScan = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.cancelDiscovery()];
                case 1:
                    _a.sent();
                    setIsScanning(false);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error("Error stopping discovery:", error_5);
                    setError(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // Function to connect to a Bluetooth device
    var connectToDevice = function (deviceAddress) { return __awaiter(void 0, void 0, void 0, function () {
        var connected, subscription, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.connectToDevice(deviceAddress)];
                case 1:
                    connected = _a.sent();
                    subscription = connected.onDataReceived(function (data) {
                        setReceivedData(data.data.replace(/\r?\n|\r/g, ""));
                    });
                    setConnectedDevice(connected);
                    console.log("Connected to device:", connected);
                    return [2 /*return*/];
                case 2:
                    error_6 = _a.sent();
                    console.error("Error connecting to device:", error_6);
                    setError(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // Call initializeBluetooth when the component mounts
    (0, react_1.useEffect)(function () {
        initializeBluetooth();
        return function () {
            // Clean-up logic if needed
        };
    }, []);
    // Render Bluetooth context provider with state and functions
    return (react_1.default.createElement(exports.BluetoothContext.Provider, { value: {
            isScanning: isScanning,
            isBluetoothEnabled: isBluetoothEnabled,
            devices: devices,
            connectedDevice: connectedDevice,
            receivedData: receivedData,
            scanDevices: scanDevices,
            stopScan: stopScan,
            connectToDevice: connectToDevice,
            error: error
        } }, children));
};
exports.BluetoothProvider = BluetoothProvider;
