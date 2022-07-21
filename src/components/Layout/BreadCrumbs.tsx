import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IPath } from '../../types/models';
import { MainCrumb } from './MainCrumb';

const crumbs: { types: string; products: string } = {
  types: 'Типы продуктов',
  products: 'Продукты',
};

const BreadCrumbs: FC = () => {
  const [path, setPath] = useState<IPath>({ pathname: '', relativePath: '' });
  const location = useLocation();

  useEffect(() => {
    const route = location.pathname.match(/\w+/i);
    if (route) {
      // @ts-ignore
      const name: string = crumbs[route[0]];
      // @ts-ignore
      setPath({ ...path, pathname: crumbs[route[0]], relativePath: route[0] });
    } else {
      setPath({ pathname: '', relativePath: '' });
    }
  }, [location]);

  return (
    <div className='container'>
      <div className='crumb' style={{ display: 'flex', gap: 14 }}>
        <MainCrumb path={path} />
        {path && (
          <div
            className='crumb__item'
            style={{ display: 'flex', alignItems: 'center', gap: 14 }}
          >
            <Link to={`/${path.relativePath}`} className='last'>
              {path.pathname}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreadCrumbs;
