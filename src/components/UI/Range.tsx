import React, {useEffect, useRef, useState} from 'react';
import { getTrackBackground, Range } from 'react-range';
import { useAppDispatch } from '../../hooks/redux';
import { changeFilterCost } from '../../store/reducers/list';

interface IUpdateRange {
  rtl: boolean;
  values: number[];
  // setValues: React.Dispatch<React.SetStateAction<number[]>>;
}
const ArrayMarks = [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5].map((elem) =>
  Math.round(elem * 111)
);

const UpdateRange: React.FC<IUpdateRange> = ({ rtl, values }) => {
  const dispatch = useAppDispatch();

  const [selectedMax, setSelectedMax] = useState(9990);

  const [selectedMin, setSelectedMin] = useState(0);

  const [selectedStep, setSelectedStep] = useState(10);
  const rangeRef = useRef<Range>(null);

  function setMinMax(relevance = values) {
    dispatch(changeFilterCost(relevance));
  }

  return (
    <div
      onMouseUp={setMinMax.bind(null, values)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        ref={rangeRef}
        values={values}
        step={selectedStep}
        min={selectedMin}
        max={selectedMax}
        rtl={rtl}
        onChange={(values) => setMinMax(values)}
        renderMark={({ props, index }) =>
          index > 0 &&
          ArrayMarks.includes(index) && (
            <div
              {...props}
              style={{
                ...props.style,
                height: `${index % 2 !== 0 ? '5px' : '8px'}`,
                width: '1px',
                bottom: '4px',
                backgroundColor: '#E6E6E6',
              }}
            />
          )
        }
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '3px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#E6E6E6', '#C93E33', '#E6E6E6'],
                  min: selectedMin,
                  max: selectedMax,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: `13px`,
              width: `13px`,
              borderRadius: '50%',
              outline: '2px solid #ffffff',
              backgroundColor: '#C93E33',
            }}
          ></div>
        )}
      />
    </div>
  );
};

export default UpdateRange;
