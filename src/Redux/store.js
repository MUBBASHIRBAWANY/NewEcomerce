import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./Selice/ProductSlice";


export const store = configureStore({
    reducer : combineReducers({ProductSlice})
})