

import React from 'react';
import heroImg from '../../assets/img/gym-02.png';
import dumbleIcon from '../../assets/img/dumble.png';
import '../../styles/hero.css';

const Hero = () => {
  return <section id='home'>
    <div className='container'>
        <div className='hero__wrapper'>
            <div className='hero__content'>
                <h2 className='section__title' data-aos='fade-up' data-aos-duration='2000'>Building <span className='highlights'>strength</span> is crucial for everyday activities</h2>
                <p data-aos='fade-up' data-aos-duration='2000'>Every rep, every drop of sweat, and every ounce of pain<br /> is a testament to your commitment. Keep pushing<br /> forward and unleash your inner champion.</p>

                <div className='hero__btns'>
                    <button className='register__btn' data-aos='fade-up' data-aos-duration='2000'>Start Today!</button>
                    <button className='watch__btn' data-aos='fade-up' data-aos-duration='2000'><span><i className='ri-play-fill'></i></span>Watch Video</button>
                </div>
            </div>



            <div className='hero__img'>
                <div className='hero__img-wrapper'>

                    <div className='box-01'>
                        <div className='box-02'>
                            <div className='box-03'>
                                <div className='box__img'>
                                    <img src={heroImg} alt='' data-aos='fade-up' data-aos-duration='2000'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='heart__rate' data-aos='fade-right' data-aos-duration='2000'>
                    <h5>Heart Rate</h5>
                    <span><i className='ri-heart-pulse-fill'></i></span>
                    <h5>2567 BPM</h5>
                </div>

                <div className='gym_location' data-aos='fade-down' data-aos-duration='2000'>

                    <span><i className='ri-map-pin-2-fill'></i></span>
                    <h5>Find a New <br />Gym Near You</h5>
                </div>

                <div className='dumble__icon' data-aos='fade-right' data-aos-duration='2000'>
                    <img src={dumbleIcon} alt=''/>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Hero
