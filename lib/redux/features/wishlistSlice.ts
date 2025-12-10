import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  badge?: "SALE" | "NEW" | "SOLD OUT";
}

interface WishlistState {
  items: WishlistItem[];
  totalItems: number;
}

const initialState: WishlistState = {
  items: [],
  totalItems: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (!existingItem) {
        state.items.push(action.payload);
        state.totalItems++;
      }
    },

    removeFromWishlist: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);

      if (index !== -1) {
        state.items.splice(index, 1);
        state.totalItems--;
      }
    },

    toggleWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (existingIndex !== -1) {
        state.items.splice(existingIndex, 1);
        state.totalItems--;
      } else {
        state.items.push(action.payload);
        state.totalItems++;
      }
    },

    clearWishlist: (state) => {
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
