import { createSlice } from '@reduxjs/toolkit';


const productListSlice = createSlice({
    name: "shopping",
    initialState: {
        productList: [
            { id: 1, title: "Product A", price: 100, amount:1 },
            { id: 2, title: "Product B", price: 200, amount:1 },
            { id: 3, title: "Product C", price: 300, amount:1 },
        ],
        cart: [],
    },
    reducers: {
        onSave: (state, action) => {
            const product = action.payload;
            state.cart.push(product);
        },
        onDelete: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
        },
        amountCount: (state, action) => {
            const { id, _amount } = action.payload;
            const product = state.cart.find((e) => e.id === id);
            if (product){
                product.amount = _amount;
            }
        }, 
    },
});

export const { onSave, onDelete, amountCount } = productListSlice.actions;
export default productListSlice;
