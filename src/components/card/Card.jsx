import React from 'react';
import './card.css'

const Card = ({ productName, price, imgSrc }) => {
    return (
      <div className='cartLayout'>
        <section className='imgSection'>
          <img src={imgSrc} alt="imgProduct" className='imgProduct'/>
        </section>
        <section className='productDescription'>
          <p>{productName}</p>
          <p className='price'>{price}</p>
          <div className='cuotasDiv'>
            <p>en</p>
            <p className='cuotas'> 12x $3046 sin interes</p>
          </div>
          <p className='envioGratis'>Envío gratis</p>
        </section>
      </div>
    );
};

export default Card;