import React, { FC } from 'react';
import useInput from '../../hooks/useInput';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

const SubHeader: FC = () => {
  const search = useInput();
  const { productsShopping } = useAppSelector((state) => state.products);
  const na = useNavigate();

  function searchItems(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      console.log(search.value);
    }
  }

  return (
    <div className='header__block container'>
      <div className='header__logo'>
        <img src='./img/header__logo.png' alt='logo' />
      </div>
      <div className='header__text'>
        Производитель <br />
        металлических <br />
        изделий №1
      </div>
      <div className='header__catalog'>
        <div className='header__all-application'>
          <img src='./img/all-application-white.png' alt='all-application' />
        </div>
        <span>Каталог</span>
      </div>
      <div className='header__input'>
        <input
          onKeyDown={searchItems}
          {...search}
          type='text'
          className='header__search'
          placeholder='Поиск по названию...'
        />
      </div>
      <div className='header__star'>
        <div className='header__star-img'>
          <img src='./img/star.png' alt='star' />
        </div>
        <div className='header__star-text'>Избранное</div>
      </div>
      <div className='header__shopping' onClick={e => na('../shopping')}>
        <div className='header__shopping-img'>
          <img src='./img/shoping.png' alt='shopping' />
          <div className='header__shopping-count'>
            {productsShopping.length}
          </div>
        </div>
        <div className='header__shopping-text'>Корзина</div>
      </div>
    </div>
  );
};

export default React.memo(SubHeader);
