import React from 'react';
import { IProduct, ITypeOfProduct } from '../../types/models';


interface ITypeSelectedProps {
  types: ITypeOfProduct[];
  setType: React.Dispatch<React.SetStateAction<IProduct>>;
}

const TypeSelected: React.FC<ITypeSelectedProps> = ({ types, setType }) => {
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType((prev) => {
      return { ...prev, type: e.target.value };
    });
  };

  return (
    <div className=' form-item'>
      <label htmlFor='type-product'>Тип продукта *</label>
      <select name='type-product' id='type-product' onChange={onSelect}>
        {types.map((type) => (
          <option key={type.id} value={type.title}>
            {type.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelected;
