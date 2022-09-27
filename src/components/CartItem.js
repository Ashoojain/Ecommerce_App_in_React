import React from 'react'
import './CartItem.css'
import { cartActions } from '../store/Cart-slice';
import { useDispatch} from 'react-redux'
function CartItem(props) {
    const dispatch =useDispatch();
    const { id ,price, title , TotalPrice, Quantity} =props.item
   
   

    const addhandler=()=>{
        dispatch(cartActions.AddToCart({
            id,price,title
        }))
    }

    const removehandler=()=>{
        dispatch(cartActions.RemoveFromCart(id))
    }
  return (
    <div>
      <ul>
        <li>
            <div className='cartitem1'>
                <h3>{title}</h3>
                <h3>{price} * {Quantity} = {TotalPrice}</h3>
            </div>
            <div className='cartitem2'>
                <button onClick={addhandler}>+</button>
                <button onClick={removehandler}>-</button>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default CartItem
