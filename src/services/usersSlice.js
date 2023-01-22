import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// let myuuid = uuidv4();

// console.out('Your UUID is: ' + myuuid);

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],

  reducers: {
    addUser: (state, action) => {
      return [...state, { ...action.payload, id: uuidv4() }];
    },
  },
});

export const { addUser } = usersSlice.actions;
