import React from 'react';
import './suscribete.css';

const Suscribete = () => {
    return (
        <section className='layoutSuscribete'>
          <div className='divColumn'>
            <div className='divRows'>
              <div className='SuscriptionPriceDiv'>
                <h2>Susbribete al nivel 6</h2>
                <div>
                  <p className='precioAntes'>$15.000</p>
                  <div className='pricesDiv'>
                    <p className='precioAhora'>$5.990</p>
                    <p className='xmes'>/mes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='beneficiosDiv'>
              <div>
                <p className='chanelsTitle'>Consigue los mejores beneficios en Mercado Libre</p>
              </div>
              <section className='ChanelsDivs'>
                <div>
                  <img src="../src/images/dplus.svg" alt="dplusLogo" className='chanelsLogos' />
                  <p>Disney+ sin cargo</p>
                </div>
                <div>
                  <img src="../src/images/starplus.svg" alt="starplusLogo" className='chanelsLogos' />
                  <p>Star+ sin cargo</p>
                </div>
                <div className='enviosGratisdiv'>
                  <img src="../src/images/truck.png" alt="truckLogo" className='chanelsLogos'/>
                  <p>Envios gratis y rapidos desde $19.990 y 40% OFF en envios de menos de $19.990</p>
                </div>
              </section>
            </div>
            <div className='btnDiv'>
              <button>Suscribete</button>
            </div>
          </div>
        </section>
    );
};

export default Suscribete;