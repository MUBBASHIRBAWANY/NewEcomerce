import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProductArray from "./Selice/ProductSlice";


export const store = configureStore({
    reducer : combineReducers({ProductArray})
})