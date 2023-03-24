import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: {
    searchValue: '',
  },
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    resetSearchValue: (state) => {
      state.searchValue = '';
    },
  },
});

export const searchValueSelectors = {
  all: (state: RootState) => state.searchValue,
};

export const searchValueActions = searchValueSlice.actions;
export const searchValueReducer = searchValueSlice.reducer;
