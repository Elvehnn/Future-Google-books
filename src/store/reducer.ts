import { Action, Book } from '../constants/interfaces';
import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import {
  INCREMENT_START_INDEX,
  SET_BOOKS_ARRAY,
  SET_SEARCH_VALUE,
  SET_SELECTED_BOOK,
  SET_STICKY_HEADER,
  SET_TOTAL_ITEMS,
} from './actions';

export const stickyHeader = (state = false, action: Action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_STICKY_HEADER: {
      return payload.isSticky;
    }

    default:
      return state;
  }
};

export const books = (state: Book[] = [], action: Action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_BOOKS_ARRAY: {
      return Array.isArray(payload) ? [...state, ...payload] : [...state, payload];
    }

    default:
      return state;
  }
};

export const totalItems = (state = 0, action: Action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_TOTAL_ITEMS: {
      return payload;
    }

    default:
      return state;
  }
};

export const startIndex = (state = 30, action: Action) => {
  switch (action.type) {
    case INCREMENT_START_INDEX: {
      const newstate = state + 30;
      return newstate;
    }

    default:
      return state;
  }
};

export const selectedBook = (state = null, action: Action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_SELECTED_BOOK: {
      return payload;
    }

    default:
      return state;
  }
};

export const searchValue = (state = '', action: Action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_SEARCH_VALUE: {
      return payload;
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  routerReducer,
  stickyHeader,
  books,
  totalItems,
  selectedBook,
  searchValue,
  startIndex,
});

export default rootReducer;
