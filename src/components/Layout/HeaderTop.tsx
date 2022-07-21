import { NavLink } from 'react-router-dom';
import React from 'react';

export function HeaderTop() {
  return (
    <div className='header__block container'>
      <nav className='header__nav head-nav'>
        <div className='head-nav__links'>
          <NavLink to='/types' className='head-nav__link'>
            Типы продуктов
          </NavLink>
          <NavLink to='/products' className='head-nav__link'>
            Продукты
          </NavLink>
          <NavLink to='/benefits' className='head-nav__link'>
            Выгоды для вас
          </NavLink>
          <NavLink to='/security' className='head-nav__link'>
            Гарантии
          </NavLink>
          <NavLink to='/contacts' className='head-nav__link'>
            Контакты
          </NavLink>
        </div>
        <div className='head-nav__other'>
          <div className='head-nav__info head-nav__info-tel'>
            <div className='head-nav__icon'>
              <img src='./img/phone1.png' alt='phone' />
            </div>
            <span>+7 (499) 380-78-90</span>
          </div>
          <div className='head-nav__info head-nav__info-location'>
            <div className='head-nav__icon'>
              <img src='./img/local.png' alt='location' />
            </div>
            <select name='city' defaultValue="Москва">
              <option value='Москва'>
                Москва
              </option>
              <option value='Санкт-Петербург'>Санкт-Петербург</option>
              <option value='Рязань'>Рязань</option>
            </select>
          </div>
          <div className='head-nav__info head-nav__info-mail'>
            <div className='head-nav__icon'>
              <img src='./img/mail.png' alt='mail' />
            </div>
            <span>info@bastion.pro</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
