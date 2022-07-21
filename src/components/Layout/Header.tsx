import React, {FC} from 'react';
import SubHeader from './SubHeader';
import {HeaderTop} from './HeaderTop';

// @ts-ignore
const Header: FC = () => {
  return (
    <header className='header'>
      <HeaderTop />
      <SubHeader />
    </header>
  );
};

export default React.memo(Header);
