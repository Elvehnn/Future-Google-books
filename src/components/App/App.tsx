import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.scss';
import Main from '../../pages/Main/Main';
import { PATH } from '../../constants/paths';
import './App.scss';
import theme from '../../constants/theme';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { useAppSelector } from '../../store/hooks';
import { BookPage } from '../../pages/BookPage/BookPage';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';
import { errorSelectors } from '../../store/slices/error/errorSlice';

function App() {
  const { error } = useAppSelector(errorSelectors.all);

  return (
    <div className="app" data-testid="app">
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Routes>
            <Route
              path={PATH.BASE_URL}
              element={error.title || error.description ? <ErrorPage {...error} /> : <Main />}
            />
            <Route path={PATH.NOT_FOUND} element={<h3>Not Found</h3>} />
            <Route path={PATH.BOOK} element={<BookPage />} />
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
