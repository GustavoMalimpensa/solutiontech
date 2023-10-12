import React from 'react'
import Heading1 from '../Headings/Heading1'
import { Card2 } from '../Cards/Card'
import { Link } from 'react-router-dom'
import backgroundImg4 from '../../assets/images/google.jpg'; 
import backgroundImg5 from '../../assets/images/amazon.jpg'; 
import backgroundImg6 from '../../assets/images/microsoft.png'; 

const Bigtech = () => {
  
  return (

    <div >
      <div>
        <div className='my-10 pt-20'>
          <Heading1 text1={"Aprenda com as"} text2={" Grandes Empresas"} details={"Também conhecidas como 'Big Techs', são corporações de destaque no setor tecnológico, com alcance global e influência significativa em diversas áreas."} />
        </div>  
        <div className='justify-center items-center my-10 flex flex-wrap gap-10'>
          <Card2 title="Google" company={"Busca Inteligente e Assistente Virtual Empresarial"} image={backgroundImg4}/>
          <Card2 title="Amazon" company={"Inteligência Artificial e Entregas Avançadas"} image={backgroundImg5} />
          <Card2 title="Microsoft" company={"Inovações Tecnológicas e Soluções Empresariais"} image={backgroundImg6} />
        </div>
        <div data-aos="zoom-in" className='flex items-center justify-center mt-5'>
          <Link to='/Big-Tech'>
              <button className='border-sky-500 text-sky-500 border hover:bg-sky-500 px-8 py-2  font-medium ease-in transition-all delay-[10ms] hover:text-white'>
              Conheça mais sobre as Big Techs e suas soluções 
              </button>
          </Link> 
        </div>
      </div>

    </div>
  )
}

export default Bigtech
