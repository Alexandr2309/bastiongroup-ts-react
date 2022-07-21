import React, { useEffect, useMemo, useState } from 'react';
import { ILabelsProperty } from '../types/models';

type labelParam = React.RefObject<HTMLDivElement>;

export default function useLabelsProperty(
  hitRef: labelParam,
  stockRef: labelParam,
  discountRef: labelParam
): Array<any> {
  const [objOfLabelsProperty, setObjOfLabelsProperty] = useState<Array<any>>(
    []
  );

  useEffect(() => {
    const refArr = [
      hitRef.current,
      stockRef.current,
      discountRef.current,
    ].filter((elem) => elem !== null);

    if (!hitRef.current) return;
    setObjOfLabelsProperty([
      {
        width: refArr.map((ref) => ref!.clientWidth),
        height: refArr.map((ref) => ref!.clientHeight),
      },
      refArr,
    ]);
  }, [hitRef.current, stockRef.current, discountRef.current]);

  return objOfLabelsProperty;
}
