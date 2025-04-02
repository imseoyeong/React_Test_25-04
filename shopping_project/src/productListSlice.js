import { createSlice } from '@reduxjs/toolkit';


const productListSlice = createSlice({
    name: "shopping",
    initialState: {
        productList: [
            { id: 1, title: "Product A", price: 100 },
            { id: 2, title: "Product B", price: 200 },
            { id: 3, title: "Product C", price: 300 },
        ],
        cart: [],
        // amount: cart.length + 1,
    },
    reducers: {
        onSave: (state, action) => {
            const product = action.payload;
            state.cart.push(product);
        },
        onDelete: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
        },
    },
});

export const { onSave, onDelete } = productListSlice.actions;
export default productListSlice;
