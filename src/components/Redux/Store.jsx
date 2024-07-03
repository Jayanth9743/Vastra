import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./CatagoriesSlice"
import BagSlice from "./BagSlice";
import FavSlice from "./FavSlice";

const Store = configureStore(
    {
        reducer:{
            items:itemsSlice,
            bag:BagSlice,
            favorite:FavSlice,
        }
    }
)

export default Store