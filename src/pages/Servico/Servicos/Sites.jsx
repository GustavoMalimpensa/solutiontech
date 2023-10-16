import React from "react";
import Heading from '../../../components/Headings/Heading'
import { BsCheck } from 'react-icons/bs'
import backgroundImg12 from '../../../assets/images/terra.png' 
import SitesCard from "../Cards/SiteCard";
import { HeaderServices } from "../../../components/Cards/Card";
import backgroundImg16 from '../../../assets/images/tela2.jpg'

const Sites = () => {

    document.title = 'Sites';

    const sites = [
        {
          name: 'Site Lite',
          image: backgroundImg12,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
          value: "R$125",
          value2: "R$1.300",
          value3: "R$1.800",
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
          name: 'Site Business',
          image: backgroundImg12,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
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
          icon6: "Insights dos clientes",
          description6: "Descubra dia, hora e plataforma que seus clientes estão acessando seu conteudo",
          id: "2"
        } 
        
    ]

    return (
        <div className='pt-16'>
            
            <main className="bg-thegray home-no-scroll ">
                <div className='pt-0'>
                    <div className="bg-thegray home-no-scroll" id={'position1'}> 
                        <div className="relative z-10 pt-0 pb-20">
                            <div className="HomeContainer">
                                <div className='lg:pt-5 pt-0'>
                                <HeaderServices  className='flex justify-center items-center' 
                                local="Home  >  Serviços  > "
                                local2=" Sites"
                                title="Desenvolvimento de Sites" 
                                description="Uma plataforma digital que organiza, apresenta e facilita a compra de produtos de uma empresa, melhorando a visibilidade e acessibilidade dos produtos aos clientes. Essencial para acompanhar os indicadores da sua empresa."
                                image={backgroundImg16}
                                ></HeaderServices>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 

                <div className="relative z-10 pt-0 pb-20">
                    <div className="HomeContainer">
                    <div className='pt-0'>
                        <div className='flex justify-center items-center'>
                            <Heading className='flex justify-center items-center' heading="Nossos planos" 
                            description="Soluções de site para você aumentar a eficiência e reduzir custos"></Heading>
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