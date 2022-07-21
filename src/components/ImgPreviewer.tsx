import React from 'react';

export function ImgPreviewer(props: {
  onChange: (e: React.ChangeEvent) => Promise<void>;
  reference: React.RefObject<HTMLInputElement>;
  fileSrc: string;
}) {
  return (
    <div className=' form-item'>
      <label htmlFor='product-img' id='label-product-img'>
        Фотография продукта *
      </label>
      <input
        onChange={props.onChange}
        type='file'
        ref={props.reference}
        id='product-img'
        placeholder='ГОСТ продукта'
      />
      <div className='product-img-previewer'>
        <img src={props.fileSrc || require('../img/no_photo.png')} alt='previewer' />
      </div>
    </div>
  );
}
