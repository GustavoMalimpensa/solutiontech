import React from "react";
import Heading from '../../../components/Headings/Heading'
import { BsCheck } from 'react-icons/bs' 
import backgroundImg13 from '../../../assets/images/lista.png'
import HeaderAnimation from '../../../components/Globe/HeaderAnimation';
import CatalogoCard from "../Cards/CatalogoCard";
import { HeaderServices } from "../../../components/Cards/Card";
import backgroundImg16 from '../../../assets/images/tela2.jpg'

const Catalogo = () => {

    document.title = 'Cátalogo';

    const catalogos = [
        {
          name: 'Cátalogo Lite',
          image: backgroundImg13,
          about: "Cátalgo para exibição dos produtos, de uma maneira prática, facilitando a venda e visualização para os clientes.", 
          value: "R$125",
          value2: "R$1.300",
          value3: "R$1.800",
          icon1: "Hospedagem",
          description1: "Hospedagem disponobilizada no periodo de um ano",
          icon2: "Dóminio personalizado",
          description2: "Hospedagem disponobilizada no periodo de um ano",
          icon3: "Design Responsivo",
          description3: "Hospedagem disponobilizada no periodo de um ano",
          icon4: "",
          description4: "Hospedagem disponobilizada no periodo de um ano",
          icon5: "",
          description5: "Hospedagem disponobilizada no periodo de um ano",
          icon6: "",
          description6: "Hospedagem disponobilizada no periodo de um ano",
          id: "0"
        },
        {
          name: 'Cátalogo Pro',
          image: backgroundImg13,
          about: "Uma plataforma digital que organiza, apresenta e facilita a compra de produtos de uma empresa, melhorando a visibilidade e acessibilidade dos produtos aos clientes.", 
          value: "R$225",
          value2: "R$2.400",
          value3: "R$2.800",
          icon1: "Hospedagem",
          description1: "Hospedagem disponobilizada no periodo de um ano",
          icon2: "Dóminio personalizado",
          description2: "Dóminio personalizado de 1 ano, com o nome que desejar",
          icon3: "Design Responsivo",
          description3: "Compativel com qualquer dispositivo ou tamanho de tela",
          icon4: "Redirecionamento",
          description4: "Redirecione seu cliente para o whatsapp",
          icon5: "",
          icon6: "",
          id: "1"
        }  
        
    ]

    return (
    <div className='pt-16'>
        
      <div className="bg-thegray home-no-scroll" id={'position1'}> 
          <div className="relative z-10 pt-0 pb-20">
              <div className="HomeContainer">
                  <div className='lg:pt-5 pt-0'>
                  <HeaderServices  className='flex justify-center items-center' 
                  local="Home  >  Serviços  > "
                  local2=" Catálogo"
                  title="Desenvolvimento de Catálogos" 
                  description=" Para ajudar o seu negócio a destacar-se e impressionar seus clientes. Nossos catálogos não são apenas uma coleção de produtos; são uma vitrine cuidadosamente elaborada que cativa, informa e conduz os clientes à ação."
                  image={backgroundImg16}
                  ></HeaderServices>
                  
              </div>
          </div>
          </div>
      </div>

      <main className="bg-thegray home-no-scroll">
        <div className="absolute flex justify-center  globe-position">
            <HeaderAnimation /> 
        </div>
        <div className="relative z-10 pt-0 pb-20">
          <div className="HomeContainer">
            <div className='pt-16'>
              <Heading  className='flex justify-center items-center' heading="Nossos Planos" 
              description="Soluções de cátalogo para você aumentar a eficiência e reduzir custos com atendimento"></Heading>
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