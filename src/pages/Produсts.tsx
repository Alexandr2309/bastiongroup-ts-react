import React, { FC, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addNewProduct, allChangeVariant, uploadImg } from '../utils/helpFunc';
import TypeSelected from '../components/UI/TypeSelected';
import { ImgPreviewer } from '../components/ImgPreviewer';
import { IProduct } from '../types/models';
import { COST, GOST, ID, TITLE } from '../utils/contants';

const Products: FC = () => {
  const { types } = useAppSelector((state) => state.list);
  const { products } = useAppSelector((s) => s.products);
  const dispatch = useAppDispatch();
  const fileRef = useRef<HTMLInputElement>(null);
  const [productInfo, setProductInfo] = useState<IProduct>({
    id: 0,
    title: '',
    type: types[0]?.title || '', // Задано изменение
    cost: 0,
    gost: '',
    img: '', // Задано изменение
    hit: false,
    stock: false,
  });

  const variantChange = allChangeVariant(setProductInfo, productInfo);

  return (
    <div className='products page'>
      <div className='container'>
        <div className='products__block page__block'>
          <h1 className='page__title products__title'>Добавить продукт</h1>
          <form
            className='form-products'
            action='#'
            onSubmit={(e) => e.preventDefault()}
          >
            <div className=' form-item'>
              <label htmlFor='product-id'>ID *</label>
              <input
                type='text'
                id='product-id'
                placeholder='ID продукта'
                value={productInfo.id === 0 ? '' : productInfo.id}
                onChange={(e) => variantChange(ID, e)}
              />
            </div>
            <div className=' form-item'>
              <label htmlFor='product-name'>Название *</label>
              <input
                type='text'
                id='product-name'
                placeholder='Название'
                value={productInfo.title}
                onChange={(e) => variantChange(TITLE, e)}
              />
            </div>
            <TypeSelected types={types} setType={setProductInfo} />
            <div className=' form-item'>
              <label htmlFor='product-cost'>Цена *</label>
              <input
                type='text'
                id='product-cost'
                placeholder='Формат - 894.4'
                value={productInfo.cost === 0 ? '' : productInfo.cost}
                onChange={(e) => variantChange(COST, e)}
              />
            </div>
            <div className='form-item'>
              <label htmlFor='product-gost'>ГОСТ *</label>
              <input
                type='text'
                id='product-gost'
                placeholder='ГОСТ продукта'
                value={productInfo.gost}
                onChange={(e) => variantChange(GOST, e)}
              />
            </div>
            <ImgPreviewer
              onChange={(e) => uploadImg(fileRef, setProductInfo)}
              reference={fileRef}
              fileSrc={productInfo.img}
            />
            <input
              type='submit'
              value='Добавить продукт'
              onClick={(e) =>
                addNewProduct(
                  productInfo,
                  setProductInfo,
                  dispatch,
                  types,
                  products
                )
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Products;
