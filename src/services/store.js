import { configureStore } from '@reduxjs/toolkit';
import { toggleSlice } from './toggleSlice';

export const store = configureStore({
  // An object containing the reducers for the store.
  // The keys of the object correspond to the slices of the store's state, and the values are the reducers for those slices.
  reducer: {
    toggle: toggleSlice.reducer,
  },
});
