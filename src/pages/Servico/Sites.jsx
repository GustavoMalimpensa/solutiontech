import React from "react";
import SitesCard from "./SiteCard";

const Sites = () => {

    document.title = 'Sites';

    const sites = [
        {
          name: 'Site básico',
          image: backgroundImg12,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
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
          name: 'Site médio',
          image: backgroundImg13,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
          value: "12x89,90",
          value2: "890,00",
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
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
          value: "12x129.90",
          value2: "1.290,00",
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
                    <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='site_main'>
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