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
          value: "R$95",
          value2: "R$950",
          value3: "R$1.200",
          icon1: "Hospedagem",
          icon2: "Dóminio personalizado",
          icon3: "",
          icon4: "",
          icon5: "",
          icon6: "",
          id: "0"
        },
        {
          name: 'Site Pro',
          image: backgroundImg12,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
          value: "R$149",
          value2: "R$1.499",
          value3: "R$1.800",
          icon1: "Hospedagem",
          icon2: "Dóminio personalizado",
          icon3: "",
          icon4: "",
          icon5: "",
          icon6: "",
          id: "1"
        },
        {
          name: 'Site Business',
          image: backgroundImg12,
          about: "Mostre seus serviços ou produtos para todo o mundo, demonstre tudo o que é capaz.", 
          value: "R$229",
          value2: "R$2.290",
          value3: "R$2.600",
          icon1: "Hospedagem",
          icon2: "Dóminio personalizado",
          icon3: "",
          icon4: "",
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
                <div className='pt-16 '>
                    <Heading  className='flex justify-center items-center' heading="Escolha seu plano" 
                    description="Comece agora a aprimorar seu negócio"></Heading>
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