import React from 'react';
import Plus1 from './plus';

function Sessao2() {

        return(
            <>
                <div className="sessao2">
                    <div className="container-sessao2">
                        <div className="line4"></div>
                        <h3>Dúvidas Frequentes</h3>
                        <p>Conheça cada simulado da nossa plataforma online</p>
                        <div className="sessao2-wrap">
                            <ul>
                                <li>Qual simulado é melhor pra mim?<span><Plus1/></span></li>
                                <li>Por quê fazer esse simulado?<span><Plus1/></span></li>
                                <li>Quem pode ter certificado ANBIMA?<span><Plus1/></span></li>
                                <li>O que é ANBIMA?<span><Plus1/></span></li>
                                <li>Qual simulado é melhor pra mim?<span><Plus1/></span></li>
                            </ul>

                            <div className="sessao2-descricao">
                                <h3><span></span>Qual simulado é melhor pra mim?</h3>
                                <p>
                                Qui ipsorum lingua Celtae, nostra Galli appellantur. Me non paenitet nullum 
                                festiviorem excogitasse ad hoc. Donec sed odio operae, eu vulputate felis rhoncus. 
                                Cras mattis iudicium purus sit amet fermentum. Magna pars studiorum, prodita quaerimus. 
                                Tityre, tu patulae recubans sub tegmine fagi dolor. Cras mattis 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Sessao2;