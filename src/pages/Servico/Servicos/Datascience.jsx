import React from "react";
import backgroundImg16 from '../../../assets/images/tela2.jpg'
import { HeaderServices } from "../../../components/Cards/Card";

const Datascience = () => {

    document.title = 'Data Science';

    return (                
    <div className='pt-16'>
        <div className="bg-thegray home-no-scroll" id={'position1'}> 
            <div className="relative z-10 pt-0 pb-20">
            <div className="HomeContainer">
                <div className='lg:pt-5 pt-0'>
                <HeaderServices  className='flex justify-center items-center' 
                local="Home  >  Serviços  > "
                local2="Data Science"
                title="Análise de Dados Inteligente" 
                description="Data Science, ou Ciência de Dados, é como ter um detetive para desvendar segredos valiosos escondidos nos dados da sua empresa. Isso ajuda sua empresa a tomar decisões mais inteligentes e se manter à frente da concorrência.
                "
                image={backgroundImg16}
                ></HeaderServices>
                </div>
            </div>
            </div>
        </div>
    </div> 
        
    )

}

export default Datascience


