

import React from 'react';
import '../../styles/testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import avatar01 from '../../assets/img/avatar01.png';
import avatar03 from '../../assets/img/avatar03.png';
import avatar02 from '../../assets/img/avatar02.png';

// import required modules
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <>
      <section data-aos='fade-up' data-aos-duration='2000'>
        <div className='container sliders'>
            <h2 className='section__title'>Members of FitHub</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='slide__item'>
                <div className='slide__img01'>
                    <img src={avatar01} alt=''/>
                    
                </div>
                <h4>Uzam Liaquat</h4>
                    <p>The Student of Air University.<br /> 
                    Register himself for a "Premium Membership"<br />
                    Having a Best Trainer in FitHub.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className='slide__item'>
                <div className='slide__img02'>
                    <img src={avatar03} alt=''/>
                    
                </div>
                <h4>Muhammad Ali</h4>
                    <p>The Student of Air University.<br /> 
                    Register himself for a "Standard Membership"<br />
                    Having a Best Trainer in FitHub.</p>
            </div></SwiperSlide>
        <SwiperSlide>
        <div className='slide__item'>
                <div className='slide__img03'>
                    <img src={avatar02} alt=''/>
                </div>
                
                <h4>Nouman Saeed</h4>
                    <p>The Student of Air University.<br /> 
                    Register himself for a "Premium Membership"<br />
                    Having a Best Trainer in FitHub.</p>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
      </section>
    </>
  );
}

