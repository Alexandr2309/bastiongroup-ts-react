import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import ShoppingItem from '../components/Shopping/ShoppingItem';
import ClientForm from '../components/Shopping/ClientForm';
import { deleteProductsFromShopping } from '../store/reducers/products';

const ShoppingCart: React.FC = () => {
  const dispatch = useAppDispatch();

  function clearShoppingCart() {
    window.confirm('Вы точно хотите удалить все товары из корзины?') &&
      dispatch(deleteProductsFromShopping(true));
  }

  const { products, productsShopping: shop } = useAppSelector(
    (state) => state.products
  );

  return (
    <div className='shopping'>
      <div className='container'>
        <div className='shopping__block'>
          <div className='page__title'>Корзина</div>
          <div className='shopping__main'>
            <div className='shopping__list'>
              <div className='shopping__warning'></div>
              {!shop.length && (
                <div className='shopping__empty'>
                  <h4>Корзина пуста</h4>
                  <img src='./img/empty.png' alt='empty' />
                </div>
              )}
              {shop.map((prod) => (
                <ShoppingItem key={prod.id} {...prod} />
              ))}
              {shop.length > 0 && (
                <div className='shopping__trashAll' onClick={clearShoppingCart}>
                  <img src='./img/trashAll.png' alt='trash' />
                  Очистить корзину
                </div>
              )}
            </div>
            <div className='shopping__order'>
              <ClientForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
