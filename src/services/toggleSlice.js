import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    active: false,
  },

  reducers: {
    setToggle: (state) => {
      state.active = !state.active;
    },
  },
});

export const { setToggle } = toggleSlice.actions;
