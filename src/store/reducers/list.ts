import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITypeOfProduct, IListState } from '../../types/models';

const initialState: IListState = {
  types: [],
  gosts: [
    'ГОСТ 14911-82',
    'ОСТ 36-146-88',
    'НТС 65-06',
    'ОСТ 36-146-88',
    'НТС 65-06',
  ],
  filters: {
    gosts: [],
    cost: [104, 9990],
    type: [],
  },
};

const typesSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addType(state, action: PayloadAction<ITypeOfProduct>) {
      state.types.push(action.payload);
    },
    addGost: (state, action) => {
      !state.gosts.includes(action.payload) && state.gosts.push(action.payload);
    },
    changeFilterGosts: (state, action) => {
      action.payload.type === 'add'
        ? state.filters.gosts.push(action.payload.title)
        : (state.filters.gosts = state.filters.gosts.filter(
            (elem) => elem !== action.payload.title
          ));
    },
    changeFilterCost: (state, action) => {
      state.filters.cost = action.payload;
    },
    changeFilterType: (state, action) => {
      action.payload.type === 'add'
        ? state.filters.type.push(action.payload.title)
        : (state.filters.type = state.filters.type.filter(
            (elem) => elem !== action.payload.title
          ));
    },
    clearFilters: (state, action) => {
      state.filters.gosts = state.filters.type = [];
      state.filters.cost = [104, 9990];
    },
    changeMinCost: (state, action) => {
      state.filters.cost[0] = action.payload;
    },
    changeMaxCost: (state, action) => {
      state.filters.cost[1] = action.payload;
    },
  },
});

export const {
  addType,
  addGost,
  changeFilterGosts,
  changeFilterType,
  changeFilterCost,
  clearFilters,
  changeMaxCost,
  changeMinCost,
} = typesSlice.actions;
export default typesSlice.reducer;
