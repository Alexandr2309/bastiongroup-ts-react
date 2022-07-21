import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeFilterType } from '../../../store/reducers/list';

const TypeItem: React.FC<{ title: string }> = ({ title }) => {
  const filters = useAppSelector((state) => state.list.filters);
  const ID = (Math.random() * 12.3).toFixed(2);
  const dispatch = useAppDispatch();

  const check = useMemo(() => {
    return !!filters.type.find((item) => item.toLowerCase() === title.toLowerCase())
  }, [filters]);

  const changeCheck = useCallback(() => {
      if (!check) dispatch(changeFilterType({ type: 'add', title: title }));
      else dispatch(changeFilterType({ type: 'remove', title: title }));
  }, [check])

  return (
    <div className='custom-check-icon'>
      <input
        type='checkbox'
        checked={check}
        onChange={changeCheck}
        value={title}
        id={`i${ID}`}
      />
      <label htmlFor={`i${ID}`}>{title}</label>
    </div>
  );
};

export default TypeItem;
