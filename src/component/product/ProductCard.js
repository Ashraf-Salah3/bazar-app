import React from 'react'
import classes from './productCard.module.css'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router'
function ProductCard({product}) {

  const navigate = useNavigate()

  const id = String(product.title).toLowerCase().split(" ").join("")
  
  const handleProductDetails = () => {
    navigate(`/product/${id}`,{
      state:{
        item:product
      }
    })
  }
  return (
    <div className={classes.productCard}>
        <div onClick={handleProductDetails} className={classes.productImage}>
          <img src={product.image} alt='productImage'/>
        </div>
        <div className={classes.productDitails}>
          <div className={classes.productTitle}>
            <h4>{product.title.substring(0,15)}</h4>
          </div>
          <div className={classes.productPricing}>
            <div className={classes.price}>
              <p className={classes.oldPrice}>${product.oldPrice}</p>
              <p className={classes.newPrice}>${product.price}</p>
            </div>
            <p className={classes.addToCard}>add to card{" "}<span><BsArrowRight/></span></p>
          </div>
          </div>
            <div>
              <p>{product.category}</p>
            </div>
                <div className={classes.sale}>
                  {product.isNew && (
                    <p>Sale</p>
                  )}
                </div>
          </div>
  )
}

export default ProductCard