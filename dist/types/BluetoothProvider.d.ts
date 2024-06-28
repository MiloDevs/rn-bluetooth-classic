import React from "react";
import { BluetoothContextType } from "./types";
/**
 * BluetoothProvider component that manages Bluetooth functionality
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components
 */
export declare const BluetoothProvider: ({ children, }: {
    children: React.ReactNode;
}) => React.JSX.Element;
/**
 * Custom hook to use the Bluetooth context
 * @returns {BluetoothContextType} The Bluetooth context
 */
export declare const useBluetooth: () => BluetoothContextType;
