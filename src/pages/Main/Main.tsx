import MainLayout from '../../components/MainLayout/MainLayout';

const style = {
  width: '70%',
  height: '250px',
  position: 'static',
  rowGap: '20px',
  marginTop: '30vh',
};

const Main = () => {
  return <MainLayout searchStyle={style} background />;
};

export default Main;
