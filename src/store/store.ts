import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './slices/books/booksSlice';
import { errorReducer } from './slices/error/errorSlice';
import { isLoadingReducer } from './slices/isLoading/isLoadingSlice';
import { searchValueReducer } from './slices/searchValue/searchValueSlice';
import { startIndexReducer } from './slices/startIndexSlice/startIndexSlice';
import { totalItemsReducer } from './slices/totalItems/totalItemsSlice';

export const createStore = (preloadedState: Record<string, unknown>) => {
  return configureStore({
    reducer: {
      booksArray: booksReducer,
      totalItems: totalItemsReducer,
      startIndex: startIndexReducer,
      searchValue: searchValueReducer,
      isLoading: isLoadingReducer,
      error: errorReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    preloadedState,
  });
};

export const store = createStore({});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
