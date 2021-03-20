import React from 'react';

function Sessao1() {
    return(
        <>
            <div className="sessao1">
                <div className="divisor-sessao1">
                    <div className="line1"></div>
                    <div className="semicircle">
                        <h3>Nossos Simulados</h3>
                        <p>Conheça cada simulado da nossa plataforma online</p>

                        <div className="tipos-simulado">
                            <ul>
                                <li>CPA 10</li>
                                <li>CPA 20</li>
                                <li>CEA</li>
                            </ul>
                        </div>

                    </div>

                    <div className="card-1">
                        <div className="avatar1"></div>
                            <div className="card-1-wrap">
                                <div className="part-1">
                                    
                                    <h3>O que é CPA 10?</h3>
                                    <div className="line2"></div>
                                    <p>A CPA-10 é destinada aos profissionais que atuam na distribuição de produtos
                                        de investimento em agências bancárias ou plataformas de atendimento.</p>

                                    <div className="btn1"><span>Cadastrar</span></div>
                                    <div className="line3"></div>

                                </div>

                                <div className="descricao1">

                                    <div className="h3-wrapper">
                                        <h3>A quem se destina?</h3>
                                    </div>

                                    <ul>
                                        <li>Profissionais que trabalham em instituições em Agências Bancárias</li>
                                        <li>Profissionais que trabalham em instituições financeiras em geral, mesmo aquelas que não aderiram ao código.</li>
                                        <li>Estudantes e profissionais de autarquias ou órgãos públicos.</li>
                                    </ul>
                                </div>

                            </div> {/*card-1-wrap */}

                            <div className="duvida">
                                <h3>Está com dúvidas?</h3>
                                <p>Fale diretamente pelo <span>What's App</span></p>
                            </div>
                        
                    </div>
                    
                    
                </div>
            </div>
            
           
        </>
    );
}

export default Sessao1;