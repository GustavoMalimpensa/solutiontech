import React from 'react'
import Heading1 from '../Headings/Heading1'
import { Vantagens } from '../Cards/Card'
import backgroundImg3 from '../../assets/images/img1234.jpg'; 
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

  return (

    <div >
      
      {/*
      <div className='my-10 mt-20 '>
        <Heading1 details={"Bem-vindo à Solucion Tech, a parceira ideal para impulsionar seu negócio! Nossa softhouse oferece soluções tecnológicas personalizadas para microempresários."} text1={"Na Solucions Tech"} text2={"Contruimos Sonhos"} />
        <div className=' my-32 flex flex-wrap gap-10 items-center justify-evenly'>
          <EstasticasCard icon={<BsFillPeopleFill className='text-sky-500' size={30} />} type={"Sonhos realizados"} data={6} />
          <EstasticasCard icon={<BsFillCalendarEventFill className='text-sky-500' size={30} />} type={"Sonhos sendo realizados"} data={3} />
          <EstasticasCard icon={<AiFillProject className='text-sky-500' size={30} />} type={"Cidades"} data={3} />
        </div>
      </div>
      */}
      
      <div>
        <div className='my-10 pt-32' >
        <Heading1 details={"Entenda a importância de simplificar a sua jornada de microempreendedor."} text1={"Entenda as"} text2={" Vantangens"}  />
        </div>
        <div className='my-10 flex flex-wrap gap-10 items-center justify-evenly'>
          {SobreData.map((data) => (
            <Vantagens key={data.id} title={data.title} description={data.description} image={data.image} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Sobre
