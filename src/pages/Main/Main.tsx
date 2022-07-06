import './Main.scss';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/paths';
import Footer from '../../components/Footer/Footer';
// import Notification, { notify } from '../../components/Notification/Notification';
import BoardsSkeleton from '../../components/Skeleton/BoardsSkeleton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Book } from '../../constants/interfaces';
import { BookPreview } from '../../components/BookPreview/BookPreview';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { getVolumesByTerms } from '../../api/api';
import { API_KEY } from '../../constants/constants';
import { incrementStartIndex, setBooksArray, setTotalItems } from '../../store/actions';

export const Main = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector((state) => state.totalItems);
  const startIndex = useAppSelector((state) => state.startIndex);
  const booksArray: Book[] = useAppSelector((state) => state.books);
  const searchValue = useAppSelector((state) => state.searchValue);
  const [loading, setLoading] = useState(false);

  const handleLoadMoreClick = async () => {
    setLoading(true);

    const searchOptions = `&startIndex=${startIndex}`;
    const searchResults = await getVolumesByTerms(searchValue, searchOptions, API_KEY);

    dispatch(setBooksArray(searchResults.items));
    dispatch(incrementStartIndex());
    setLoading(false);
  };

  return (
    <main className="main">
      {totalItems ? (
        <Typography variant="h4" align="center" color="text.secondary" sx={{ p: '15px' }}>
          Found {totalItems} items
        </Typography>
      ) : null}

      <div className="cards-container">
        {booksArray.map((book) => {
          // console.log(book);
          return <BookPreview key={book.id} {...book} />;
        })}
      </div>

      {booksArray.length ? (
        <LoadingButton
          size="medium"
          onClick={handleLoadMoreClick}
          loading={loading}
          variant="contained"
        >
          Load more
        </LoadingButton>
      ) : null}
      {/* {isLoading ? <BoardsSkeleton /> : <div className="boards__container">{boardsToShow}</div>} */}
      {/* <Notification /> */}
    </main>
  );
};

export default Main;
