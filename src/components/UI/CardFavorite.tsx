import React from 'react';

export function CardFavorite() {
  return (
    <div className='card-item__favorite'>
      <span>
        <img src='./img/starFav.png' alt='star' />
      </span>
      <div className='card-item__text-favorite'>В избранное</div>
    </div>
  );
}
