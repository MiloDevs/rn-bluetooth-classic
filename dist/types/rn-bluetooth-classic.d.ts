import { BluetoothContextType } from "./types";
import React from "react";

declare module 'rn-bluetooth-classic' {
    export const BluetoothProvider: ({
    children,
    }: {
    children: React.ReactNode;
    }) => React.JSX.Element;
    export const useBluetooth: () => BluetoothContextType | null;
}