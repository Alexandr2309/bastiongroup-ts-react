import React, { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import BreadCrumbs from './BreadCrumbs';

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <BreadCrumbs />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
