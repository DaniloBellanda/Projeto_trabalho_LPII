import { useState } from 'react'
import Header from '../../Header/Index';
import './Dicas.css'
import { Link } from 'react-router-dom';


function Dicas() {
    return (
        <>
            <Header />
            <body className='body3'>
                <div className='div_dica'>
                    <h2 className='h_titulo' >COMO ARMAZENAR OS RESÍDUOS ATÉ DESTINÁ-LOS</h2>
                    <h4 className='h4_dica'>RECICLÁVEIS:</h4>
                    <p className='prg_info'>Acondicionar em sacos plásticos azuis (os mesmos devem estar limpos e secos, sem resíduos de alimentos).<br/>Obs: Materiais cortantes (vidro quebrados) ou que representem risco ao coletor, devem ser acondicionados de forma segura.</p>
                    <br/>
                    <h4 className='h4_dica'>REJEITOS:</h4>
                    <p className='prg_info'>Armazenar em sacos plásticos pretos.</p>
                    <br/>
                    <h4 className='h4_dica'>ORGÂNICOS:</h4>
                    <p className='prg_info'>Armazenar em sacos plásticos marrons.</p>
                    <br/>
                    <h4 className='h4_dica'>QUÍMICOS E PERIGOSOS:</h4>
                    <p className='prg_info'>Armazenar em frascos 
identificados e encaminhar para o Laboratório de 
Química. No caso de resíduos biológicos perigosos 
armazenar em saco plástico branco identificado e 
encaminhar para um dos pontos de coleta especial: 
biotério ou próximo à clínica de odontologia.</p>
                    <br/>
                    <h4 className='h4_dica'>SAÚDE:</h4>
                    <p className='prg_info'>Armazenar em sacos plásticos brancos 
e os perfurocortantes em caixas do tipo 
Descarpack, encaminhar para um dos pontos de 
coleta especial: biotério ou próximo à clínica de 
odontologia.</p>
                </div>
                <h2 className='h_dica'>E OS MATERIAIS
ELETROELETRÔNICOS,
LÂMPADAS FRIAS E LATAS
DE SPRAY VAZIAS?</h2>
                <div className='div_dica2'>
                    <p className='prg_dica'>Estes materiais necessitam de descarte especial 
por conter produtos tóxicos e metais pesados 
que podem produzir danos à saúde. Estes 
materiais devem ser encaminhados ao 
responsável por cada setor, este irá 
armazená-los e quando necessário solicitar, 
através do Sistema de Atendimento Técnico 
(SAT), que a prefeitura do campus retire e 
encaminhe à empresa responsável pela 
destinação correta</p>
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

export default Dicas;