import React from 'react';
export interface IFilters {
  gosts: string[];
  type: string[];
  cost: number[];
}
export interface IPath {
  pathname: string | any;
  relativePath: string;
}
export interface ICategoryItem {
  title: string;
  text: string;
  count: number;
}
export interface IFilterProductsFunc {
  (
    allProds: IProduct[],
    filters: IFilters,
    cb: React.Dispatch<React.SetStateAction<IProduct[]>>
  ): void;
}
export interface ITypeOfProduct {
  id: number;
  title: string;
}
export interface IListState {
  types: ITypeOfProduct[];
  gosts: string[];
  filters: IFilters;
}
export interface IProductState {
  products: IProduct[];
  productsShopping: IProduct[];
}
export interface IProduct {
  id: number;
  title: string;
  type: string;
  cost: number | string;
  gost: string;
  img: string;
  hit: boolean;
  stock: boolean;
  [propName: string]: any;
}

export interface ICategoriesData {
  title: string;
  text: string;
  count: number;
}

interface IStyle {
  [propName: string]: any;
}

export interface IAccordionProps {
  title: string;
  img?: string;
  children: React.ReactNode | React.ReactElement;
  customStyle?: string;
  style?: IStyle;
}
export interface ILabelsProperty {
  width: number[];
  height: number[];
}
export interface IProductToLog {
  id: number;
  cost: number;
  title: string;
  count: number;
  sum: number;
}
export interface IUserInfo {
  fio: string;
  tel: string;
  email: string;
  corp: string;
}
export interface ISendOrderParams {
  (shop: IProduct[], userInfo: IUserInfo, sumAll: number):  void | undefined;
}
export interface ILogFinalInfoParams {
  (userInfo: IUserInfo, sumAll: number, arrayToLog: IProductToLog[]): void;
}

export interface IHelpChangeUserState {
  (
    prop: string,
    e: React.ChangeEvent<HTMLInputElement>
  ): Partial<IUserInfo> | void;
}
