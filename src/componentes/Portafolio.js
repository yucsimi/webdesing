import React from 'react';

import '../styles/portafolio.css'


import email from '../assets/email.png'

import sendpay from '../assets/sendpay.png'
import comerce from '../assets/commerce.png'
import tech from '../assets/tech.png'
import logo from '../assets/Logo.png'
import ellipse from '../assets/Ellipsemorado.png'
import ellipse2 from '../assets/Ellipseverde.png'
import elipse3 from '../assets/Ellipsegris.png'
const Portafolio = () => {
    return (

        <div className='portafolio '>
            <div className='titulo2'>
                <p className='my mx-3'>My </p>
                <p className='subitle-portafolio'>Portafolio</p>

            </div>


            <div className='m-auto Carta d-flex col-8 col-md-10'>

                <div className='cartaPrimera  col-12 col-md-4 mx-3' >
                    <span className='ellipsemorado'><img alt='ellipse' src={ellipse} /></span>

                    <div className=' interiorCarta'>

                        <span className=' email '><img alt='email' src={email} /></span>
                        <h3 className=''>Sednpay</h3>

                    </div>
                    <span className='sendpay p-0'><img alt='sendepay' src={sendpay} /></span>


                </div>

                <div className='cartaSegunda col-12 col-md-4 mx-3 '>
                    <span className='elipseverde'><img alt='ellipse2' src={ellipse2} /></span>

                    <div className=' interiorcarta'>

                        <h3 className=''>E-comerce</h3>
                        <p className='webside '>Webside</p>
                    </div>
                    <span className='comerce '><img alt='comerce' src={comerce} /></span>


                </div>
                <div className='cartaTercera col-12 col-md-4 mx-3'>
                    <span className='elipsegris'><img alt='ellipse3' src={elipse3} /></span>


                    <p className=' p-0 logo'><img alt='logo' src={logo} /></p>
                    <span className='tech p-0'><img alt='tech' src={tech} /></span>



                </div>



            </div>
        </div>
    );
}

export default Portafolio;