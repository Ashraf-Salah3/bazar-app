import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import classes from "./productdetails.module.css"
import { MdOutlineStar } from 'react-icons/md'

function ProductDetails() {
    const location = useLocation()
    const [details, setDetails] = useState({})

    useEffect(()=>{
        setDetails(location.state.item)
    },[details,location])
  return (
    <div>
        <div className={classes.productDetails}>
            <div className={classes.productDetailsImg}>
                <img src={details.image} alt="productImg"></img>

                <div className={classes.sale}>
                    {details.isNew && (
                        <p>Sala</p>
                    )}
                </div>
            </div>
            <div className={classes.title}>
    <div className={classes.titleContent}>
        <h2 className={classes.productTitle}>{details.title}</h2>
        <div className={classes.priceContainer}>
            <p className={classes.oldPrice}>${details.oldPrice}</p>
            <p className={classes.newPrice}>${details.price}</p>
        </div>
    </div>
    <div className={classes.reviewContainer}>
        <div className={classes.stars}>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
        </div>
        <p className={classes.reviewText}>(1 customer review)</p>
    </div>
    <p className={classes.description}>{details.description}</p>
    <div className={classes.quantityContainer}>
        <div className={classes.quantity}>
            <p className={classes.quantityLabel}>Quantity</p>
            <div className={classes.quantityButtons}>
                <button className={classes.decrementButton}>-</button>
                <span className={classes.quantityNumber}>{1}</span>
                <button className={classes.incrementButton}>+</button>
            </div>
        </div>
        <button className={classes.addToCartButton}>Add to cart</button>
    </div>
    <p className={classes.category}>Category: {details.category}</p>
</div>

        </div>
    </div>
  )
}

export default ProductDetails