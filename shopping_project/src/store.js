import { configureStore } from '@reduxjs/toolkit';
import productListSlice from './productListSlice';

const store = configureStore({
    reducer: {
        shopping: productListSlice.reducer,
    },
});

export default store;