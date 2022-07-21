import MainPage from '../pages/MainPage';
import Types from '../pages/Types';
import Products from '../pages/Produсts';
import ShoppingCart from '../pages/ShoppingCart';
import { Navigate, RouteObject } from 'react-router-dom';
import React from 'react';

const enum Paths {
  mainPage = '/bastiongroup-ts-react',
  typesPage = '/bastiongroup-ts-react/types',
  productsPage = '/bastiongroup-ts-react/products',
  shoppingPage = '/bastiongroup-ts-react/shopping',
};

const routesPath: RouteObject[] = [
  { path: Paths.mainPage, element: <MainPage />, index: true },
  { path: Paths.typesPage, element: <Types /> },
  { path: Paths.productsPage, element: <Products /> },
  { path: Paths.shoppingPage, element: <ShoppingCart /> },
  { path: '*', element: <Navigate to={Paths.mainPage} /> },
];

export default routesPath;
