import { useState } from 'react'
import Header from '../../Header/Index';
import './Fazemos.css'
import { Link } from 'react-router-dom';


function Fazemos() {
    return (
        <>
            <Header />
            <body className='body3'>
                <div className='div_faze'>
                    <h2 className='h_titulo_faze' >O QUE FAZEMOS</h2>
                    <p className='prg_info_faze'>O objetivo do projeto é implementar o tema sustentabilidade no campus do Unisagrado e na comunidade através de ações educativas e de manutenção do gerenciamento dos resíduos.<br/><br/>
Atuar em ações de fiscalização e orientação do descarte correto de resíduos nos setores administrativos da instituição, bem como realiza capacitações com os funcionários e estudantes para relembrar alguns conceitos de sustentabilidade e descarte dos resíduos.<br/><br/>
Cabe também ao projeto a coleta os dados quali-quantitativos relacionados aos resíduos gerados, bem como elaborar, propor e implementar ações para a redução da geração dos resíduos.<br/><br/>
De forma a sistematizar o trabalho e organizar os alunos em cada uma das atividades, o projeto é dividido em áreas de atuação e iniciativas do projeto, entre elas:</p>
</div>
                    <div className='div_faze2'>
                        <ul className='info_ul'>
                        <li className='li_faze'>Diagnóstico dos resíduos gerados</li>
                        <li className='li_faze'>Coleta de resíduos</li>
                        <li className='li_faze'>Compostagem</li>
                        <li className='li_faze'>Identidade visual dos locais de descarte</li>
                        <li className='li_faze'>Divulgação, Capacitação e Conscientização</li>
                        <li className='li_faze'>Mudança de paradigmas e Incorporação de rotina</li>
                        <li className='li_faze'>Implementação de propostas de redução dos resíduos</li>
                        </ul>
                    </div>
                
                <footer className='footer2'>
            <div className='divpt12'>
                    <a className='apt5' href='https://www.instagram.com/unisagrado_oficial/' target='_blank' title='Instagram'><img className='iconpt1' src='./icons/instagram.png' alt='Instagram' /></a>
                    <a className='apt5' href='https://www.facebook.com/UNISAGRADOBauru/' target='_blank' title='Facebook'><img className='iconpt1' src='./icons/facebook.png' alt='Facebook' /></a>
                    <a className='apt5' href='https://www.linkedin.com/school/unisagradobauru/' target='_blank' title='LinkedIn'><img className='iconpt1' src='../icons/linkedin.png' alt='LinkedIn' /></a>
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

export default Fazemos;