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
                    title="Gestão de E-mail Empresarial" 
                    description="Entendemos a importância das comunicações empresariais eficazes. É por isso que oferecemos um serviço de Gerenciamento de E-mail Corporativo que simplifica e aprimora a forma como sua empresa se comunica."
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