import { useState } from 'react'
import Header from '../../Header/Index';
import './Busca.css'
import { Link } from 'react-router-dom';
import tilt from 'vanilla-tilt'
import * as React from 'react'


function Busca() {
    return (

        <>

            <body className='body1'>
                <div className='container'>
                    <div className='card'>
                        <div className='content'>
                            <img src="./icons/icon_lampada2.png" alt="aki" />
                            <h3></h3>
                            <Link to="/Sobre"><h3>O PROJETO</h3></Link>
                        </div>
                    </div>
                </div>


                <div className='container2'>
                    <div className='card2'>
                        <div className='content'>
                            <img src="./icons/icon_lampada.png" alt="aki" />
                            <h3></h3>
                            <Link to="/Fazemos"><h3>O QUE FAZEMOS</h3></Link>
                        </div>
                    </div>
                </div>


                <div className='container3'>
                    <div className='card3'>
                        <div className='content'>
                            <img src="./icons/icon_mundo.png" alt="aki" />
                            <h3></h3>
                            <a href='https://www.google.com.br/maps/place/R.+Irm%C3%A3+Arminda,+50+-+Quadra+10+-+Jardim+Brasil,+Bauru+-+SP,+17011-970/@-22.3276311,-49.0551477,16.75z/data=!4m5!3m4!1s0x94bf6777c0cfe609:0x8f81aefa76d64c11!8m2!3d-22.3275029!4d-49.0529516' target='_blank'><h3>ONDE ESTAMOS</h3></a>
                        </div>
                    </div>
                </div>


                <div className='container4'>
                    <div className='card4'>
                        <div className='content'>
                            <img src="./icons/reger.png" alt="aki" />
                            <h3></h3>
                            <Link to="/Dicas"><h3>DICAS</h3></Link>
                        </div>
                    </div>
                </div>

            </body>

        </>
    )
 

};

export default Busca;
