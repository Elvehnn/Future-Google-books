import './Main.scss';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Book } from '../../constants/interfaces';
import { BookPreview } from '../../components/BookPreview/BookPreview';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { getVolumesByTerms } from '../../api/api';
import { incrementStartIndex, setBooksArray, setIsLoading } from '../../store/actions';
import CircularProgress from '@mui/material/CircularProgress';

export const Main = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector((state) => state.totalItems);
  const startIndex = useAppSelector((state) => state.startIndex);
  const booksArray: Book[] = useAppSelector((state) => state.books);
  const searchValue = useAppSelector((state) => state.searchValue);
  const isLoading = useAppSelector((state) => state.isLoading);

  const [paginationDisabled, setPaginationDisabled] = useState(false);

  const handleLoadMoreClick = async () => {
    dispatch(setIsLoading(true));

    const searchOptions = `&startIndex=${startIndex}`;
    const searchResults = await getVolumesByTerms(searchValue, searchOptions);

    dispatch(setBooksArray(searchResults.items));
    dispatch(incrementStartIndex());
    dispatch(setIsLoading(false));
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
        {booksArray.length
          ? booksArray.map((book) => {
              return <BookPreview key={book.id} {...book} />;
            })
          : null}
      </div>

      {booksArray.length ? (
        <LoadingButton
          size="medium"
          onClick={handleLoadMoreClick}
          loading={isLoading}
          variant="contained"
          disabled={paginationDisabled}
        >
          Load more
        </LoadingButton>
      ) : null}

      {isLoading && <CircularProgress sx={{ position: 'absolute' }} />}
    </main>
  );
};

export default Main;
