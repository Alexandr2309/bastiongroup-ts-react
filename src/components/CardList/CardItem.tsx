import React, { useEffect, useRef, useState } from 'react';
import { IProduct } from '../../types/models';
import useHover from '../../hooks/useHover';
import { CardLabels } from '../UI/CardLabels';
import { CardCount } from './CardCount';
import { CardFavorite } from '../UI/CardFavorite';
import { useAppDispatch } from '../../hooks/redux';
import { addProductToShoppingCart as addProduct } from '../../store/reducers/products';

const CardItem: React.FC<IProduct> = ({
  id,
  type,
  stock,
  cost,
  hit,
  img,
  gost,
  title,
  variant,
  discount,
}) => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const [classes, setClasses] = useState<string>('cards__item card-item');
  const isHovering = useHover(hoverRef);
  const [productCount, setProductCount] = useState<number>(1);

  const dispatch = useAppDispatch();

  const addProductToShoppingCart = () => {
    if (productCount < 1) return alert('Минимальное количество товара - 1!');
    const objToPush: IProduct = {
      id: id,
      type: type,
      stock: stock,
      cost: cost,
      hit: hit,
      img: img,
      gost: gost,
      title: title,
      count: productCount,
    };
    dispatch(addProduct(objToPush));
  };

  useEffect(() => {
    !isHovering
      ? setClasses((cl) => cl.replace(/active/gi, ''))
      : setClasses((cl) => cl + ' active');

    if (variant)
      !/var/i.test(classes) && setClasses((cl) => cl + ` var${variant}`);
  }, [isHovering, variant]);

  return (
    <div className={classes} ref={hoverRef}>
      <div className='card-item__content'>
        {isHovering && <CardFavorite />}
        <CardLabels
          hit={hit}
          stock={stock}
          discount={discount}
          isHovering={isHovering}
          variant={variant}
        />
        <div className='card-item__img'>
          <img src={img} alt='plug' />
        </div>
        <div className='card-item__gost'>
          <div className=''>{gost}</div>
        </div>
        <div className='card-item__title'>{title}</div>
        <div className='card-item__cost-block'>
          <div className='card-item__cost'>{cost} руб.</div>
          {isHovering && (
            <CardCount value={productCount} setValue={setProductCount} />
          )}
        </div>
      </div>
      {isHovering && (
        <div
          className='card-item__actions'
          style={{ opacity: isHovering ? 1 : 0 }}
        >
          <button className='card-item__btn' onClick={addProductToShoppingCart}>
            <span>
              <img src={require('../../img/shopping-cart.png')} alt='shopping-cart' />
            </span>
            В корзину
          </button>
          <button className='card-item__btn'>Подробнее</button>
        </div>
      )}
    </div>
  );
};
export default CardItem;
