import SearchResults from '../../components/SearchResults/SearchResults';
import MainLayout from '../../components/MainLayout/MainLayout';

const style = {
  flexGrow: 0,
  position: 'fixed',
  top: 0,
  left: 0,
  height: '200px',
  flexDirection: 'row',
  rowGap: '10px',
  alignItems: 'none',
  borderRadius: 0,
};

const Main = () => {
  return (
    <MainLayout searchStyle={style}>
      <SearchResults />
    </MainLayout>
  );
};

export default Main;
