import { Book, ErrorObject } from '../constants/interfaces';

export const SET_STICKY_HEADER = 'SET_STICKY_HEADER';
export const SET_BOOKS_ARRAY = 'SET_BOOKS_ARRAY';
export const RESET_BOOKS_ARRAY = 'RESET_BOOKS_ARRAY';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const RESET_TOTAL_ITEMS = 'RESET_TOTAL_ITEMS';
export const SET_SELECTED_BOOK = 'SET_SELECTED_BOOK';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const INCREMENT_START_INDEX = 'INCREMENT_START_INDEX';
export const IS_LOADING = 'IS_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const setStickyHeader = (isStickyHeader: boolean) => {
  return { type: SET_STICKY_HEADER, payload: isStickyHeader };
};

export const setBooksArray = (searchResult: Book[]) => {
  return { type: SET_BOOKS_ARRAY, payload: searchResult };
};

export const resetBooksArray = () => {
  return { type: RESET_BOOKS_ARRAY };
};

export const setTotalItems = (totalItems: number) => {
  return { type: SET_TOTAL_ITEMS, payload: totalItems };
};

export const resetTotalItems = () => {
  return { type: RESET_TOTAL_ITEMS };
};

export const setSelectedBook = (book: Book) => {
  return { type: SET_SELECTED_BOOK, payload: book };
};

export const setSearchValue = (searchValue: string) => {
  return { type: SET_SEARCH_VALUE, payload: searchValue };
};

export const incrementStartIndex = () => {
  return { type: INCREMENT_START_INDEX };
};

export const setIsLoading = (flag: boolean) => {
  return { type: IS_LOADING, payload: flag };
};

export const setErrorObject = (error: ErrorObject) => {
  return { type: SET_ERROR, payload: error };
};

export const resetErrorObject = () => {
  return { type: RESET_ERROR };
};
