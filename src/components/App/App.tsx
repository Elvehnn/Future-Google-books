import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.scss';
import Main from '../../pages/Main/Main';
import { PATH } from '../../constants/paths';
import './App.scss';
import theme from '../../constants/theme';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { errors } from '../../constants/errors';
import ErrorBoundary from './ErrorBoundary';
import { useAppDispatch } from '../../store/hooks';
import { setStickyHeader } from '../../store/actions';

function App() {
  const dispatch = useAppDispatch();

  const scrollHandler = () => {
    if (window.scrollY >= 5) {
      dispatch(setStickyHeader(true));
    } else {
      dispatch(setStickyHeader(false));
    }
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <ErrorBoundary>
      <div className="app">
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path={PATH.BASE_URL} element={<Main />} />
              <Route path={PATH.NOT_FOUND} element={<ErrorPage error={errors['404']} />} />
              {/* <Route path={PATH.BOOK} element={<Book />} /> */}
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
