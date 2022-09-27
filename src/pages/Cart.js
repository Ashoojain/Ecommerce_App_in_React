import React from 'react'
import {useSelector , useDispatch} from 'react-redux';
import CartItem from '../components/CartItem';
function Cart() {

    const items = useSelector(state=>state.items);
    const TotalPrice = useSelector(state=>state.TotalPrice);
  return (
    <div>
        <h1>Total Price : {TotalPrice}</h1>
        {
            items.map(item=><CartItem 
                key={item.id} 
                item={{
                    id:item.id,
                price:item.price ,
                title:item.title, 
                TotalPrice:item.TotalPrice,
                 Quantity:item.Quantity
                }} />)
        }
    </div>
  )
}

export default Cart
