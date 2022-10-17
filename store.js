import { configureStore } from "@reduxjs/toolkit";
import { NativeAppEventEmitter } from "react-native";
import navReducer from "./slices/navSlice"

export const store = configureStore({
    reducer :{
        nav:navReducer,
    },
})