

import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.jpeg';

const Start = () => {
  return (
    <section id='classes' data-aos='fade-up' data-aos-duration='2000'>
    <div className='container'>
      <div className='start__wrapper'>
        <div className='start__img'>
            <img src={trainerImg} alt='' />
        </div>

        <div className='start__content'>
            <h2 className='section__title'>
                Ready to Make a Change?
            </h2>
            <p>Start Today, with Experts.<br /> Register Yourself.</p>
            <button className='register__btn'>Get Started</button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Start
