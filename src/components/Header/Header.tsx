import * as React from 'react';
import './Header.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { FILTERS } from '../../constants/filters';
import { getVolumesByTerms } from '../../services/search';
import { isFieldEmpty } from '../../services/validators';
import { generateErrorObject } from '../../utils/generateErrorObject';
import { SORT_TYPES } from '../../constants/sortTypes';
import { isLoadingActions, isLoadingSelectors } from '../../store/slices/isLoading/isLoadingSlice';
import { errorActions } from '../../store/slices/error/errorSlice';
import { totalItemsActions } from '../../store/slices/totalItems/totalItemsSlice';
import { booksActions } from '../../store/slices/books/booksSlice';
import { searchValueActions } from '../../store/slices/searchValue/searchValueSlice';

type FormInputs = {
  searchValue: string;
  sortBy: string;
  categories: string;
};

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(isLoadingSelectors.all);
  const [sortBy, setSortBy] = useState('Relevance');
  const [category, setCategory] = useState('All');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    if (isFieldEmpty(data.searchValue)) {
      const error = generateErrorObject('Пустой поисковый запрос', '');

      dispatch(errorActions.setError(error));
      return;
    }

    dispatch(isLoadingActions.setIsLoading(true));
    dispatch(errorActions.resetError());
    dispatch(totalItemsActions.setTotalItems(0));
    dispatch(booksActions.resetBooksArray());

    const searchValue = encodeURIComponent(data.searchValue);

    try {
      const searchResults = await getVolumesByTerms(searchValue, category, sortBy);

      if (searchResults && searchResults.totalItems > 0) {
        dispatch(booksActions.setBooksArray(searchResults.items));
        dispatch(totalItemsActions.setTotalItems(searchResults.totalItems));

        return;
      }

      const errorObject = {
        title: 'Ничего не найдено.',
        description: 'Попробуйте изменить запрос.',
      };

      dispatch(errorActions.setError(errorObject));
    } catch (error) {
      if (error instanceof Error) {
        const errorObject = { title: error.name, description: error.message };

        dispatch(errorActions.setError(errorObject));
      }
    } finally {
      dispatch(searchValueActions.setSearchValue(searchValue));
      dispatch(isLoadingActions.setIsLoading(false));
    }
  };

  return (
    <AppBar
      className="header"
      data-testid="header"
      sx={{
        flexGrow: 1,
        position: 'fixed',
        background: `url('./ZoCtEVBYKzo.jpg') no-repeat top center / cover`,
      }}
    >
      <h1 className="header__title" data-testid="header-title">
        Book search
      </h1>

      <form className="form" data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="search">
          <div className="search__input-container">
            <TextField
              data-testid="search-input"
              variant="outlined"
              className="search-input"
              sx={{
                height: '100%',
                backgroundColor: '#fff',
                borderRadius: '4px 0 0 4px',
                outline: 'none',
                border: 'none',
              }}
              placeholder="Type here for searching…"
              {...register('searchValue', { required: 'Nothing to search!' })}
            />
            <Button
              variant="text"
              sx={{
                padding: '6px 16px',
                minWidth: '0',
                height: '100%',
                backgroundColor: '#87A8EC',
                borderRadius: '0 4px 4px 0',
              }}
              className="search__btn"
              data-testid="search-btn"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              <SearchIcon sx={{ color: '#fff' }} />
            </Button>
          </div>

          {errors.searchValue && <p>Value is required!</p>}
        </div>

        <div className="search__options">
          <select
            defaultValue="relevance"
            className="search__sortBy"
            data-testid="search-sortBy"
            {...register('sortBy')}
            onChange={(event) => setSortBy(event.target.value as string)}
          >
            <option value={SORT_TYPES.DEFAULT}>{SORT_TYPES.DEFAULT}</option>
            <option value={SORT_TYPES.NEWEST}>{SORT_TYPES.NEWEST}</option>
          </select>

          <select
            defaultValue="All"
            className="search__categories"
            data-testid="search-categories"
            {...register('categories')}
            onChange={(event) => setCategory(event.target.value as string)}
          >
            <option value="0" disabled>
              Categories
            </option>
            <option value={FILTERS.DEFAULT}>{FILTERS.DEFAULT}</option>
            <option value={FILTERS.ART}>{FILTERS.ART}</option>
            <option value={FILTERS.BIORAPHY}>{FILTERS.BIORAPHY}</option>
            <option value={FILTERS.COMPUTERS}>{FILTERS.COMPUTERS}</option>
            <option value={FILTERS.HISTORY}>{FILTERS.HISTORY}</option>
            <option value={FILTERS.MEDICAL}>{FILTERS.MEDICAL}</option>
            <option value={FILTERS.POETRY}>{FILTERS.POETRY}</option>
          </select>
        </div>
      </form>
    </AppBar>
  );
};
