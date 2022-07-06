import * as React from 'react';
import './Header.scss';
import { useForm } from 'react-hook-form';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { PATH } from '../../constants/paths';
import { Link as RouterLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SearchIcon from '@mui/icons-material/Search';
import { getVolumesByTerms } from '../../api/api';
import {
  resetBooksArray,
  resetErrorObject,
  resetTotalItems,
  setBooksArray,
  setErrorObject,
  setIsLoading,
  setSearchValue,
  setTotalItems,
} from '../../store/actions';
import TextField from '@mui/material/TextField';

type FormInputs = {
  searchValue: string;
};

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    if (/^\s*$/.test(data.searchValue)) {
      const error = {
        title: 'Пустой поисковый запрос',
        description: '',
      };

      dispatch(setErrorObject(error));
      return;
    }

    dispatch(resetErrorObject());
    dispatch(setIsLoading(true));
    dispatch(resetTotalItems());
    dispatch(resetBooksArray());

    const searchOptions = '';
    const searchValue = encodeURIComponent(data.searchValue);

    try {
      const searchResults = await getVolumesByTerms(searchValue, searchOptions);

      dispatch(setIsLoading(false));

      if (searchResults.totalItems > 0) {
        dispatch(setBooksArray(searchResults.items));
        dispatch(setTotalItems(searchResults.totalItems));
        dispatch(setSearchValue(searchValue));

        return;
      }

      throw new Error('Ничего не найдено');
    } catch (error) {
      if (error instanceof Error) {
        const errorObject = { title: error.name, description: error.message };
        dispatch(setErrorObject(errorObject));
      }
    }
  };

  return (
    <AppBar
      className="header"
      style={{ height: '200px', transition: '0.5s' }}
      sx={{
        justifyContent: 'center',
        flexGrow: 1,
        position: 'fixed',
        background: `url('./ZoCtEVBYKzo.jpg') no-repeat top center / cover`,
      }}
    >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <TextField
            variant="outlined"
            className="search-input"
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              borderRadius: '4px 0 0 4px',
              outline: 'none',
              border: 'none',
            }}
            placeholder="Type here for searching…"
            {...register('searchValue', { required: 'Nothing to search!' })}
          />
          {errors.searchValue && <p>Value is required!</p>}
        </div>

        <Button
          variant="text"
          sx={{
            width: '56px',
            height: '56px',
            backgroundColor: '#87A8EC',
            borderRadius: '0 4px 4px 0',
          }}
          className="search-btn"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          <SearchIcon sx={{ color: '#fff' }} />
        </Button>
      </form>
    </AppBar>
  );
};
