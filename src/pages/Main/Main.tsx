import './Main.scss';
import Typography from '@mui/material/Typography';
// import Notification, { notify } from '../../components/Notification/Notification';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Book } from '../../constants/interfaces';
import { BookPreview } from '../../components/BookPreview/BookPreview';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { getVolumesByTerms } from '../../api/api';
import { API_KEY } from '../../constants/constants';
import { incrementStartIndex, setBooksArray } from '../../store/actions';

export const Main = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector((state) => state.totalItems);
  const startIndex = useAppSelector((state) => state.startIndex);
  const booksArray: Book[] = useAppSelector((state) => state.books);
  const searchValue = useAppSelector((state) => state.searchValue);
  const [loading, setLoading] = useState(false);
  const [paginationDisabled, setPaginationDisabled] = useState(false);

  const handleLoadMoreClick = async () => {
    setLoading(true);

    const searchOptions = `&startIndex=${startIndex}`;
    const searchResults = await getVolumesByTerms(searchValue, searchOptions, API_KEY);

    dispatch(setBooksArray(searchResults.items));
    dispatch(incrementStartIndex());
    setLoading(false);
    setPaginationDisabled(searchResults.items.length < 30);
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
          return <BookPreview key={book.id} {...book} />;
        })}
      </div>

      {booksArray.length ? (
        <LoadingButton
          size="medium"
          onClick={handleLoadMoreClick}
          loading={loading}
          variant="contained"
          disabled={paginationDisabled}
        >
          Load more
        </LoadingButton>
      ) : null}

      {/* <Notification /> */}
    </main>
  );
};

export default Main;
