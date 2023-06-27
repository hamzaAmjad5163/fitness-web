

import React from 'react'
import '../../styles/exercises.css';
import lunges from '../../assets/img/lunges.png';

import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png'; 

const Exercises = () => {
  return (
    <section id='schedule'>
        <div className='container exercise__container' data-aos='fade-up' data-aos-duration='2000'>
            <div className='exercise__top'>
                <h2 className='section__title'>
                    Benefits of 
                    <span className='highlights'> Exercise</span>
                </h2>
                <p>Every drop of sweat is a step towards your goals. <br />Embrace the grind, and let your determination shine.</p>
            </div>

            <div className='exercise__wrapper'>
                <div className='exercise__item' data-aos='zoom-in' data-aos-duration='1500'>
                    <span className='exercise__icon'><img src={lunges} alt=''/></span>
                    <div className='exercises__content'>
                    <h4>Healthy Life</h4>
                    <p>Regular gym workouts contribute to better health.</p>
                    
                    </div>
                </div>

                <div className='exercise__item' data-aos='zoom-in' data-aos-duration='1500'>
                    <span className='exercise__icon'><img src={yoga} alt=''/></span>
                    <div className='exercises__content'>
                    <h4>Increase Flexibility</h4>
                    <p>Regular gym workouts contribute to better health.</p>
                    
                    </div>
                </div>

                <div className='exercise__item' data-aos='zoom-in' data-aos-duration='1500'>
                    <span className='exercise__icon'><img src={extended} alt=''/></span>
                    <div className='exercises__content'>
                    <h4>Reducing Blood Pressure</h4>
                    <p>Regular gym workouts contribute to better health.</p>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exercises
