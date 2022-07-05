import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddIcon from '@mui/icons-material/Add';
import ConfirmPopUp from '../../components/ConfirmPopUp/ConfirmPopUp';
import { Header } from '../../components/Header/Header';
// import Notification, { notify } from '../../components/Notification/Notification';
import { Card, Typography } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import './BookPage.scss';
import Box from '@mui/system/Box';
import TitleSkeleton from '../../components/Skeleton/TitleSkeleton';
import ColumnSkeleton from '../../components/Skeleton/ColumnSkeleton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Book } from '../../constants/interfaces';
import { PATH } from '../../constants/paths';
import { API_KEY } from '../../constants/constants';
import { getVolumeById } from '../../api/api';
import { setSelectedBook } from '../../store/actions';

export const BookPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>().id || '';
  const [bookToShow, setBookToShow] = useState<Book | null>(null);
  // console.log(selectedBook);

  useEffect(() => {
    // setIsLoading(true);
    getVolumeById(params, API_KEY).then(
      (response) => {
        if (response) {
          setBookToShow(response);
        }
      },
      (error) => {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        // setIsLoading(false);
        // notify(resMessage);
      }
    );
  }, [params]);

  return (
    <div className="main">
      {bookToShow && (
        <div className="book-page">
          <div
            className="book-page__image"
            style={{
              background: `url('${bookToShow.volumeInfo.imageLinks.thumbnail}') no-repeat center center / contain`,
            }}
          ></div>
          <div className="book-page__info">
            <Typography className="book-page__categories" variant="h5">
              {bookToShow.volumeInfo.categories?.join(' / ')}
            </Typography>
            <Typography
              className="book-page__title"
              variant="h4"
              sx={{ fontWeight: '600', m: '15px 0' }}
            >
              {bookToShow.volumeInfo.title}
            </Typography>
            <Typography className="book-page__authors" variant="h5">
              {bookToShow.volumeInfo.authors?.join(',  ')}
            </Typography>
            <p className="book-page__description">{bookToShow.volumeInfo?.description}</p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: 'transparent',
                color: 'primary.main',
                opacity: 0.9,
                mt: '20px',
              }}
              onClick={() => navigate(PATH.BASE_URL)}
            >
              <KeyboardBackspaceIcon sx={{ fontSize: '35px' }} />
            </Button>
          </div>

          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
          {/* {isLoading ? (
            <TitleSkeleton />
          ) : (
            board && (
              <Card
                sx={{
                  minWidth: 0.6,
                  overflow: 'unset',
                  mt: '18px',
                  opacity: 0.9,
                  boxShadow: 'none',
                  p: '16px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h4" color="text.secondary" sx={{ mx: '10px' }}>
                  {board?.title}:
                </Typography>
                <Typography variant="h5" sx={{ fontSize: 16, pt: '1px' }} color="text.primary">
                  {board?.description}
                </Typography>
              </Card>
            )
          )} */}
          {/* </Box> */}
        </div>
      )}

      {/* <Notification /> */}
    </div>
  );
};
