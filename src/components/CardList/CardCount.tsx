import React from 'react';

export function CardCount(props: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className='card--item__count number'>
      <button
        className='number-minus'
        type='button'
        onClick={(e) => props.setValue((s) => (s === 1 ? s : s - 1))}
      >
        -
      </button>
      <input type='number' min='1' value={props.value} readOnly />
      <button
        className='number-plus'
        type='button'
        onClick={(e) => props.setValue((s) => s + 1)}
      >
        +
      </button>
    </div>
  );
}
