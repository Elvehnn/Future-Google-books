import { ITEMS_PER_PAGE } from '../../../constants/constants';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const startIndexSlice = createSlice({
  name: 'startIndex',
  initialState: {
    startIndex: ITEMS_PER_PAGE,
  },
  reducers: {
    incrementStartIndex: (state) => {
      state.startIndex += ITEMS_PER_PAGE;
    },
    resetStartIndex: (state) => {
      state.startIndex = ITEMS_PER_PAGE;
    },
  },
});

export const startIndexSelectors = {
  all: (state: RootState) => state.startIndex,
};

export const startIndexActions = startIndexSlice.actions;
export const startIndexReducer = startIndexSlice.reducer;
