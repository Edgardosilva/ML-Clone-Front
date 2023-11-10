import React from 'react';
import './pagos.css';

const Pagos = () => {
    return (
        <section className='pagosLayout'>
          <div className='divPagos'>
            <section>
              <p>Paga comodo y seguro</p>
              <h6>con Mercado Pago</h6>
            </section>
            <div>
              <img src="../src/images/credit-card.svg" alt="creditCardLogo" />
              <div className='divTexto'>
                <p>Hasta 12 cuotas sin interes</p>
                <a href='#'>Ver mas</a>
              </div>
            </div>
            <div>
              <img src="../src/images/debit-card.svg" alt="debitCartLogo" />
              <div className='divTexto'>
                <p>Tarjeta de debito</p>
                <a href='#'>Ver mas</a>
              </div>
            </div>
            <div>
              <img src="../src/images/view-more.svg" alt="viewMoreLogo" />
              <div className='divTexto'>
                <p>Mas medios de pago</p>
                <a href='#'>Ver mas</a>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Pagos;