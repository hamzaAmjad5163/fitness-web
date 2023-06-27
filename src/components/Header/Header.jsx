
import React,{ useEffect, useRef } from 'react';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';

const nav__links = [
    {
        path:'#home',
        display: 'Home'
    },
    {
        path:'#schedule',
        display: 'Schedule'
    },
    {
        path:'#classes',
        display: 'Classes'
    },
    {
        path:'#pricing-plane',
        display: 'Pricing'
    },

]

const Header = () => {
    
    const headerRed = useRef(null);

    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRed.current.classList.add('sticky__header');
        }else{
            headerRed.current.classList.remove('sticky__header');
        }
    }

    useEffect (()=>{
        window.addEventListener('scroll', headerFunc);
        return ()=> window.removeEventListener('scroll', headerFunc);
    },[]);

    const handleClick = e =>{
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            left:0,
            top:location - 80,
        });
    };

    return (
    <header className='header' ref={headerRed}>
        <div className='container'>
            <div className='nav__wrapper'>
                <div className='logo'>
                    <div className='logo__img'>
                        <img src={logo} alt=''/>
                    </div>
                    <h2>FitHub</h2>
                </div>

                <div className='navigation'>
                    <ul className='menu'>
                        {
                            nav__links.map(item => (
                                <li className='nav__item'><a onClick={handleClick} href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                {/*=========nav right========= */}
                <div className='nav__right'>
                        <button className='register__btn'>Register</button>
                        <span className='mobile__menu'><i className='ri-menu-line'></i></span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
