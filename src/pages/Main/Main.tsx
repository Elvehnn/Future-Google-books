import './Main.scss';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { BookPreview } from '../../components/BookPreview/BookPreview';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { getVolumesByTerms } from '../../services/search';
import { totalItemsSelectors } from '../../store/slices/totalItems/totalItemsSlice';
import {
  startIndexActions,
  startIndexSelectors,
} from '../../store/slices/startIndexSlice/startIndexSlice';
import { booksActions, booksSelectors } from '../../store/slices/books/booksSlice';
import { searchValueSelectors } from '../../store/slices/searchValue/searchValueSlice';
import { isLoadingActions, isLoadingSelectors } from '../../store/slices/isLoading/isLoadingSlice';
import { errorActions } from '../../store/slices/error/errorSlice';

export const Main = () => {
  const dispatch = useAppDispatch();
  const { totalItems } = useAppSelector(totalItemsSelectors.all);
  const { startIndex } = useAppSelector(startIndexSelectors.all);
  const { booksArray } = useAppSelector(booksSelectors.all);
  const { searchValue } = useAppSelector(searchValueSelectors.all);
  const { isLoading } = useAppSelector(isLoadingSelectors.all);

  const [paginationDisabled, setPaginationDisabled] = useState(false);

  const handleLoadMoreClick = async () => {
    dispatch(isLoadingActions.setIsLoading(true));

    try {
      const searchOptions = `&startIndex=${startIndex}`;
      const searchResults = await getVolumesByTerms(searchValue, searchOptions);

      if (searchResults) {
        dispatch(booksActions.setBooksArray(searchResults.items));
        dispatch(startIndexActions.incrementStartIndex());
        setPaginationDisabled(searchResults.items.length < 30);
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorObject = { title: error.name, description: error.message };

        dispatch(errorActions.setError(errorObject));
      }
    } finally {
      dispatch(isLoadingActions.setIsLoading(false));
    }
  };

  return (
    <main className="main">
      {totalItems ? (
        <Typography
          variant="h4"
          align="center"
          color="text.secondary"
          sx={{ p: '15px' }}
          data-testid="main-title"
        >
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

      {booksArray.length && booksArray.length >= 30 ? (
        <LoadingButton
          size="medium"
          onClick={handleLoadMoreClick}
          loading={isLoading}
          variant="contained"
          disabled={paginationDisabled}
          data-testid="load-more"
        >
          Load more
        </LoadingButton>
      ) : null}

      {booksArray.length && booksArray.length >= 30 ? (
        <Fab
          variant="circular"
          onClick={() => window.scrollTo(0, 0)}
          sx={{ position: 'sticky', bottom: '75px', alignSelf: 'flex-end' }}
        >
          <NavigationIcon />
        </Fab>
      ) : null}

      {isLoading && <CircularProgress sx={{ position: 'absolute' }} />}
    </main>
  );
};

export default Main;
