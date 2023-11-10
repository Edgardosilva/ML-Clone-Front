import React from 'react';
import Card from '../card/Card';
import './productSection.css'

const ProductSection = ({ sectionTitle }) => {
    return (
        <div className='productsLayout'>
          <div className='titleDiv'>
            <p>{sectionTitle}</p>
            <a href='#'>Ver historial</a>
          </div>
          <div className='cardsLayout'>
            <Card productName={'Camara de Fotografía'} price={'$35.600'} imgSrc={'../src/images/camara.webp'}/>
            <Card productName={'Teclado mecanico'} price={'$23.600'} imgSrc={'../src/images/teclado.webp'}/>
            <Card productName={'Macbook Pro'} price={'$745.600'} imgSrc={'../src/images/macbook.jpeg'}/>
            <Card productName={'Play Station 5'} price={'$555.600'} imgSrc={'../src/images/ps5.jpg'}/>
            <Card productName={'Xbox series X'} price={'$525.600'} imgSrc={'../src/images/xbox.jpg'}/>
          </div>
        </div>
    );
};

export default ProductSection;