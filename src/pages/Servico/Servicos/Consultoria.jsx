import React from "react";
import backgroundImg16 from '../../../assets/images/tela2.jpg'
import { HeaderServices } from "../../../components/Cards/Card";


const Consultoria = () => {

    document.title = 'Cátalogo';

    return (
        <div className='pt-16'>
            <div className="bg-thegray home-no-scroll" id={'position1'}> 
                <div className="relative z-10 pt-0 pb-20">
                <div className="HomeContainer">
                    <div className='lg:pt-5 pt-0'>
                    <HeaderServices  className='flex justify-center items-center' 
                    local="Home  >  Serviços  > "
                    local2="Consultoria"
                    title="Transforme Ideias em Negócios" 
                    description="Acreditamos que a tecnologia é a chave para transformar ideias inovadoras em negócios de sucesso. Se você tem uma visão única e deseja transformá-la em realidade, nossa equipe de consultores de T.I. está pronta para ajudar."
                    image={backgroundImg16}
                    ></HeaderServices>    
                    </div>
                </div>
                </div>
            </div>
        </div> 
    )

}

export default Consultoria