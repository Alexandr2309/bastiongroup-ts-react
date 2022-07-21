import React, { useEffect } from 'react';
import { ILabelsProperty } from '../types/models';
import {
  giveStartPos,
  labelAnimateEnter,
  labelAnimateExit,
} from '../utils/helpFunc';

interface IUseAnimationLabelsParams {
  (
    isHovering: boolean,
    variant: number,
    objOfLabelsProperty: ILabelsProperty,
    refArr: HTMLDivElement[]
  ): void;
}

const UseAnimationLabels: IUseAnimationLabelsParams = (
  isHovering,
  variant,
  objOfLabelsProperty,
  refArr
) => {
  useEffect(() => {
    if (isHovering && variant === 1 && objOfLabelsProperty) {
      labelAnimateEnter(objOfLabelsProperty, refArr);
    }

    if (!isHovering && variant === 1 && objOfLabelsProperty) {
      labelAnimateExit(objOfLabelsProperty, refArr);
    }
  }, [isHovering]);

  useEffect(() => {
    if (!objOfLabelsProperty || variant > 1) return;

    giveStartPos(objOfLabelsProperty, refArr);
  }, [objOfLabelsProperty]);
};

export default UseAnimationLabels;
