import { FILTERS } from '../constants/filters';
import { SORT_TYPES } from '../constants/sortTypes';
import { getVolumesByTermsRequest } from '../api/api';
import { BooksResponse } from '../api/typesApi';

export const getVolumesByTerms = async (
  searchString: string,
  category = '',
  sortBy = '',
  startIndex = 0
): Promise<Nullable<BooksResponse>> => {
  const categoryOption = category === FILTERS.DEFAULT ? '' : `+subject:${category}`;
  const sortingOption = sortBy === SORT_TYPES.DEFAULT ? '' : `&orderBy=${sortBy}`;
  const options = `${categoryOption}${sortingOption}&startIndex=${startIndex}`;

  try {
    const response = await getVolumesByTermsRequest(searchString, options);

    if (!response) {
      throw new Error('Что-то пошло не так.');
    }

    return response.data;
  } catch (error) {
    return null;
  }
};
