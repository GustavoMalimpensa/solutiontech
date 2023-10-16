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
                    local2=" Consultoria"
                    title="Consultoria de TI" 
                    description="A Consultoria de Tecnologia da Informação (T.I.) é como ter um guia especializado para ajudar sua empresa a usar a tecnologia da melhor maneira possível."
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