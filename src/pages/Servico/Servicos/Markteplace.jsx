import React from "react";
import backgroundImg16 from '../../../assets/images/tela2.jpg'
import { HeaderServices } from "../../../components/Cards/Card";

const Markteplace = () => {

    document.title = 'Cátalogo';

    const dataBases = [
        {
          name: 'Markteplace',
          image: backgroundImg16,
          Content: "Descubra o caminho para o sucesso no comércio online com o nosso serviço completo de desenvolvimento de sites, catálogos e marketplace. Estamos aqui para transformar a sua visão em realidade, capacitando você a iniciar e expandir o seu negócio digital. Com nossa expertise em design de sites atraentes, criação de catálogos digitais envolventes e a implementação de um marketplace de alto desempenho, você estará pronto para conquistar o mundo do comércio eletrônico. Não perca tempo - dê o primeiro passo para vender online de forma eficaz e alcance um público global agora mesmo!", 
          url: 'valor',
          value: "R$418",
          value2: "R$4.800",
          value3: "R$5.500",
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
    ]

    return (
        <div className='pt-16'>
            
            <div className="bg-thegray home-no-scroll" id={'position1'}>
                
                <div className="relative z-10 pt-0 pb-20">
                <div className="HomeContainer">
                    <div className='pt-5'>
                    <HeaderServices  className='flex justify-center items-center' 
                    local="Home  >  Serviços  > "
                    local2=" Marketplace"
                    title="Desenvolvimento de Marketplace" 
                    description="Tenha uma solução digital unificada para sua empresa, onde seus clientes interajam de forma rápida e dinâmica na busca de informações. Podemos auxiliar na melhor solução para seu negócio. Somos a empresa de desenvolvimento de sites líder no mercado."
                    image={backgroundImg16}
                    ></HeaderServices>
                    
                    </div>
                </div>
                
                </div>
            </div>

            
        </div> 


        
    )

}

export default Markteplace