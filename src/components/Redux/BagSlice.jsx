import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bag: [],
    totalAmount: 0,
    totalQuantity: 0
};

const BagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        AddBag: (state, action) => {
            const find = state.bag.findIndex(item => item.id === action.payload.id);
            if (find >= 0) {
                state.bag[find].quantity += 1;
                state.bag[find].totalPrice += state.bag[find].price;
            } else {
                const tempVar = { ...action.payload, quantity: 1, totalPrice: action.payload.price };
                state.bag.push(tempVar);
            }
            state.totalAmount = state.bag.reduce((acc, item) => acc + item.totalPrice, 0);
            state.totalQuantity = state.bag.reduce((acc, item) => acc + item.quantity, 0);
        },
        RemoveBag: (state, action) => {
            state.bag = state.bag.filter(item => item.id !== action.payload.id);
            state.totalAmount = state.bag.reduce((acc, item) => acc + item.totalPrice, 0);
            state.totalQuantity = state.bag.reduce((acc, item) => acc + item.quantity, 0);
        },
        IncreaseQuantity: (state, action) => {
            const find = state.bag.findIndex(item => item.id === action.payload.id);
            if (find >= 0) {
                state.bag[find].quantity += 1;
                state.bag[find].totalPrice += state.bag[find].price;
            }
            state.totalAmount = state.bag.reduce((acc, item) => acc + item.totalPrice, 0);
            state.totalQuantity = state.bag.reduce((acc, item) => acc + item.quantity, 0);
        },
        DecreaseQuantity: (state, action) => {
            const find = state.bag.findIndex(item => item.id === action.payload.id);
            if (find >= 0 && state.bag[find].quantity > 1) {
                state.bag[find].quantity -= 1;
                state.bag[find].totalPrice -= state.bag[find].price;
            }
            state.totalAmount = state.bag.reduce((acc, item) => acc + item.totalPrice, 0);
            state.totalQuantity = state.bag.reduce((acc, item) => acc + item.quantity, 0);
        }
    }
});

export const { AddBag, RemoveBag, IncreaseQuantity, DecreaseQuantity } = BagSlice.actions;
export default BagSlice.reducer;
