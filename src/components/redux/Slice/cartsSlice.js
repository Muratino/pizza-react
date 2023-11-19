import { createSlice } from '@reduxjs/toolkit'

const cartLS = () => {
    const data = localStorage.getItem('cart')
    const element = data ? JSON.parse(data) : [];
    const totalPrice = element.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
    }, 0);

    return {
        element,
        totalPrice,
    }

}


const { totalPrice, element } = cartLS();

const initialState = {
    totalPrice,
    element
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            const findElem = state.element.find(obj => obj.id === action.payload.id);

            if (findElem) {
                findElem.count++;
            } else {
                state.element.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.element.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);
        },
        minusElem(state, action) {
            const findElem = state.element.find(obj => obj.id === action.payload);

            if (findElem) {
                findElem.count--;
            }
        },
        removeProduct(state, action) {
            state.element = state.element.filter(obj => obj.id !== action.payload);
        },
        clearProduct(state) {
            state.element = [];
            state.totalPrice = 0;
        },
    },
})

export const cartSelector = (state) => state.cart;
export const cartitemSelect = (id) => (state) => state.cart.element.find(obj => obj.id === id);

export const { addProduct, removeProduct, clearProduct, minusElem } = cartSlice.actions;

export default cartSlice.reducer;