import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import GostItem from './GostItem';

const Gosts: React.FC = () => {
  const { gosts } = useAppSelector((state) => state.list);

  return (
    <div className='main__gosts gosts'>
      {gosts.map((gost, i) => (
        <GostItem title={gost} key={i} />
      ))}
    </div>
  );
};

export default Gosts;
