import React from "react";
import Heading from '../../components/Headings/Heading'
import { BsCheck } from 'react-icons/bs'
import backgroundImg12 from '../../assets/images/terra.png' 
import backgroundImg13 from '../../assets/images/lista.png'
import backgroundImg14 from '../../assets/images/datascience.png'
import HeaderAnimation from '../../components/Globe/HeaderAnimation';
import CatalogoCard from "./Cards/CatalogoCard";

const Catalogo = () => {

    document.title = 'Cátalogo';

    const catalogos = [
        {
          name: 'Cátalogo básico (Estático)',
          image: backgroundImg12,
          about: "Cátalgo para exibição dos produtos, de uma maneira prática, facilitando a venda e visualização para os clientes.", 
          value: "12x79,90",
          value2: "800,00",
          icon1: "Hospedagem",
          icon2: "Dóminio proprio",
          icon3: "",
          icon4: "",
          icon5: "",
          icon6: "",
          id: "0"
        },
        {
          name: 'Cátalogo médio (Dínamico)',
          image: backgroundImg13,
          about: "Uma plataforma digital que organiza, apresenta e facilita a compra de produtos de uma empresa, melhorando a visibilidade e acessibilidade dos produtos aos clientes.", 
          value: "12x119,90",
          value2: "1.199,00",
          icon1: "Hospedagem",
          icon2: "Dóminio proprio",
          icon3: "Compra pelo whatsapp",
          icon4: "Gestão dos produtos",
          icon5: "",
          icon6: "",
          id: "1"
        },
        {
          name: 'Cátalogo Avançado',
          image: backgroundImg14,
          about: "Um campo que utiliza técnicas e algoritmos para coletar, analisar e interpretar grandes volumes de dados, fornecendo insights valiosos e tomadas de decisões.", 
          value: "12x179.90",
          value2: "1.790,00",
          icon1: "Hospedagem",
          icon2: "Dóminio personalizado",
          icon3: "Compra pelo whatsapp",
          icon4: "Gestão dos produtos",
          icon5: "Coleta de dados",
          icon6: "Insights dos clientes",
          id: "2"
        } 
        
    ]

    return (
    <div className='pt-16'>
        <main className="bg-thegray home-no-scroll">
          <div className="absolute flex justify-center  globe-position">
              <HeaderAnimation /> 
          </div>
          <div className="relative z-10 pt-0 pb-20">
            {/*Main content / Hero section */}
            <div className="HomeContainer">
              <div className='pt-16'>
                <Heading  className='flex justify-center items-center' heading="O que podemos fazer por você?" 
                description="Somos uma agência digital especializada em desenvolver soluções tecnológicas inteligentes, temos como objetivo usar nossos serviços para ajudar empresas a crescerem e atingirem seus objetivos. Venha ser nosso parceiro!"></Heading>
                <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='catalogo_main'>
                  {catalogos.map((catalogo, id ) => (
                    <CatalogoCard icon={<BsCheck className='text-sky-500' size={30} />} catalogo={catalogo} key={id}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>        
    )

}

export default Catalogo