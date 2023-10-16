import React from "react";
import backgroundImg16 from '../../../assets/images/tela2.jpg'
import { HeaderServices } from "../../../components/Cards/Card";

const Email = () => {

    document.title = 'Cátalogo';

    return (
        <div className='pt-16'>
            <div className="bg-thegray home-no-scroll" id={'position1'}> 
                <div className="relative z-10 pt-0 pb-20">
                <div className="HomeContainer">
                    <div className='lg:pt-5 pt-0'>
                    <HeaderServices  className='flex justify-center items-center' 
                    local="Home  >  Serviços  > "
                    local2=" E-mail"
                    title="E-mail Corporativo" 
                    description="Proporcionamos comunicações profissionais e seguras, fortalecendo sua imagem de marca e protegendo suas mensagens."
                    image={backgroundImg16}
                    ></HeaderServices>
                    
                    </div>
                </div>
                </div>
            </div>
        </div> 
    )

}

export default Email