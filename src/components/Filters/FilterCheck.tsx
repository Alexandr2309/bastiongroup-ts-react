import React, { useState } from 'react';

const FilterCheck: React.FC<{ title: string }> = ({ title }) => {
  const [check, setCheck] = useState<boolean>(false);
  const ID = (Math.random() * 23).toFixed(3);
  return (
    <div className={'custom-check-icon customer-choose'}>
      <input
        type='checkbox'
        checked={check}
        onChange={(e: React.ChangeEvent) => setCheck((s) => !s)}
        value='test'
        id={`i${ID}`}
      />
      <label htmlFor={`i${ID}`} className={check ? 'active' : ''}>
        {title}
      </label>
    </div>
  );
};

export default FilterCheck;
