import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { changeFilterGosts } from '../../store/reducers/list';

const GostItem: React.FC<{ title: string }> = ({ title }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    selected
      ? dispatch(changeFilterGosts({ type: 'add', title: title }))
      : dispatch(changeFilterGosts({ type: 'remove', title: title }));

  }, [selected]);

  return (
    <div
      className={selected ? 'gosts__item selected' : 'gosts__item'}
      onClick={(e: React.MouseEvent) => setSelected((s) => !s)}
    >
      {title}
    </div>
  );
};

export default GostItem;
