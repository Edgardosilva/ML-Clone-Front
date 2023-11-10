import React, { useState } from 'react';
import './slider.css';

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
      '../src/images/slider1.webp',
      '../src/images/slider2.webp',
      '../src/images/slider3.webp',
    ];

    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex)
    }, 5000);

    return (
      <section className='sliderLayout'>
        <img src='../src/images/leftButton.svg' alt='sliderBtn' className='sliderBtnl'/>
        <div className='sliderDiv'>
            <img src={images[currentIndex]} alt="slider1" />
        </div>
        <img src='../src/images/rightButton.svg' alt='sliderBtn' className='sliderBtnr'/>
      </section>
    );
};

export default Slider;