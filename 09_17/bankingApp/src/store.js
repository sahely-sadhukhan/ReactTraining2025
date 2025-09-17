import { configureStore } from '@reduxjs/toolkit';
import { balanceReducer } from './balanceReducer';

export const appStore = configureStore({
    reducer: balanceReducer
});