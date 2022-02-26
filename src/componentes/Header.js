import React from 'react';

import herolmg from '../assets/hero.png'
import '../styles/header.css'

const Header = () => {
    return (


        <div className=' header my-2 p-0 col-10  border '>

            <div className='texto  '>
                <p className='saludo'>Hi !</p>
                <p className='presentacion'>  I’m Muhamad Raul.
                    a Front-End Developer</p>
                <p className='descripcion'>Front-End devel oper based in Bekasi, Indonesian
                    I’am coding with a clean and beautiful problem
                    solving in mind.</p>
            </div>

            <div className='imagen my-5  '>

                <span><img src={herolmg} /></span>
            </div>
        </div>

    );
}

export default Header;