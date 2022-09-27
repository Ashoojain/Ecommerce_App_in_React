import {createSlice} from '@reduxjs/toolkit'


const initialState ={
    items:[],
    TotalQuantity :0,
    TotalPrice:0
};
const CartSlice = createSlice ({

    name:'cart',
    initialState:initialState,
    reducers :{
   
        AddToCart (state ,action) {

            const newItem =action.payload;
            state.TotalQuantity++;
            state.TotalPrice=state.TotalPrice + newItem.price;

            const existingItem = state.items.find(item=> item.id===newItem.id);
          if(!existingItem)
          {
            state.items.push({
                ...newItem,TotalPrice :newItem.price,Quantity :1
            })
          }
          else
          {
                existingItem.Quantity++;
                existingItem.TotalPrice = existingItem.TotalPrice + newItem.price;
          }

        },
        RemoveFromCart (state,action) {
            const id =action.payload;
           state.TotalQuantity--;
       
            const existingItem = state.items.find(item=>item.id===id);
            state.TotalPrice=state.TotalPrice-existingItem.price
            if(existingItem.Quantity===1)
            {
               state.items =state.items.filter(item=>item.id!==id);
            }
            else
            {
                existingItem.Quantity--;
                existingItem.TotalPrice=existingItem.TotalPrice-existingItem.price;
            }
        }
    }
})

export const cartActions = CartSlice.actions;
export default CartSlice;