import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './Slices'

const store = configureStore({
    reducer :{
        ecomm:CartReducer,
    }
});


export default store;