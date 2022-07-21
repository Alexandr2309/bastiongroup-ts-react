import Sorts from './Sorts';
import React from 'react';

export function MainHead() {
  return (
    <div className='main__head'>
      <div className='main__back'>
        <img src='./img/Larrow.png' alt='back' />
      </div>
      <div className='main__title page__title'>Опоры трубопроводов</div>
      <Sorts />
    </div>
  );
}
