import { createSlice } from '@reduxjs/toolkit';
import { IProductState } from '../../types/models';
import { CardsData } from '../../utils/data';

const initialState: IProductState = {
  products: [...CardsData],
  productsShopping: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    addProductToShoppingCart: (state, action) => {
      const { count, id } = action.payload;
      const repeatProduct = state.productsShopping.find(
        (elem) => elem.id === id
      );
      if (repeatProduct) repeatProduct.count = count;
      else state.productsShopping.push(action.payload);
    },
    deleteProductsFromShopping: (state, action) => {
      state.productsShopping = [];
    },
    deleteOneFromShopping: (state, action) => {
      state.productsShopping = state.productsShopping.filter(
        (prod) => prod.id !== action.payload
      );
    },
    changeProdCount: (state, action) => {
      const { count, id } = action.payload;
      state.productsShopping.find((elem) => elem.id === id)!.count = count;
    },
  },
});

export const {
  addProduct,
  addProductToShoppingCart,
  deleteProductsFromShopping,
  deleteOneFromShopping,
  changeProdCount,
} = productsSlice.actions;
export default productsSlice.reducer;
