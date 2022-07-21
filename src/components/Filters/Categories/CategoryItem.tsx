import React, { FC } from 'react';
import {ICategoryItem} from "../../../types/models";

const CategoryItem: FC<ICategoryItem> = ({ title, text, count }) => {
  return (
    <article className='category-item'>
      <h5 className='category-item__title'>{title}</h5>
      <div className='category-item__name'>
        {text}
        <span className='category-item__count'>{count}</span>
      </div>
    </article>
  );
};

export default CategoryItem;
