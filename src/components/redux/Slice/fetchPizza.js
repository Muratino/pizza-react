import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchAllPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const { category, currentPage, sortPizza, search } = params;
        const { data } = await axios.get(`https://62bdc6edc5ad14c110c685b7.mockapi.io/pizza?page=${currentPage}&limit=4&${category}&sortBy=${sortPizza.sort}&order=desc&${search}`);
        return data
    }
)

const initialState = {
    arrPizza: [],
    status: "loading",
}

const fetchPizza = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setArrPizza(state, action) {
            state.arrPizza.push(action.payload);
        },
    },
    extraReducers: {
        [fetchAllPizza.pending]: (state) => {
            state.arrPizza = [];
            state.status = "loading";
        },
        [fetchAllPizza.fulfilled]: (state, action) => {
            state.status = "success";
            state.arrPizza = action.payload;
        },
        [fetchAllPizza.rejected]: (state) => {
            state.status = 'error';
            state.arrPizza = [];
        },
    }
})
export const { setArrPizza, } = fetchPizza.actions;

export default fetchPizza.reducer;