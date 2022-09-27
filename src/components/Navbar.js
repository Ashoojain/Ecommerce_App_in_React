import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {useSelector} from 'react-redux';
function Navbar() {
    const TotalQuantity =useSelector(state=>state.TotalQuantity)
  return (
    <div>
      <nav className='nab'>
           <h2 className='logo'>Ecommerce App</h2>
           <Link to ='/product' ><button className='cart'>Your Cart  {TotalQuantity}</button> </Link>
      </nav>
    </div>
  )
}

export default Navbar
