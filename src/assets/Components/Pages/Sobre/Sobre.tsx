import { useState } from 'react'
import Header from '../../Header/Index';
import './Sobre.css'
import { Link } from 'react-router-dom';


function Sobre() {
    return (
        <>
            <Header />
            <body className='body3'>
                <div className='divpt10'>
                    <h2 className='h2pt3'>SOBRE O PROJETO</h2>

                    <p className='prg3'>Vivemos um momento crítico com relação à geração excessiva de resíduos. A Unisagrado possui uma preocupação constante com os resíduos produzidos em todas as suas atividades, porém nem todos têm consciência do que nós já fazemos.</p>
                    <br />
                    <p className='prg3'>Esta preocupação com os resíduos vem de uma necessidade não só da instituição, mas um cuidado com os impactos causados no meio ambiente e com os efeitos a curto e longo prazo.</p>


                    <p className='prg3'>O projeto engloba vários setores da instituição e foca na redução da geração de resíduos, se pauta no princípio dos 3 Rs e nos ODS da ONU: redução no consumo e desperdício, reutilização e reciclagem de materiais.</p>
                    <br />
                    <p className='prg3'>E esse é o projeto Reger (Redução da Geração de Resíduos), um projeto criado em 2016 com o objetivo de reduzir os resíduos gerados através de intervenções no consumo e em certos hábitos que prejudicam essa questão.</p>
                </div>
                <h2 className='h2pt4'>Autoras</h2>
                <div className='divpt11'>

                    

                    <div className='div_aut1'>
                        <img src='./icons/autora1.png' />
                        <p className='prg3'>"Buscamos a sustentabilidade a longo prazo, porém sabemos que esse objetivo nunca será atingido. Dessa forma cabe a nós desenvolvermos ações que irão atuar como pequenos degraus em direção a um mundo sustentável. Dentre essas ações está a REDUÇÃO dos resíduos gerados".</p>
                    </div>

                    <div className='div_aut2'>
                        <img src='./icons/autora2.png' />
                        <p className='prg3'>“Evoluímos em vários setores, especialmente nos setores produtivos, e com isso aumentamos a nossa capacidade de gerar resíduos. O momento atual exige de nós ações mais pontuais. Precisamos sair da nossa área de conforto e não só destinarmos corretamente os resíduos produzidos, mas também REDUZIR a produção dos mesmos na medida do possível, trabalhando hoje para garantir o amanhã"</p>
                    </div>

                </div>
            
                <footer className='footer'>
            <div className='divpt12'>
                    <a className='apt5' href='https://www.instagram.com/unisagrado_oficial/' target='_blank' title='Instagram'><img className='iconpt1' src='./icons/instagram.png' alt='Instagram' /></a>
                    <a className='apt5' href='https://www.facebook.com/UNISAGRADOBauru/' target='_blank' title='Facebook'><img className='iconpt1' src='./icons/facebook.png' alt='Facebook' /></a>
                    <a className='apt5' href='https://www.linkedin.com/school/unisagradobauru/' target='_blank' title='LinkedIn'><img className='iconpt1' src='./icons/linkedin.png' alt='LinkedIn' /></a>
                    <a className='apt5' href='https://www.youtube.com/c/UNISAGRADO' target='_blank' title='Youtube'><img className='iconpt1' src='./icons/youtube.png' alt='Youtube' /></a>
                    <a className='apt5' href='https://www.tiktok.com/@unisagrado' target='_blank' title='TikTok'><img className='iconpt1' src='./icons/tik-tok.png' alt='TikTok' /></a>
                    <a className='apt5' href='https://wa.me/5514996060900?text=Ol%C3%A1+estou+navegando+no+site+de+voc%C3%AAs+e+gostaria+de+tirar+algumas+d%C3%BAvidas.' target='_blank' title='Whatsapp'><img className='iconpt1' src='./icons/whatsapp.png' alt='Whatsapp' /></a>
                </div>
                <div className='container_alunos'>
                    <div className='divpt13'>

                        <div className='txt_profc'>
                            <h3 className='ph1_cmp'> Professor Ciência da Computação</h3>
                            <li className='li_prof1'>Prof. Vinicius Santos Andrade</li>
                        </div>
                        <div className='txt_alunoc'>
                            <h3 className='ah1_cmp'> Alunos Ciência da Computação</h3>
                            <li className='li_alunos'> João Henrique Barbosa Belkiman</li>
                            <li className='li_alunos'> Luiz Vitor Pierino da Silva </li>
                            <li className='li_alunos'> Gabriel Monari</li>
                            <li className='li_alunos'> Danilo Baio Bellanda</li>
                        </div>
                    </div>
                    <div className='divpt14'>
                        <div className='txt_profd'>
                            <h3 className='ph1_dsg'> Professora Design</h3>
                            <li className='li_prof2'>Prof. Sileide Aparecida</li>
                        </div>
                        <div className='txt_alunod'>
                            <h3 className='ah1_dsg'> Alunos Design</h3>
                            <li className='li_alunos'> Barbara Fernanda Rodrigues</li>
                            <li className='li_alunos'> Rebecca Cassetari Clivatti</li>
                            <li className='li_alunos'> Isabela Cunha Silvestre</li>

                        </div>
                    </div>
                </div>
            </footer>
        </body>

        </>

    );


};

export default Sobre;