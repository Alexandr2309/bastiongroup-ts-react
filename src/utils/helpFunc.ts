import React from 'react';
import {
  IFilterProductsFunc,
  IHelpChangeUserState,
  ILabelsProperty,
  ILogFinalInfoParams,
  IProduct,
  IProductToLog,
  ISendOrderParams,
  ITypeOfProduct,
  IUserInfo,
} from '../types/models';
import { AppDispatch } from '../store/store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { COST, GOST, ID, TITLE } from './contants';
import { addProduct } from '../store/reducers/products';
import { addGost } from '../store/reducers/list';

export function handleSubmit(
  e: React.MouseEvent<HTMLInputElement>,
  idText: string,
  titleText: string,
  types: ITypeOfProduct[],
  cb: AppDispatch,
  action: ActionCreatorWithPayload<ITypeOfProduct>
): void {
  let idValue: string | number = idText.trim();
  const titleValue = titleText.trim();
  if (!idValue) {
    alert('Поле "ID" не может быть пустым!');
    return;
  } else if (isNaN(parseInt(idValue))) {
    alert('Поле ID должно быть числом!');
    return;
  }
  if (!titleValue) {
    alert('Поле "Название" не может быть пустым!');
    return;
  }
  idValue = parseInt(idValue);
  if (types.find((elem) => elem.id === idValue)) {
    alert('Тип продукта с таким ID уже существует, пожалуйста, введите другой');
    return;
  } else if (types.find((elem) => elem.id === idValue)) {
    alert(
      'Тип продукта с таким названием уже существует, пожалуйста, введите другой'
    );
    return;
  }
  cb(action({ id: idValue, title: titleValue }));
  alert('Данные успешно добавлены');
}

export const giveStartPos = (
  obj: ILabelsProperty,
  refArr: HTMLDivElement[]
): void => {
  obj.width.forEach((w: number, i: number, arr: number[]) => {
    refArr[i].style.left =
      i > 0 ? +arr.slice(0, i).reduce((a, b) => a + b) + 5 * i + 'px' : '0px';
  });
};
export const labelAnimateEnter = (
  obj: ILabelsProperty,
  refArr: HTMLDivElement[]
): void => {
  obj.height.forEach((w: number, i: number, arr: number[]) => {
    refArr[i].style.top =
      i > 0 ? +arr.slice(0, i).reduce((a, b) => a + b) + 15 * i + 'px' : '0px';
    refArr[i].style.left = '0px';
  });
};
export const labelAnimateExit = (
  obj: ILabelsProperty,
  refArr: HTMLDivElement[]
): void => {
  obj.width.forEach((w: number, i: number, arr: number[]) => {
    refArr[i].style.left =
      i > 0 ? +arr.slice(0, i).reduce((a, b) => a + b) + 5 * i + 'px' : '0px';
    refArr[i].style.top = '0px';
  });
};
export const increment = (e: React.MouseEvent) => {
  // @ts-ignore
  e.target.previousElementSibling.stepUp();
  // @ts-ignore
  e.target.previousElementSibling.onchange();
};
export const decrement = (e: React.MouseEvent) => {
  // @ts-ignore
  e.target.nextElementSibling.stepDown();
  // @ts-ignore
  e.target.nextElementSibling.onchange();
};

export async function uploadImg(
  fileRef: React.RefObject<HTMLInputElement>,
  cb: React.Dispatch<React.SetStateAction<IProduct>>
) {
  const file = fileRef.current!.files![0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e: ProgressEvent<FileReader>) => {
    if (!e.target!.result) return;
    cb((v) => {
      return { ...v, img: e.target!.result!.toString() };
    });
  };
  reader.readAsDataURL(file);
}

export const allChangeVariant = (
  cb: React.Dispatch<React.SetStateAction<IProduct>>,
  productInfo: IProduct
): ((variant: string, e: React.ChangeEvent<HTMLInputElement>) => void) => {
  return (variant, e) => {
    switch (variant) {
      case ID:
        const num = +e.target.value;
        if (isNaN(num)) return alert('Допустимы только числа');
        cb({ ...productInfo, id: num });
        break;
      case TITLE:
        cb({
          ...productInfo,
          title: e.target.value,
          hit: e.target.value.toLowerCase().includes('о'),
          stock: e.target.value.toLowerCase().includes('а'),
        });
        break;
      case GOST:
        cb({ ...productInfo, gost: e.target.value });
        break;
      case COST:
        cb({ ...productInfo, cost: e.target.value });
        break;
      default:
        break;
    }
  };
};

export function addNewProduct(
  obj: IProduct,
  setAction: React.Dispatch<React.SetStateAction<IProduct>>,
  dispatch: AppDispatch,
  types: ITypeOfProduct[],
  products: IProduct[]
) {
  if (products.find((elem) => elem.id === obj.id))
    return alert('Продукт с такии ID уже существует!');
  if (!obj.title) return alert('Поле "Название" не может быть пустм!');
  if (!obj.type) return alert('Необходимо выбрать тип товара!');

  if (!obj.cost || !/^\d+\.\d$/i.test(<string>obj.cost))
    return alert('Неверный формат цены продукта');
  if (+obj.cost > 9990) return alert('Максимальная сумма товара - 9990 руб!');
  setAction({ ...obj, cost: parseFloat(obj.cost.toString()) });

  if (!/^[A-Za-zА-Яа-я]+\s\d+-*/i.test(obj.gost))
    return alert('Неверный формат ГОСТ продукта');

  if (!obj.img) setAction({ ...obj, img: './img/plug.png' });

  dispatch(addProduct(obj));
  alert('Продукт успешно добавлен');
  dispatch(addGost(obj.gost));
  setAction({
    id: 0,
    title: '',
    type: types[0]?.title || '', // Задано изменение
    cost: 0,
    gost: '',
    img: '', // Задано изменение
    hit: false,
    stock: false,
  });
}

export const isHaveParams = (
  param: string[],
  product: IProduct,
  caption: string
) => {
  return param.length
    ? param.find(
        (elem) => elem.toLowerCase() === product[caption]!.toLowerCase()
      )
    : true;
};
export const filterProducts: IFilterProductsFunc = (
  allProds,
  filters,
  cb
): void => {
  const { cost, type, gosts } = filters;

  const filteredArr = allProds.filter((product) => {
    return (
      product.cost >= cost[0] &&
      product.cost <= cost[1] &&
      isHaveParams(type, product, 'type') &&
      isHaveParams(gosts, product, 'gost')
    );
  });
  cb(filteredArr.slice(0, 9));
};

export const translate = (
  e: React.FocusEvent<HTMLInputElement>,
  value: string
) => {
  if (!value) e.target.previousElementSibling!.classList.add('focus');
};

export const translateBack = (
  e: React.FocusEvent<HTMLInputElement>,
  value: string
) => {
  if (!value) e.target.previousElementSibling!.classList.remove('focus');
};
export function labelIndentity(key: string) {
  switch (key) {
    case 'id':
      return 'ID -';
    case 'cost':
      return 'Цена -';
    case 'title':
      return 'Название -';
    case 'count':
      return 'Количество -';
    case 'sum':
      return 'Общая сумма -';
  }
}

export const logFinalInfo: ILogFinalInfoParams = (
  userInfo,
  sumAll,
  arrayToLog
) => {
  const { fio, tel, email, corp } = userInfo;

  console.group('Информация о покупателе');
  console.log(
    '%c ФИО:',
    'color: white; background-color: #2274A5; font-size: 14px',
    `${fio}`
  );
  console.log(
    '%c Телефон:',
    'color: white; background-color: #95B46A; font-size: 14px',
    `${tel}`
  );
  console.log(
    '%c Email:',
    'color: #D8748B; background-color: #F5F7F9; font-size: 14px',
    `${email}`
  );
  console.log(
    '%c Оргиназия/ИНН:',
    'color: white; background-color: #C93E33; font-size: 14px',
    `${corp}`
  );
  console.group('Заказ');

  arrayToLog.forEach((elem, i) => {
    console.groupCollapsed(`Товар ${i + 1}`);
    Object.entries(elem).forEach(([key, value]) => {
      console.log(
        `%c ${labelIndentity(key)}`,
        'color: black; background-color: #F2F2F2; font-size: 14px; font-weight: 500',
        `${value}`
      );
    });
    console.groupEnd();
  });

  console.log(
    `%c Общая сумма заказа = `,
    'color: white; background-color: #95B46A; font-size: 14px; font-weight: 700',
    `${sumAll} руб.`
  );
  console.groupEnd();
  console.groupEnd();
};

export const sendOrder: ISendOrderParams = function (shop, userInfo, sumAll) {
  if (!shop.length) return alert('Добавьте товар в коризну!');

  const { fio, tel, email, corp } = userInfo;
  const arrayOfFields: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    '.shopping-form__field'
  );

  Array.from(arrayOfFields).forEach((elem) => elem.classList.remove('err'));

  if (!/([А-ЯЁ]{1}[а-яё]*[\-\s]?){3,}/gm.test(fio))
    arrayOfFields[0].classList.add('err');

  if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(tel))
    arrayOfFields[1].classList.add('err');

  if (!/[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/g.test(email))
    arrayOfFields[2].classList.add('err');

  if (!/^\d+$ или ^[\d+]{10,12}$/.test(corp) && !corp)
    arrayOfFields[3].classList.add('err');

  const isHaveErr = Array.from(arrayOfFields).find((elem) =>
    elem.classList.contains('err')
  );

  if (isHaveErr)
    return alert('Проверьте введённые данные и попробуйте ещё раз!');

  const arrayToLog: IProductToLog[] = shop.map((elem) => ({
    id: elem.id,
    cost: +elem.cost,
    title: elem.title,
    count: +elem.count,
    sum: +elem.cost * +elem.count,
  }));

  logFinalInfo(userInfo, sumAll, arrayToLog);

  console.info('Полная информация из state', shop);

  alert('Ваш заказ был успешно доставлен, поздравляем!');
};

export const helpChangeUserState: IHelpChangeUserState = (prop, e) => {
  switch (prop) {
    case 'fio':
      return { fio: e.target.value };
    case 'tel':
      return { tel: e.target.value };
    case 'email':
      return { email: e.target.value };
    case 'corp':
      return { corp: e.target.value };
    default:
      break;
  }
};
