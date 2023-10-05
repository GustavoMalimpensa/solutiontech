import React from "react";
import Heading from '../../components/Headings/Heading'
import { BsCheck } from 'react-icons/bs'
import backgroundImg12 from '../../assets/images/terra.png' 
import HeaderAnimation from '../../components/Globe/HeaderAnimation';
import SitesCard from "./Cards/SiteCard";

const Sites = () => {

    document.title = 'Sites';

    const sites = [
        {
          name: 'Site Lite',
          image: backgroundImg12,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
          value: "R$84",
          value2: "R$1.008",
          value3: "R$1.200",
          icon1: "Hospedagem",
          description1: "Hospedagem disponobilizada no periodo de um ano",
          icon2: "Dóminio personalizado",
          description2: "Dóminio personalizado de 1 ano, com o nome que desejar",
          icon3: "Design Responsivo",
          description3: "Compativel com qualquer dispositivo ou tamanho de tela ",
          icon4: "",
          description4: "Hospedagem disponobilizada no periodo de um ano",
          icon5: "",
          description5: "Hospedagem disponobilizada no periodo de um ano",
          icon6: "",
          description6: "Hospedagem disponobilizada no periodo de um ano",
          id: "0"
        },
        {
          name: 'Site Pro',
          image: backgroundImg12,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
          value: "R$110",
          value2: "R$1.320",
          value3: "R$1.700",
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
          name: 'Site Business',
          image: backgroundImg12,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
          value: "R$167",
          value2: "R$2.000",
          value3: "R$2.300",
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
          icon6: "Insights dos clientes",
          description6: "Descubra dia, hora e plataforma que seus clientes estão acessando seu conteudo",
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
                <div className='pt-16 '>
                    <div className='flex justify-center items-center'>
                        <Heading className='flex justify-center items-center' heading="Nossos planos para otimizar o seu negócio" 
                        description="Soluções de site para você aumentar a eficiência e reduzir custos com atendimento"></Heading>
                    </div>
                    <div className='my-20 flex flex-wrap gap-10 items-center justify-center' id='site_main'>
                        {sites.map((site, id ) => (
                            <SitesCard icon={<BsCheck className='text-sky-500' size={30} />} site={site} key={id}/>
                        ))}
                    </div>
                </div>
                </div>
            </div>
            </main>
        </div>  
    )

}

export default Sites