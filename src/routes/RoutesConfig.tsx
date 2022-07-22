import React from 'react';
import { useRoutes } from 'react-router-dom';
import routesPath from './routes';

const RoutesConfig = () => {

  const element: React.ReactElement | null = useRoutes(routesPath);

  return element;
};

export default RoutesConfig;
