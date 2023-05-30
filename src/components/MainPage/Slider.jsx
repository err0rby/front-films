import React, { useState, useEffect } from 'react';
import L12 from '../MainPage/image/L1.jpg'
import L22 from '../MainPage/image/L2.jpg'
import L33 from '../MainPage/image/L3.jpg'
import style from './Mainpage.module.css'

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        <img key={L12} src={L12} />,
        <img key={L22} src={L22} />,
        <img key={L33} src={L33} />
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === images.length - 1 ? 0 : current + 1
                return res
            })
        }, 3000)
        return () => clearInterval()
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : images.length - 1

    return (
        <div className={style.slider}>
            <div className={style.sliderImgSliderImgPrev}
                key={prevImgIndex}>
                {images[prevImgIndex]}
            </div>
        </div>
    );
};

export default Slider;