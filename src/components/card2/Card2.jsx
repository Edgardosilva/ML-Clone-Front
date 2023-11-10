import React from 'react';
import './card2.css';

const Card2 = ({ srcImg, titulo }) => {
    return (
        <div className='layoutCard'>
            <div className='divText'>
                <p className='preTitulo'>COCINA ENTRETE</p>
                <p className='titulo'>{titulo}</p>
                <button>Ver mas</button>
            </div>
            <div className='imgDiv'>
                <img src={srcImg} alt="imgCard" />
            </div>
        </div>
    );
};

export default Card2;