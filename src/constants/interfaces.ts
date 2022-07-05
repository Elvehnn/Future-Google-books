export interface ActionPayload {
  isSticky?: boolean;
  searchValue?: string;
  searchResult?: Book[];
  totalItems?: number;
  selectedBook?: Book | null;
}

export interface Action {
  type: string;
  payload: ActionPayload;
}

export interface Book {
  id: string;
  volumeInfo: {
    imageLinks: { [key: string]: string };
    title: string;
    authors: string[];
    categories: string[];
    description: string;
  };
}
