import { combineReducers, configureStore } from '@reduxjs/toolkit';
import typesSlice from './reducers/list';
import productsSlice from './reducers/products';

const rootReducer = combineReducers({
  list: typesSlice,
  products: productsSlice,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
