import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer
});

export default configureStore({reducer: rootReducer})