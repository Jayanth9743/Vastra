
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const FavSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    }
  }
});

export const totalItems = (state) => state.favorite.favorites.length;
export const { addToFavorites, removeFromFavorites } = FavSlice.actions;
export default FavSlice.reducer;
