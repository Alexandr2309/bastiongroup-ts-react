import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { clearFilters } from '../../store/reducers/list';

const ClearFilters: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='main__clear'>
      <button onClick={(e) => dispatch(clearFilters(true))}>
        Сбросить фильтры
      </button>
    </div>
  );
};

export default ClearFilters;
