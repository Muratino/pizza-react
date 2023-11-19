import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryPizza: 0,
  searchValue: '',
  sortPizza: {
    name: 'Популярности',
    sort: 'rating'
  },
  currentPage: 1,
}
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryPizza(state, action) {
      state.categoryPizza = action.payload;
    },
    setSort(state, action) {
      state.sortPizza = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setFilterSearch(state, action) {
      state.sortPizza = action.payload.sortListitem;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryPizza = Number(action.payload.categoryPizza);
    }
  },
})

export const filterSelect = (state) => state.filter;

export const { setCategoryPizza, setSort, setCurrentPage, setFilterSearch, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;