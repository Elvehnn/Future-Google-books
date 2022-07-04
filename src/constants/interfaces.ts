export interface ActionPayload {
  isSticky?: boolean;
  searchValue?: string;
  searchResult?: Book[];
  totalItems?: number;
}

export interface Action {
  type: string;
  payload: ActionPayload;
}

export interface Book {
  id: string;
  volumeInfo: {
    imageLinks: string[];
    title: string;
    authors: string[];
    categories: string[];
  };
}
