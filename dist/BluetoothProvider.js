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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBluetooth = exports.BluetoothProvider = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_bluetooth_classic_1 = __importDefault(require("react-native-bluetooth-classic"));
// Define the context
// Define the context with the type
var BluetoothContext = (0, react_1.createContext)(null);
// Define the provider
var BluetoothProvider = function (_a) {
    var children = _a.children;
    var context = (0, react_1.useContext)(BluetoothContext);
    if (!context) {
        throw new Error("useBluetooth must be used within a BluetoothProvider");
    }
    var _b = (0, react_1.useState)(false), isBluetoothEnabled = _b[0], setIsBluetoothEnabled = _b[1];
    var _c = (0, react_1.useState)([]), devices = _c[0], setDevices = _c[1];
    var _d = (0, react_1.useState)(null), connectedDevice = _d[0], setConnectedDevice = _d[1];
    var _e = (0, react_1.useState)(""), receivedData = _e[0], setReceivedData = _e[1];
    var _f = (0, react_1.useState)(null), error = _f[0], setError = _f[1];
    var _g = (0, react_1.useState)(false), isScanning = _g[0], setIsScanning = _g[1];
    var _h = (0, react_1.useState)(false), hasPermissions = _h[0], setHasPermissions = _h[1];
    var _j = (0, react_1.useState)(null), subscription = _j[0], setSubscription = _j[1];
    var requestBluetoothPermissions = function () { return __awaiter(void 0, void 0, void 0, function () {
        var reqPerms, grantedPermissions, deniedPermissions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
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
                        throw new Error("Bluetooth permissions not granted: " + deniedPermissions.join(", "));
                    }
                    setHasPermissions(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var scanForDevices = function () { return __awaiter(void 0, void 0, void 0, function () {
        var available, enabled, foundDevices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(react_native_1.Platform.OS === "android")) return [3 /*break*/, 2];
                    return [4 /*yield*/, requestBluetoothPermissions()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, react_native_bluetooth_classic_1.default.isBluetoothAvailable()];
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
                    throw new Error("Bluetooth is not enabled");
                case 6:
                    setIsScanning(true);
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.startDiscovery()];
                case 7:
                    foundDevices = _a.sent();
                    setDevices(foundDevices);
                    setIsScanning(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var connectToDevice = function (address) { return __awaiter(void 0, void 0, void 0, function () {
        var device, sub;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!connectedDevice) return [3 /*break*/, 2];
                    return [4 /*yield*/, disconnectDevice()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, react_native_bluetooth_classic_1.default.connectToDevice(address)];
                case 3:
                    device = _a.sent();
                    setConnectedDevice(device);
                    sub = device.onDataReceived(function (data) {
                        setReceivedData(data.data);
                    });
                    setSubscription(sub);
                    return [2 /*return*/];
            }
        });
    }); };
    var disconnectDevice = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!connectedDevice) return [3 /*break*/, 2];
                    if (subscription) {
                        subscription.remove();
                    }
                    return [4 /*yield*/, connectedDevice.disconnect()];
                case 1:
                    _a.sent();
                    setConnectedDevice(null);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var writeToDevice = function (message) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!connectedDevice) return [3 /*break*/, 2];
                    return [4 /*yield*/, connectedDevice.write(message)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        var initializeBluetooth = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(react_native_1.Platform.OS === "android")) return [3 /*break*/, 2];
                        return [4 /*yield*/, requestBluetoothPermissions()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, scanForDevices()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        initializeBluetooth().catch(setError);
        return function () {
            if (subscription) {
                subscription.remove();
            }
        };
    }, []);
    return (react_1.default.createElement(BluetoothContext.Provider, { value: {
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
// Custom hook to use the Bluetooth context
var useBluetooth = function () {
    return (0, react_1.useContext)(BluetoothContext);
};
exports.useBluetooth = useBluetooth;
