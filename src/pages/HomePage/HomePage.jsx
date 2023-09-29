import React from 'react';
import './HomePage.scss'
import Sobre from '../../components/HomePage/Sobre';
import Perguntas from '../../components/HomePage/Perguntas';
import Servicos from '../../components/HomePage/Servicos';
import HeaderAnimation from './HeaderAnimation';

const HomePage = () => {
  document.title = 'Solucion Tech | Home';

  return (
    <div>
      <div className="demo-1 font-bold">
        <div className="content">
          <div id="large-header" className="large-header">
           <HeaderAnimation />
            <canvas id="demo-canvas"></canvas>
            <div className='header'>
              <div className='justify-center flex items-center my-[5rem] lg:gap-1 md:gap-2 gap-6 flex-col text-5xl font-bold'>
                <h1 data-aos="zoom-in" className='font-extrabold text-center text-transparent lg:text-7xl md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-white to-white'>Seja Líder de Mercado!</h1>
                <h1  className='font-bold text-center text-transparent lg:text-4xl md:text-3xl text-3xl mx-5 bg-clip-text bg-gradient-to-b from-gray-300 to-gray-100 my-3'> Transforme seu negócio com recursos modernos e práticos.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className='lg:mx-[4rem] md:mx-[3rem] mx-[2rem]'>
        <Sobre/>
        <Servicos/>
        <Perguntas/>
      </div>
    </div>
  )
}

export default HomePage
