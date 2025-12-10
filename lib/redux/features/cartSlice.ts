import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  brand?: string;
  model?: string;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity++;
      state.totalAmount += action.payload.price;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalAmount += existingItem.price;
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
