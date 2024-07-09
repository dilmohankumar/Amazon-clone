// amazonSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    userInfo: null,
};

export const amazonSlice = createSlice({
    name: "amazon",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push({ ...action.payload, quantity: action.payload.quantity });
            }

        },
        

        incrementQuantity: (state, action) => {
            const item = state.products.find(product => product.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find(product => product.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        resetCart: (state) => {
            state.products = [];
        },
        // user authentication 
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;

        },
        userSignOut:(state)=>{
            state.userInfo=null
        },
    },
});

export const { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity,setUserInfo,userSignOut } = amazonSlice.actions;
export default amazonSlice.reducer;
