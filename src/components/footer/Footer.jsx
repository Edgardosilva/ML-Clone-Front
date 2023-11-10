import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <section className='layoutFooter'>
            <div className='widthFooter'>
                <div className='divInfo'>
                    <img src="../src/images/payment.svg" alt="cardLogo" />
                    <div className='infoDiv'>
                        <p className='tituloDiv'>Elige como pagar</p>
                        <p className='infoFooter'>Con Mercado Pago, paga con tus tarjetas de débito y crédito o hazlo con efectivo en puntos de pago. Paga siempre desde Mercado Libre para que podamos asegurar tu dinero.</p>
                        <a href='#'>Como pagar con Mercado Pago</a>
                    </div>
                </div>
                <div className='divInfo'>
                    <img src="../src/images/shipping.svg" alt="shippingLogo" />
                    <div className='infoDiv'>
                        <p className='tituloDiv'>Envío gratis desde $ 19.990</p>
                        <p className='infoFooter'>Con solo estar registrado en Mercado Libre, tienes envíos gratis en millones de productos seleccionados.</p>
                        <a href='#'>Conoce más sobre este beneficio</a>
                    </div>
                </div>
                <div className='divInfo'>
                    <img src="../src/images/protected.svg" alt="shieldLogo" />
                    <div className='infoDiv'>
                        <p className='tituloDiv'>Compra Protegida</p>
                        <p className='infoFooter'>Completa tus compras en Mercado Libre para que estén siempre protegidas. Si el producto no es lo que esperabas o no llega, te devolvemos tu dinero.</p>
                        <a href='#'>Cómo te protegemos</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;