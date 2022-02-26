import React, { useState } from 'react';
import '../styles/navbar.css'


import logo from '../assets/Rauliqbal.png'
import icon from '../assets/icon.png'
const Nav = () => {

    const [activeMenu, setActiveMenu] = useState(false)



    return (

        <div className='nav d-flex my-2  w-100'>

            <div className=' my-3 logo-principal'>
                <span className='logo'><img alt='logo' src={logo} /></span>


            </div>

            <div onClick={() => { setActiveMenu(true) }} className='d-block d-md-none icono'>
                <span className='icon'><img alt='icon' src={icon} /></span>
            </div>

            <div className={`nav-mobile ${activeMenu && "nav-mobile-active"}`}>

                <div className='icon-x' onClick={() => { setActiveMenu(false) }}>X</div>

                <p className='mx-5 options'>About</p>
                <p className='mx-5 options'>Passions</p>
                <p className='mx-5 options'>Portfolio</p>
                <p className='options-boton mx-5 '>Contact me</p>

            </div>



            <div className=' part-navbar d-none d-md-flex '>

                <p className='mx-5'>About</p>
                <p className='mx-5'>Passions</p>
                <p className='mx-5'>Portfolio</p>
                <p className='boton mx-5'>Contact me</p>

            </div>

        </div >


    );
}

export default Nav;