import React from 'react'
import classes from "./product.module.css"
import ProductCard from './ProductCard'
function Product({products}) {
  console.log(products)
  return (
    <div className={classes.content}>
        <div className={classes.items}>
            <h3>Shopping everyday</h3>
            <span></span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur,
                    recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae.
                    Totam vel similique laborum dicta aperiam odit doloribus corporis.</p>
        </div>
        <div className={classes.products}>
        {products.map(item=>(
            <ProductCard key={item._id} product={item}/>
          ))}
        </div>
    </div>
  )
}

export default Product
