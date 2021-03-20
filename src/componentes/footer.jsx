import React from 'react';

function Footer() {
    return (
        <>
            <div className="footer">

                <div className="footer-container">

                    <div className="logo-footer"></div>
                    <div className="footer-endereco">
                        <h3>Onde Estamos</h3>
                        <p>Rua Qui ipsorum lingua Celtae, 
                            nostra Galli appellantur.</p>
                    </div>

                    <div className="footer-contato">
                        <h3>Contato</h3>
                        <p>65. 9 9999-9999</p>
                        <p>contato@passeinacpa.com.br</p>
                    </div>

                    <div className="footer-sociais">
                        <div className="face"></div>
                        <div className="insta"></div>
                    </div>

                </div>{/**footer-container */}

            </div>{/**footer */}
        </>
    );
}

export default Footer;