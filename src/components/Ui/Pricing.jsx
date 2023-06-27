

import React from 'react';
import '../../styles/pricing.css';

const Pricing = () => {
  return (
    <section id='pricing-plane' data-aos='fade-up' data-aos-duration='2000'>
        <div className='container'>
            <div className='pricing__top'>
                <h2 className='section__title'>Gym <span className='highlights'>Pricing </span>Plane</h2>
                <p>Welcome to our gym, where fitness meets community! We pride ourselves on <br /> providing a state-of-the-art facility equipped with top-of-the-line equipment <br /> and a friendly, supportive atmosphere. Join us on your fitness journey and <br /> discover a place where you can challenge yourself, achieve your goals, <br /> and become part of a thriving fitness family.</p>
            </div>


            <div className='pricing__wrapper'>
                <div className='pricing__item' data-aos='zoom-in' data-aos-duration='1500'>
                    <div className='pricing__card-top'>
                        <h2 className='section__title'>Regular Membership</h2>
                        <h2 className='pricing section__title'>$40 <span>/month</span></h2>
                    </div>

                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Unlimited Access</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Customer Support</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Personal Trainer</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Standard Options</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Classes Per Week</li>
                        </ul>

                        <button className='register__btn'>Join Now</button>

                    </div>
                </div>

                <div className='pricing__item pricing__item-02' data-aos='zoom-in' data-aos-duration='1500'>
                    <div className='pricing__card-top'>
                        <h2 className='section__title'>Premium Membership</h2>
                        <h2 className='pricing section__title'>$60 <span>/month</span></h2>
                    </div>

                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Unlimited Access</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Customer Support</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Personal Trainer</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Standard Options</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Classes Per Week</li>
                        </ul>

                        <button className='register__btn'>Join Now</button>

                    </div>
                </div>

                <div className='pricing__item pricing__item-03' data-aos='zoom-in' data-aos-duration='1500'>
                    <div className='pricing__card-top'>
                        <h2 className='section__title'>Standard Members</h2>
                        <h2 className='pricing section__title'>$100 <span>/month</span></h2>
                    </div>

                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Unlimited Access</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Customer Support</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Personal Trainer</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Standard Options</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span>Classes Per Week</li>
                        </ul>

                        <button className='register__btn'>Join Now</button>

                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Pricing
