import React, { useEffect, useState } from 'react';
import Accordion from '../../UI/Accordion';
import UpdateRange from '../../UI/Range';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  changeFilterCost,
  changeMaxCost,
  changeMinCost,
} from '../../../store/reducers/list';

const Cost: React.FC = () => {
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.list.filters.cost);

  const [isFirst, setIsFirst] = useState<boolean>(true);

  useEffect(() => {
    if (isFirst && (values[0] !== 104 || values[1] !== 9990)) {
      return setIsFirst(false);
    }
  }, [values, changeFilterCost, changeMaxCost, changeMinCost]);

  const verifyNumberTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFirst) setIsFirst(false);
    dispatch(changeMinCost(+e.target.value));
  };
  const verifyNumberFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFirst) setIsFirst(false);
    dispatch(changeMaxCost(+e.target.value));
  };


  return (
    <Accordion title='Цена, руб' customStyle='hide-border'>
      <div className='main__cost'>
        <div className='main__cost-inputs'>
          <div className='main__cost-from'>
            <input
              type='text'
              id='from'
              placeholder='104'
              value={isFirst ? '' : values[0]}
              maxLength={4}
              onChange={verifyNumberTo}
            />
          </div>
          <div className='main__cost-to'>
            <input
              type='text'
              id='to'
              placeholder='9990'
              value={isFirst ? '' : values[1]}
              onChange={verifyNumberFrom}
              maxLength={4}
            />
          </div>
        </div>
        <UpdateRange rtl={false} values={values} />
      </div>
    </Accordion>
  );
};

export default Cost;
