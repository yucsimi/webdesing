import React from 'react';

import '../styles/passions.css'

import undraw from '../assets/undraw.png'
import undraw2 from '../assets/undraw2.png'
import undraw3 from '../assets/undraw3.png'
const Passions = () => {
    return (

        <div className='passions   '>
            <div className='titulo'>

                <p className='additional mx-2'>Additional  </p>
                <p className='passions1'>Passions</p>
            </div>


            <div className='m-auto carta d-flex col-8 col-md-10 '>

                <div className='primeraCarta col-10 col-md-4 mx-2 '>
                    <span><img alt='undraw' src={undraw} /></span>
                    <h3 >Front-End Developer</h3>
                    <p>(Sass, Bootstrap, Tailwind)</p>

                </div>
                <div className='segundaCarta col-10 col-md-4 mx-2 '>
                    <span><img alt='undrw2' src={undraw2} /></span>

                    <h3 >Back-End Developer</h3>
                    <p>(NodeJS, Laravel, Codeigniter)</p>

                </div>
                <div className='terceraCarta  col-10 col-md-4 mx-2'>

                    <span><img alt='undrw=aw3' src={undraw3} /></span>
                    <h3 >UI/UX Designer</h3>
                    <p>(Figma, Zeplin, Adobe XD)</p>


                </div>



            </div>
        </div>
    );
}

export default Passions;