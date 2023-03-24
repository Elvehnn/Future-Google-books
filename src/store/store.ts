import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './slices/books/booksSlice';
import { errorReducer } from './slices/error/errorSlice';
import { isLoadingReducer } from './slices/isLoading/isLoadingSlice';
import { searchParamsReducer } from './slices/searchParams/searchParamsSlice';
import { totalItemsReducer } from './slices/totalItems/totalItemsSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();

export const createStore = (preloadedState: Record<string, unknown>) => {
  return configureStore({
    reducer: {
      booksArray: booksReducer,
      totalItems: totalItemsReducer,
      searchParams: searchParamsReducer,
      isLoading: isLoadingReducer,
      error: errorReducer,
    },
    middleware: [saga],
    preloadedState,
  });
};

export const store = createStore({});

saga.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
