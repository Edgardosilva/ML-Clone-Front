import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
      <main>
        <section className='layoutCenter'>
          <div className='rowSuperior'>
            <img src='../src/images/ml.png' alt="logoML" className='logoML'/>
            <div className='searchInput'>
              <input type='text' className='buscador' placeholder='Buscar productos, marcas y mas...'/>
              <div className='divLogoSearch'>
                <img src="../src/images/search.svg" alt="logoDplus" className='searchLogo'/>
              </div>
            </div>
            <img src="../src/images/dplusLogo.webp" alt="logoDplus" className='logoDplus'/>
          </div>
          <div className='rowInferior'>
            <section className='locationDiv'>
              <img src="../src/images/gpsLogo.svg" alt="GPSlogo" className='gpsLogo'/>
              <div>
                <p>Ingresa tu</p>
                <p>Ubicacion</p>
              </div>
            </section>
            <nav className='nav1'>
              <ul className='ul1'>
                <li>Categorias</li>
                <li>Ofertas</li>
                <li>Historial</li>
                <li>Supermercado</li>
                <li>Moda</li>
                <li>Vender</li>
                <li>Ayuda</li>
              </ul>
            </nav>
            <nav className='nav2'>
              <ul className='ul2'>
                <li>Crea tu cuenta</li>
                <li>Ingresa</li>
                <li>Mis compras</li>
                <img src="../src/images/cart.svg" alt="cartLogo" />
              </ul>
            </nav>
          </div>
        </section>
      </main>
    );
};

export default NavBar;