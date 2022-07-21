import React, { useEffect, useRef } from 'react';
import useLabelsProperty from '../../hooks/useLabelPropery';
import { ILabelsProperty } from '../../types/models';
import useAnimationLabels from '../../hooks/useAnimationLabels';

export function CardLabels(props: {
  hit: boolean;
  stock: boolean;
  discount: any;
  variant: number;
  isHovering: boolean;
}) {
  const hitRef = useRef<HTMLDivElement>(null);
  const stockRef = useRef<HTMLDivElement>(null);
  const discountRef = useRef<HTMLDivElement>(null);
  let [objOfLabelsProperty, refArr] = useLabelsProperty(
    hitRef,
    discountRef,
    stockRef
  );
  const labelAnimate = useAnimationLabels(
    props.isHovering,
    props.variant,
    objOfLabelsProperty,
    refArr
  );

  return (
    <>
      {(props.hit || props.stock) && (
        <div className='card-item__labels'>
          {props.hit && (
            <div className='card-item__hit' ref={hitRef}>
              Хит
            </div>
          )}
          {props.discount && (
            <div className='card-item__discount' ref={discountRef}>
              Скидка
            </div>
          )}
          {props.stock && (
            <div className='card-item__stock' ref={stockRef}>
              Акция
            </div>
          )}
        </div>
      )}
    </>
  );
}
