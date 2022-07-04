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
import { setBooksArray, setTotalItems } from '../../store/actions';

type FormInputs = {
  searchValue: string;
};

interface IHeaderProps {
  setMainPageBgr?: () => void;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  height: '40px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

export const Header: React.FC<IHeaderProps> = (props) => {
  const dispatch = useAppDispatch();
  const stickyHeader = useAppSelector((state) => state.stickyHeader);
  const [apiKey, setApiKey] = useState('AIzaSyAhjeh8DuNmdp0Z0C7ldKLwcFvCln0WjzM');
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    const searchString = data.searchValue
      .split(' ')
      .filter((element) => element)
      .join('+');

    const searchResults = await getVolumesByTerms(searchString, apiKey);

    dispatch(setBooksArray(searchResults.items));
    dispatch(setTotalItems(searchResults.totalItems));
  };
  // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar
      className="header"
      style={
        stickyHeader
          ? { height: '50px', transition: '0.5s' }
          : { height: '200px', transition: '0.5s' }
      }
      sx={{ justifyContent: 'center', flexGrow: 1 }}
    >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Toolbar
          style={
            stickyHeader
              ? { height: '50px', transition: '0.5s' }
              : { height: '200px', transition: '0.5s' }
          }
          sx={{ minHeight: '50px', justifyContent: 'center', p: '0', width: '80%' }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: '100%' }}
              placeholder="Type here for searching…"
              {...register('searchValue', { required: 'Nothing to search!' })}
              // className={errors.searchValue ? `form__path-input error` : `form__path-input`}
            />
          </Search>
        </Toolbar>
      </form>
    </AppBar>
  );
};
