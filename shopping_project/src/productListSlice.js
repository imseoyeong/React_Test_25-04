import { createSlice } from '@reduxjs/toolkit';


const productListSlice = createSlice({
    name: "shopping",
    initialState: {
        productList: [
            { id: 1, title: "Product A", price: 100 },
            { id: 2, title: "Product B", price: 200 },
            { id: 3, title: "Product C", price: 300 },
        ],
    },
    reducers: {
        onSave: (state) => {
            state.productList.push({ id: state.id, title: state.title, price: state.price });
        },
        onDelete: (state, action) => {

        },
    },
});

export const { onSave, onDelete } = productListSlice.actions;
export default productListSlice;
