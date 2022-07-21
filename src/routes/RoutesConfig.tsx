import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Types from '../pages/Types';
import MainPage from '../pages/MainPage';
import Products from '../pages/Produсts';
import ShoppingCart from '../pages/ShoppingCart';

const RoutesConfig = () => {
  const element = useRoutes([
    { path: '/bastiongroup-ts-react', element: <MainPage />, index: true },
    { path: '/bastiongroup-ts-react/types', element: <Types /> },
    { path: '/bastiongroup-ts-react/products', element: <Products /> },
    { path: '/bastiongroup-ts-react/shopping', element: <ShoppingCart /> },
    { path: '*', element: <Navigate to='/bastiongroup-ts-react' /> },
  ]);

  return element
};

export default RoutesConfig;
