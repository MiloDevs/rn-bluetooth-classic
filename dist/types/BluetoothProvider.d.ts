import React from "react";
import { BluetoothContextType } from "./types";
export declare const BluetoothProvider: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const useBluetooth: () => BluetoothContextType;
