import React from 'react';
import Accordion from '../../UI/Accordion';
import TypeItem from './TypeItem';
import { useAppSelector } from '../../../hooks/redux';

const ProductsTypes: React.FC = () => {
  const { types } = useAppSelector((state) => state.list);

  return (
    <Accordion
      title='Тип продукта'
      style={{ borderTop: '1px solid #E6E6E6' }}
      customStyle='help'
    >
      <div className='main__types' style={{ paddingBottom: 20 }}>
        {!types.length && <div className="main__types-err">Добавьте тип продукта</div>}
        {types.map((type) => (
          <TypeItem title={type.title} key={type.id} />
        ))}
      </div>
    </Accordion>
  );
};

export default ProductsTypes;
