import './SearchResults.scss';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { BookPreview } from '../../components/BookPreview/BookPreview';
import LoadingButton from '@mui/lab/LoadingButton';
import { memo, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { totalItemsSelectors } from '../../store/slices/totalItems/totalItemsSlice';
import { booksActions, booksSelectors } from '../../store/slices/books/booksSlice';
import {
  searchParamsActions,
  searchParamsSelectors,
} from '../../store/slices/searchParams/searchParamsSlice';
import { isLoadingActions, isLoadingSelectors } from '../../store/slices/isLoading/isLoadingSlice';
import { ITEMS_PER_PAGE } from '../../constants/constants';
import { Search } from '../../components/Search/Search';

const style = {
  flexGrow: 0,
  position: 'fixed',
  borderRadius: 2,
  top: 0,
  left: 0,
  height: '200px',
  flexDirection: 'row',
  rowGap: '10px',
  alignItems: 'none',
};

const SearchResults = () => {
  const dispatch = useAppDispatch();
  const { totalItems } = useAppSelector(totalItemsSelectors.all);
  const { booksArray } = useAppSelector(booksSelectors.all);
  const { searchParams } = useAppSelector(searchParamsSelectors.all);
  const { isLoading } = useAppSelector(isLoadingSelectors.all);

  const [paginationDisabled, setPaginationDisabled] = useState(false);

  const handleLoadMoreClick = async () => {
    dispatch(isLoadingActions.setIsLoading(true));

    const { searchValue, category, sortBy, startIndex } = searchParams;

    dispatch(booksActions.getBooksArray({ searchValue, category, sortBy, startIndex }));
    dispatch(searchParamsActions.incrementStartIndex());

    const isBooksArrayFull = booksArray.length !== 0 && startIndex + +ITEMS_PER_PAGE >= totalItems;
    setPaginationDisabled(isBooksArrayFull);
  };

  return (
    <main className="search-results">
      <Search {...style} />
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

      <div className="cards-container" style={{ transition: 'ease 0.5s' }}>
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

const memoSearchResults = memo(SearchResults);

export default memoSearchResults;
