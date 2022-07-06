import * as React from 'react';
import './Header.scss';
import { useForm } from 'react-hook-form';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { PATH } from '../../constants/paths';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { getVolumesByTerms } from '../../api/api';
import { setBooksArray, setSearchValue, setTotalItems } from '../../store/actions';
import { Book } from '../../constants/interfaces';
import { API_KEY, ITEMS_PER_PAGE } from '../../constants/constants';
import TextField from '@mui/material/TextField';

type FormInputs = {
  searchValue: string;
};

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const booksArray: Book[] = useAppSelector((state) => state.books);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    const searchOptions = '';
    const searchValue = encodeURIComponent(data.searchValue);
    const searchResults = await getVolumesByTerms(searchValue, searchOptions, API_KEY);

    dispatch(setBooksArray(searchResults.items));
    dispatch(setTotalItems(searchResults.totalItems));
    dispatch(setSearchValue(searchValue));
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
        <Toolbar sx={{ minHeight: '50px', justifyContent: 'center', p: '0', width: '80%' }}>
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
          >
            <SearchIcon sx={{ color: '#fff' }} />
          </Button>
        </Toolbar>
      </form>
    </AppBar>
  );
};
