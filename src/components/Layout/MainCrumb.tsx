import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { IPath } from '../../types/models';

export function MainCrumb(props: { path: IPath }) {
  return (
    <div
      className='crumb__item'
      style={{ display: 'flex', alignItems: 'center', gap: 15 }}
    >
      <NavLink
        className={!props.path ? 'last' : ''}
        to='/bastiongroup-ts-react'
      >
        Главная
      </NavLink>
      <span>
        <img src={require('../../img/chevron-down1.png')} alt='chevron' />
      </span>
      {!props.path.pathname && (
        <>
          <Link to='/'>Интернет-магазин</Link>
          <img src={require('../../img/chevron-down1.png')} alt='chevron' />
          <Link className='last' to='/'>
            {' '}
            Опоры трубопроводов
          </Link>
        </>
      )}
    </div>
  );
}
