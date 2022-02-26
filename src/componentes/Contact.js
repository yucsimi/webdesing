import React from 'react';

import '../styles/contact.css'


import git from '../assets/Git.png'
import instragam from '../assets/Instagram.png'
import email from '../assets/Email2.png'
import telephone from '../assets/telpon.png'

const Contact = () => {
    return (


        <div className='contact '>

            <div className='titulo3  cajitaTitulo'>
                <p className='contac mx-2'>Contact </p>
                <p className='me'>Me</p>
            </div>

            <div className='  cartas'>

                <div className='primera '>
                    <span > <img alt='git' src={git} /></span>

                </div>

                <div className='segunda '>
                    <span > <img alt='instragam' src={instragam} /></span>
                </div>

                <div className=' tercera'>
                    <span> <img alt='email' src={email} /></span>
                </div>

                <div className='cuarta'>
                    <span > <img alt='telephoe' src={telephone} /></span>
                </div>


            </div>

        </div >
    );
}

export default Contact;