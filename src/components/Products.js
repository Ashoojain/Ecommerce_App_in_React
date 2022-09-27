import React from 'react'
import Product from './Product'
function Products() {

    const products =[
         {
        id: '1',
        price :20,
        Name : 'Product1',
        description: 'This is 1st product'
         },
         {
            id: '2',
            price :30,
            Name : 'Product2',
            description: 'This is 2nd product'
          },
        {
                id: '3',
                price :40,
                Name : 'Product3',
                description: 'This is 3rd product'
          }
]
  return (
    <div>
        {products.map((product=> <Product  key={product.id} 
            title ={product.Name} description={product.description} id={product.id} price={product.price}/>))}
    </div>
  )
}

export default Products
