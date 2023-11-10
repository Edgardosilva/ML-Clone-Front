import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import './App.css'
import Slider from './components/slider/Slider'
import Pagos from './components/pagos/Pagos'
import ProductSection from './components/productSection/ProductSection'
import Suscribete from './components/suscribete/suscribete'
import Card2 from './components/card2/card2'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Slider />
      <Pagos />
      <ProductSection sectionTitle={'Basado en tu ultima vista'}/>
      <ProductSection sectionTitle={'Relacionados con tus visitas en Computacion'}/>
      <ProductSection sectionTitle={'Ofertas'}/>
      <Suscribete />
      <section className='cardSection'>
        <Card2 srcImg={'../src/images/imgCard1.jpg'} titulo={'DISFRUTA COCINAR LO QUE QUIERAS'}/>
        <Card2 srcImg={'../src/images/imgCard2.jpg'} titulo={'NUEVA TEMPORADA DE TEXTILES'}/>
      </section>
      <Footer />
    </>
  )
}

export default App
