import { useState } from 'react'
import Header from '../../Header/Index';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Header />
            <body className='body'>
            <div className='card_home'>
                <div className='divpt1'>
                    <br/><br/>
                    <h1 className='h1pt3'>RESUMO DO PROJETO</h1>
                    <p className='prg1'>O REGER é uma iniciativa da Diretora da Área de Ciências Exatas, Humanas e Sociais, Prof. Dra. Beatriz Antoniassi e da Dra. Dulce Helena Jardim Constantino, e também tem o propósito de chamar a atenção para que cada ser humano possa fazer a sua parte e ajudar a proteger e respeitar o meio ambiente, garantindo um futuro melhor para as novas gerações.</p>
                    <br/>
                    <p className='prg2'>Ademais, este site foi desenvolvido por alunos do curso de Ciência da Computação, auxiliados pelo Prof. Vinicius Santos Andrade, juntamente com alunos do curso de Design auxiliados pela Prof. Sileide Aparecida.</p>
                    
                </div>
                <div className='divpt2'>
                    <button className='button1'><Link to="/Busca"><h3 className='a1'>EXPLORAR</h3></Link></button>
                </div>
            </div>
            </body>

        </>

    );


};

export default Home;