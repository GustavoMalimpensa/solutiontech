import React from "react";
import Heading from '../../../components/Headings/Heading'
import { BsCheck } from 'react-icons/bs' 
import backgroundImg13 from '../../../assets/images/lista.png'
import HeaderAnimation from '../../../components/Globe/HeaderAnimation';
import CatalogoCard from "../Cards/CatalogoCard";

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
        },
        {
          name: 'Cátalogo Business',
          image: backgroundImg13,
          about: "Um campo que utiliza técnicas e algoritmos para coletar, analisar e interpretar grandes volumes de dados, fornecendo insights valiosos e tomadas de decisões.", 
          value: "R$335",
          value2: "R$3.700",
          value3: "R$4.500",
          icon1: "Hospedagem",
          description1: "Hospedagem disponobilizada no periodo de um ano",
          icon2: "Dóminio personalizado",
          description2: "Dóminio personalizado de 1 ano, com o nome que desejar",
          icon3: "Design Responsivo",
          description3: "Compativel com qualquer dispositivo ou tamanho de tela",
          icon4: "Redirecionamento",
          description4: "Redirecione seu cliente para o whatsapp",
          icon5: "Coleta de dados",
          description5: "Saiba quem é seu publico alvo e por onde está entrando em contato",
          icon6: "Insights dos produtos",
          description6: "Obtenha dados sobre seus produtos, tenha parametros sobre venda e interesse ",
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
            <div className="HomeContainer">
              <div className='pt-16'>
                <Heading  className='flex justify-center items-center' heading="Nossos planos para otimizar o seu negócio" 
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