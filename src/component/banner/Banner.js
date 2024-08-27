import React, { useEffect, useState } from 'react'
import { bannerData } from './banner-data'
import classes from "./banner.module.css"
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
const Banner = () => {
    const [currentBanner , setCurrentBanner] = useState(0)
    const autoScroll = true
    const intervalTime = 5000
    const bannerLenght = bannerData.length
    let sideInterval

    const prevBanner = ()=>{
        setCurrentBanner(currentBanner === 0? bannerLenght -1  : prev => prev -1)
    }
    const nextBanner = ()=>{
        setCurrentBanner(currentBanner === bannerLenght-1 ? 0 : next => next + 1)
    }

    useEffect(() => {
        setCurrentBanner(0);
      }, []);

    useEffect(()=>{
        if (autoScroll){
            const auto = ()=>{ 
                sideInterval = setInterval(nextBanner, intervalTime)
            }
            auto()
        }
        return ()=> clearInterval(sideInterval)
    },[bannerLenght, currentBanner,sideInterval])

  return (
    <div className={classes.slider}>
        <div>
            {bannerData.map((slide,index) => {
                return (
                    <div key={index} className={index === currentBanner ? `${classes.banner} ${classes.current}` : classes.banner}                    >
                    {index === currentBanner &&
                    <img src={slide.image} alt='slide'/>
                    }
                </div>
            )
            })}
        </div>  
            <div className={classes.slide}>
                <div className={classes['left']} onClick={prevBanner}><HiArrowLeft /></div>
                <div className={classes['right']} onClick={nextBanner}><HiArrowRight /></div>
                </div>      
    </div>
  )
}

export default Banner