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
// Define the provider
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
                        setError(new Error("Permissions denied"));
                    }
                    setHasPermissions(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var scanForDevices = function () { return __awaiter(void 0, void 0, void 0, function () {
        var available, enabled, foundDevices, e_1;
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
                        setError(new Error("Bluetooth is not available"));
                    }
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.isBluetoothEnabled()];
                case 4:
                    enabled = _a.sent();
                    setIsBluetoothEnabled(enabled);
                    if (!enabled) {
                        react_native_bluetooth_classic_1.default.openBluetoothSettings();
                        setError(new Error("Bluetooth is not enabled"));
                    }
                    setIsScanning(true);
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.startDiscovery()];
                case 6:
                    foundDevices = _a.sent();
                    setDevices(foundDevices);
                    return [3 /*break*/, 8];
                case 7:
                    e_1 = _a.sent();
                    setError(new Error(e_1));
                    setIsScanning(false);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var connectToDevice = function (address) { return __awaiter(void 0, void 0, void 0, function () {
        var device, sub, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Prevent multiple connection attempts
                    if (attemptingToConnect) {
                        return [2 /*return*/];
                    }
                    setAttemptingToConnect(true);
                    if (!connectedDevice) return [3 /*break*/, 2];
                    return [4 /*yield*/, disconnectDevice()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, react_native_bluetooth_classic_1.default.connectToDevice(address)];
                case 3:
                    device = _a.sent();
                    setConnectedDevice(device);
                    sub = device.onDataReceived(function (data) {
                        setReceivedData(data.data);
                    });
                    setSubscription(sub);
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    setError(new Error(e_2));
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var disconnectDevice = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!connectedDevice) return [3 /*break*/, 4];
                    if (subscription) {
                        subscription.remove();
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connectedDevice.disconnect()];
                case 2:
                    _a.sent();
                    setConnectedDevice(null);
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    setError(new Error(e_3));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var writeToDevice = function (message) { return __awaiter(void 0, void 0, void 0, function () {
        var e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!connectedDevice) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connectedDevice.write(message)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    setError(new Error(e_4));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
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
        // set up state change listener
        var sub = react_native_bluetooth_classic_1.default.onStateChanged(function (state) {
            setStatus(state);
        });
        return function () {
            if (subscription) {
                subscription.remove();
            }
            if (connectedDevice) {
                connectedDevice.disconnect();
            }
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
// Define the useBluetooth hook
var useBluetooth = function () {
    return (0, react_1.useContext)(BluetoothContext);
};
exports.useBluetooth = useBluetooth;
