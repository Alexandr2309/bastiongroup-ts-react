import React, { FC } from 'react';
import Accordion from '../../UI/Accordion';
import { categoriesData } from '../../../utils/data';
import CategoryItem from './CategoryItem';

const Category: FC = () => {
  return (
    <Accordion title='Категории' img='./img/all-application.png'>
      <div style={{ paddingBottom: 20 }}>
        {categoriesData.map((category, i) => (
          <CategoryItem
            text={category.text}
            title={category.title}
            count={category.count}
            key={i}
          />
        ))}
        <div className='category__show-all'>
          <span>Показать все</span>
          <img src='./img/red-arrow.png' alt='arrow' />
        </div>
      </div>
    </Accordion>
  );
};

export default Category;
