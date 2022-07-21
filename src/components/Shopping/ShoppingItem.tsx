import React, { useEffect, useState } from 'react';
import { IProduct } from '../../types/models';
import { CardCount } from '../CardList/CardCount';
import { useAppDispatch } from '../../hooks/redux';
import {
  changeProdCount,
  deleteOneFromShopping,
} from '../../store/reducers/products';

const ShoppingItem: React.FC<IProduct> = ({
  id,
  type,
  stock,
  cost,
  hit,
  img,
  gost,
  title,
  count,
}) => {
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [value, setValue] = useState(count);
  const dispatch = useAppDispatch();

  const deleteThisProd = () => {
    dispatch(deleteOneFromShopping(id));
  };

  useEffect(() => {
    if (isFirst) return setIsFirst(false);

    dispatch(changeProdCount({ id: id, count: value }));

  }, [value]);

  return (
    <div className='shopping__item shopping-item'>
      <div className='shopping__content'>
        <div className='shopping-item__img'>
          <img src={img} alt='product' />
        </div>
        <div className='shopping-item__info'>
          <div className='card-item__gost shopping-item__gost'>
            <div className=''>{gost}</div>
          </div>
          <div className='card-item__title shopping-item__title'>{title}</div>
          <div className='card-item__cost shopping-item__cost'>{cost} руб.</div>
        </div>
        <CardCount value={value} setValue={setValue} />
        <div className='shopping-item__sum'>{(+cost * count).toFixed(1)} руб.</div>
        <div className='shopping-item__remove' onClick={deleteThisProd}>
          <img src={require('../../img/trash.png')} alt='trash' />
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
