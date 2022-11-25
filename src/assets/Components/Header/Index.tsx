import { useState } from 'react'
import { Link } from 'react-router-dom';


import './styles.css'

function Header() {
    return (

        <>
            <header>
                <head>
                    <meta charSet='utf-8'></meta>
                    <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

                    <ul className='ul1'>
                        <li className='li2'>
                            <Link className='a2' to="/">Home</Link>
                        </li>
                        <li className='li2'>
                            <Link className='a2' to="/Sobre">O Projeto</Link>
                        </li>
                        <li className='li2'>
                                <Link className='a2' to="/Fazemos">O QUE FAZEMOS</Link>
                            </li>
                        <li className='li2'>
                            <a className='a2' href='https://www.google.com.br/maps/place/R.+Irm%C3%A3+Arminda,+50+-+Quadra+10+-+Jardim+Brasil,+Bauru+-+SP,+17011-970/@-22.3276311,-49.0551477,16.75z/data=!4m5!3m4!1s0x94bf6777c0cfe609:0x8f81aefa76d64c11!8m2!3d-22.3275029!4d-49.0529516' target='_blank'>Onde estamos</a>
                        </li>
                        <li className='li2'>
                            <Link className='a2' to="/Dicas">Dicas</Link>
                        </li>

                    </ul>


                </head>
                <body className='body2'>
                    <input type="checkbox" id="check" className='input1'></input>
                    <label htmlFor="check" className='label1'>
                        <i className='i1 fas fa-bars'></i>
                        <i className='i1 fas fa-times'></i>
                    </label>
                    <div className='menu'>
                        <a className='p3' href="/">REGER</a>

                        <ul className='ul2'>
                            <li className='li2'>
                                <Link className='a2' to="/">Home</Link>
                            </li>
                            <li className='li2'>
                                <Link className='a2' to="/Sobre">O Projeto</Link>
                            </li>
                            <li className='li2'>
                                <Link className='a2' to="/Fazemos">O QUE FAZEMOS</Link>
                            </li>
                            <li className='li2'>
                                <a className='a2' href='https://www.google.com.br/maps/place/R.+Irm%C3%A3+Arminda,+50+-+Quadra+10+-+Jardim+Brasil,+Bauru+-+SP,+17011-970/@-22.3276311,-49.0551477,16.75z/data=!4m5!3m4!1s0x94bf6777c0cfe609:0x8f81aefa76d64c11!8m2!3d-22.3275029!4d-49.0529516' target='_blank'>Onde estamos</a>
                            </li>
                            <li className='li2'>
                                <Link className='a2' to="/Dicas">Dicas</Link>
                            </li>

                        </ul>

                    </div>



                </body>

            </header>
        </>

    );
};
export default Header;