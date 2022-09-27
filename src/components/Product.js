import React from 'react'
import './/Product.css'
import {Link}  from 'react-router-dom'
import {cartActions} from '../store/Cart-slice'
import {useDispatch} from 'react-redux'
function Product({price , id , description , title}) {
  const dispatch =useDispatch();

    const addItemhandler =()=>{

        dispatch(cartActions.AddToCart({
            id,price,title,key:{id}
        }))
    }
  return (
    <div className='item'>
       <ul>
        <li>
           <div className='productitem'>
             <h3>{title}</h3>
             <h3>{price}</h3>
            </div>
            <div className='productitem'>
             <h3>{description}</h3>
            <button onClick={addItemhandler}>Add to Cart</button>
            </div>
        </li>
       </ul>
    </div>
  )
}

export default Product
