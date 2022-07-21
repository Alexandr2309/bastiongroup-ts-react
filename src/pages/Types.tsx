import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addType } from '../store/reducers/list';
import { handleSubmit } from '../utils/helpFunc';

const Types: FC = () => {
  const [value, setValue] = useState<{ id: string; title: string }>({
    id: '',
    title: '',
  });
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.list);

  return (
    <div className='types page'>
      <div className='container'>
        <div className='types__block page__block'>
          <h1 className='types__title page__title'>Добавить тип продукта</h1>
          <form
            className='types__form form-types'
            action='#'
            onSubmit={(e) => e.preventDefault()}
          >
            <div className='form-types__item form-item'>
              <label htmlFor='type-id'>ID *</label>
              <input
                value={value.id}
                onChange={(e) => setValue({ ...value, id: e.target.value })}
                type='text'
                id='type-id'
                placeholder='ID типа'
              />
            </div>
            <div className='form-types__item form-item'>
              <label htmlFor='type-name'>Название *</label>
              <input
                value={value.title}
                onChange={(e) => setValue({ ...value, title: e.target.value })}
                type='text'
                id='type-name'
                placeholder='Название типа'
              />
            </div>
            <input
              type='submit'
              value='Добавить тип'
              onClick={(e) => {
                handleSubmit(
                  e,
                  value.id,
                  value.title,
                  types,
                  dispatch,
                  addType
                );
                setValue({ id: '', title: '' });
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Types;
