import React, {FC, useEffect, useRef, useState} from 'react';
import {IAccordionProps} from "../../types/models";

const Accordion: FC<IAccordionProps> = ({
  children,
  title,
  img,
  customStyle,
  style,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [heightEl, setHeightEl] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && setHeightEl(ref.current.scrollHeight);
  }, []);

  const setIsShow = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow((s) => !s);
  };

  return (
    <div className='accordion'>
      <div
        className={
          customStyle ? `accordion__head ${customStyle}` : 'accordion__head'
        }
        onClick={setIsShow}
        style={{...style}}
      >
        {img && <img src={img} alt='icon' />}
        <div className='accordion__title'>{title}</div>
        <div
          className={show ? 'accordion__toggler show' : 'accordion__toggler'}
        >
          <img src='./img/arrow.png' alt='arrow-toggle' />
        </div>
      </div>
      <div
        className={show ? 'accordion__content show' : 'accordion__content'}
        ref={ref}
        style={{ height: show ? `${heightEl}px` : '0' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
