import React, { useMemo, useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import { sendOrder, translate, translateBack } from '../../utils/helpFunc';
import { IUserInfo } from '../../types/models';
import ClientInput from './ClientInput';
import {deleteProductsFromShopping} from "../../store/reducers/products";

const ClientForm = () => {
  const dispatch = useAppDispatch();
  const { productsShopping: shop } = useAppSelector((state) => state.products);
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    fio: '',
    email: '',
    tel: '',
    corp: '',
  });

  const sumAll = useMemo(() => {
    if (!shop.length) return 0;
    return +shop
      .map((item) => +item.cost * item.count)
      .reduce((a, b) => a + b)
      .toFixed(1);
  }, [shop]);

  function sendFinalResult() {
    sendOrder(shop, userInfo, sumAll);
    setUserInfo({
      fio: '',
      email: '',
      tel: '',
      corp: '',
    });
    dispatch(deleteProductsFromShopping(true));
  }

  return (
    <>
      <h3>Заказ</h3>
      <div className='shopping__form__wrapper'>
        <h5>Контактная информация</h5>
        <form
          className='shopping__form shopping-form'
          onSubmit={(e) => e.preventDefault()}
        >
          <div className='shopping-form__fio  shopping-form__field'>
            <label htmlFor='fio'>ФИО</label>
            <ClientInput id='fio' userInfo={userInfo} setInfo={setUserInfo} />
          </div>
          <div className='shopping-form__phone shopping-form__field'>
            <label htmlFor='tel'>Контактный телефон</label>
            <ClientInput id='tel' userInfo={userInfo} setInfo={setUserInfo} />
          </div>
          <div className='shopping-form__email shopping-form__field'>
            <label htmlFor='email'>Email</label>
            <ClientInput id='email' userInfo={userInfo} setInfo={setUserInfo} />
          </div>
          <div className='shopping-form__corp shopping-form__field'>
            <label htmlFor='corp'>Организация / ИНН</label>
            <ClientInput id='corp' userInfo={userInfo} setInfo={setUserInfo} />
          </div>
          <div className='shopping__total'>
            <div className='shopping__total-text'>Итого</div>
            <div className='shopping__total-sum'>{sumAll} руб.</div>
          </div>
          <div className='shopping-form__submit'>
            <button
              className='card-item__btn'
              onClick={sendFinalResult}
              type='submit'
            >
              <span>
                <img src={require('../../img/shoppingW.png')} alt='shopping-cart' />
              </span>
              Оформить заказ
            </button>
            <button className='card-item__btn'>
              <span>
                <img src={require('../../img/file-text.png')} alt='file' />
              </span>
              Коммерческое предложение
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ClientForm;
