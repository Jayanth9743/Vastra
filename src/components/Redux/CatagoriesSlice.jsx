import { createSlice } from "@reduxjs/toolkit";
import {menWear, womenWear, kidsWear, jewelery,recommendation} from "../Data"

const initialState = {
    items: [],
    catagory:''
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers:{
        setCategory(state, action){
            state.catagory = action.payload;
            switch (action.payload){
                case 'men':
                    state.items = menWear;
                    break;
                case 'women':
                    state.items = womenWear;
                    break;
                case 'kids':
                    state.items = kidsWear;
                    break;
                case 'jewelery':
                    state.items = jewelery;
                    break;
                case 'recommendation':
                    state.items = recommendation;
            }
        }
    }
});

export const {setCategory} = itemsSlice.actions;

export default itemsSlice.reducer;