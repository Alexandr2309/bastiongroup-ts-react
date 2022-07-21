import React from 'react';

const Pagination = () => {
  return (
    <div className='main__pagination pagination'>
      <div className='pagination__block'>
        <div className='pagination__count'>
          <div className='pagination__title'>Выводить по</div>
          <div className='pagination__choose'>
            <div className='pagination__num active'>9</div>
            <div className='pagination__num'>15</div>
            <div className='pagination__num'>21</div>
          </div>
        </div>
        <div className='pagination__pages'>
          <div className='pagination__arrow pagination__arrow-left'>
            <img src='./img/arrowP.png' alt='arrow' />
          </div>
          <div className='pagination__page active'>1</div>
          <div className='pagination__page'>2</div>
          <div className='pagination__page'>3</div>
          <div className='pagination__page'>4</div>
          <div className='pagination__page'>5</div>
          <div className='pagination__arrow pagination__arrow-right'>
            <img src='./img/arrowP.png' alt='arrow' style={{transform: 'rotate(180deg)'}}/>
          </div>
        </div>
        <div className='pagination__show'>Показать все товары</div>
      </div>
    </div>
  );
};

export default Pagination;
