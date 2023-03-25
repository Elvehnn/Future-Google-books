import { FC, ReactElement } from 'react';
import Footer from '../Footer/Footer';
import { Search, SearchPanelStyle } from '../Search/Search';
import './MainLayout.scss';

type MainLayoutProps = {
  children?: ReactElement;
  searchStyle?: SearchPanelStyle;
  background?: boolean;
};

const MainLayout: FC<MainLayoutProps> = ({ children, searchStyle, background }) => {
  const mainBackground = background
    ? { background: `url('./ZoCtEVBYKzo.jpg') no-repeat top center / cover` }
    : { backgroundColor: '#FFF' };

  return (
    <main className="main" style={mainBackground}>
      <Search {...searchStyle} />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
