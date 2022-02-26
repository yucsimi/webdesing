import React from 'react';

import '../styles/footer.css'

import ola from '../assets/ola.png'

const Footer = () => {
    return (


        <div className='footer '>



            <span className="img-footer"><img alt='img' src={ola} /></span>

            <p className="subtitle-footer">Design by Rauliqbal</p>

        </div>
    );
}

export default Footer;