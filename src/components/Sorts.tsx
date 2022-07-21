import React, { FC, useState } from 'react';
const AllApp = require('../img/all-application.png');
const AllAppWhite = require('../img/all-application-white.png');
const ListTop = require('../img/list-top.png');
const ListTopWhite = require('../img/list-top-white.png');

const Sorts: FC = () => {
  const [display, setDisplay] = useState<'card' | 'list'>('card');

  return (
    <div className='main__sort'>
      <div className='main__popular'>
        <span>Сначала популярные</span>
        <img src={require('../img/sort.png')} alt='sort' />
      </div>
      <div className='main__display'>
        <div
          className={display === 'card' ? 'main__view active' : 'main__view'}
          onClick={() => setDisplay('card')}
        >
          <img src={AllApp} alt='card-view' style={{ opacity: 0 }} />
          <div className='main__view__choose'>
            <img
              src={display === 'card' ? AllAppWhite : AllApp}
              alt='card-view'
            />
          </div>
        </div>
        <div
          className={display === 'list' ? 'main__view show' : 'main__view'}
          onClick={() => setDisplay('list')}
        >
          <img src={ListTop} alt='list-view' style={{ opacity: 0 }} />
          <div className='main__view__choose main__view__choose-list'>
            <img
              src={display === 'list' ? ListTopWhite : ListTop}
              alt='list-view'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorts;
