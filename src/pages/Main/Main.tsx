import './Main.scss';
import { memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { isLoadingSelectors } from '../../store/slices/isLoading/isLoadingSlice';
import { Search } from '../../components/Search/Search';
import { useAppSelector } from '../../store/hooks';

const style = {
  flexGrow: 0,
  position: 'static',
  borderRadius: 2,
  rowGap: '20px',
};

const Main = () => {
  const { isLoading } = useAppSelector(isLoadingSelectors.all);

  return (
    <main className="main">
      <Search {...style} />
      {isLoading && <CircularProgress sx={{ position: 'absolute' }} />}
    </main>
  );
};

const memoMain = memo(Main);

export default memoMain;
