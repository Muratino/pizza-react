import { configureStore } from '@reduxjs/toolkit'
import filter from './Slice/filterSlice';
import cart from './Slice/cartsSlice';
import pizza from './Slice/fetchPizza';

export const store = configureStore({
    reducer: {  
        filter,
        cart,
        pizza
    },

})