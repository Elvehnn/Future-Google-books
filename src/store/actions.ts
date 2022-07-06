import { Book } from '../constants/interfaces';

export const SET_STICKY_HEADER = 'SET_STICKY_HEADER';
export const SET_BOOKS_ARRAY = 'SET_BOOKS_ARRAY';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const SET_SELECTED_BOOK = 'SET_SELECTED_BOOK';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const INCREMENT_START_INDEX = 'INCREMENT_START_INDEX';

export const setStickyHeader = (isStickyHeader: boolean) => {
  return { type: SET_STICKY_HEADER, payload: isStickyHeader };
};

export const setBooksArray = (searchResult: Book[]) => {
  return { type: SET_BOOKS_ARRAY, payload: searchResult };
};

export const setTotalItems = (totalItems: number) => {
  return { type: SET_TOTAL_ITEMS, payload: totalItems };
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