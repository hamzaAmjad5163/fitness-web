

import React from 'react';
import '../../styles/footer.css';
import logo from '../../assets/img/dumble.png';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='footer' data-aos='fade-up' data-aos-duration='2000'>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__box'>
                    <div className='logo'>
                        <div className='logo__img'>
                            <img src={logo} alt=''/>
                    </div>
                        <h2>FitHub</h2>
                </div>
                            <p>"The gym is your sanctuary, your place of transformation. Embrace the opportunity to sculpt a better version of yourself."</p>
                </div>
                <div className='footer__box'>
                    <h4 className='footer__title'>Company</h4>

                    <ul className='footer__links'>
                        <li><a href='#'>Programs</a></li>
                        <li><a href='#'>Planes</a></li>
                        <li><a href='#'>Member with us</a></li>
                    </ul>
                </div>


                <div className='footer__box'>
                    <h4 className='footer__title'>Quick Links</h4>

                    <ul className='footer__links'>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Support</a></li>
                    </ul>
                </div>


                <div className='footer__box'>
                    <h4 className='footer__title'>Quick Links</h4>

                    <ul className='footer__links'>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Support</a></li>
                    </ul>
                </div>
            </div>


           
            <p className='CopyRight'>CopyRight-{year} @hamza.com developer. All rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
