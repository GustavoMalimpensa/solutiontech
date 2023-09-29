import React from 'react'
import Heading1 from '../Headings/Heading1'
import { Vantagens, Card2 } from '../Cards/Card'
import { Link } from 'react-router-dom'
import backgroundImg3 from '../../assets/images/img1234.jpg'; 
import backgroundImg4 from '../../assets/images/google.jpg'; 
import backgroundImg5 from '../../assets/images/amazon.jpg'; 
import backgroundImg6 from '../../assets/images/microsoft.png'; 
import backgroundImg15 from '../../assets/images/tomadadedecisao.jpg'; 
import backgroundImg16 from '../../assets/images/datasciencedados.jpg';


const Sobre = () => {
  const SobreData = [
    {
      id: "0",
      title: "Aumente a visibilidade",
      description: "Amplie a visibilidade do seu negócio com uma ampla gama de ferramentas e estratégias personalizadas propostas para destacar sua presença no mercado.",
      image: backgroundImg3,
    },
    {
      id: "1",
      title: "Otimize seus processos",
      description: "Otimize os processos do seu negócio, automatize tarefas e corte custos para impulsionar a eficiência e aumentar a lucratividade.",
      image: backgroundImg15,
    },
    {
      id: "2",
      title: "Aperfeiçoe sua tomada de decisão",
      description: "Analise os dados da sua empresa para extrair insights preciosos que podem ser altamente benéficos em processos decisórios.",
      image: backgroundImg16,
    }
]

  /* 
  <div className='my-10 mt-20 '>
    <Heading1 details={"Bem-vindo à Solucion Tech, a parceira ideal para impulsionar seu negócio! Nossa softhouse oferece soluções tecnológicas personalizadas para microempresários."} text1={"Na Solucions Tech"} text2={"Contruimos Sonhos"} />
    <div className=' my-32 flex flex-wrap gap-10 items-center justify-evenly'>
      <EstasticasCard icon={<BsFillPeopleFill className='text-sky-500' size={30} />} type={"Sonhos realizados"} data={6} />
      <EstasticasCard icon={<BsFillCalendarEventFill className='text-sky-500' size={30} />} type={"Sonhos sendo realizados"} data={3} />
      <EstasticasCard icon={<AiFillProject className='text-sky-500' size={30} />} type={"Cidades"} data={3} />
    </div>
  </div>
  */

  return (
    <div >
       <div className='my-10'>
       <Heading1 details={"Entenda a importância de simplificar a sua jornada de microempreendedor."} text1={"Entenda as"} text2={" Vantangens"}  />
      </div>
      <div className='my-10 flex flex-wrap gap-10 items-center justify-evenly'>
        {SobreData.map((data) => (
          <Vantagens key={data.id} title={data.title} description={data.description} image={data.image} />
        ))}
      </div>

      <Heading1 text1={"Aprenda com as"} text2={" Grandes Empresas"} details={"Também conhecidas como 'Big Techs', são corporações de destaque no setor tecnológico, com alcance global e influência significativa em diversas áreas."} />
      <div data-aos="zoom-in" className='flex items-center justify-center mt-5'>
            <Link to='/Big-Tech'>
                <button className='border-sky-500 text-sky-500 border hover:bg-sky-500 px-8 py-2 rounded-full font-medium ease-in transition-all delay-[10ms] hover:text-white'>
                Conheça mais sobre as Big Techs e suas soluções 
                </button>
            </Link> 
      </div>
      <div className='justify-center items-center my-20 flex flex-wrap gap-10  '>
        <Card2 title="Google" company={"Busca Inteligente e Assistente Virtual"} image={backgroundImg4}/>
        <Card2 title="Amazon" company={"Inteligência Artificial e Entrega Avançada"} image={backgroundImg5} />
        <Card2 title="Microsoft" company={"Inovação Tecnológica e Soluções Empresariais"} image={backgroundImg6} />
      </div>
    </div>
  )
}

export default Sobre
