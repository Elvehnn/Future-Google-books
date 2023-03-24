import { Book } from '../../../constants/interfaces';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const booksSlice = createSlice({
  name: 'books',
  initialState: { booksArray: [] as Book[] },
  reducers: {
    setBooksArray: (state, { payload }: PayloadAction<Book[]>) => {
      state.booksArray = [...state.booksArray, ...payload];
    },
    resetBooksArray: (state) => {
      state.booksArray = [];
    },
  },
});

export const booksSelectors = {
  all: (state: RootState) => state.booksArray,
};

export const booksActions = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
