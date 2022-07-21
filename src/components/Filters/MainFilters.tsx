import React from 'react';
import Category from './Categories/Category';
import Cost from './Cost/Cost';
import ProductsTypes from './TypesProduct/ProductsTypes';
import Brand from './Brand';
import { Filters } from './Filters';
import FilterCheck from './FilterCheck';
import ClearFilters from './ClearFilters';

const MainFilters: React.FC = () => {
  return (
    <div>
      <Category />
      <Filters />
      <Cost />
      <ProductsTypes />
      <Brand />
      <FilterCheck title='Выбор покупателей' />
      <FilterCheck title='Лучшая цена' />
      <ClearFilters />
    </div>
  );
};

export default MainFilters;
