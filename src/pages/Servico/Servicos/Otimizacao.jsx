import React from "react";
import backgroundImg16 from '../../../assets/images/tela2.jpg'
import { HeaderServices } from "../../../components/Cards/Card";

const Otimizacao = () => {

    document.title = 'Cátalogo';

    return (
        <div className='pt-16'>
        <div className="bg-thegray home-no-scroll" id={'position1'}> 
            <div className="relative z-10 pt-0 pb-20">
            <div className="HomeContainer">
                <div className='lg:pt-5 pt-0'>
                <HeaderServices  className='flex justify-center items-center' 
                local="Home  >  Serviços  > "
                local2=" Otimização SEO"
                title="Otimização SEO " 
                description="Imagine o seu site como uma loja em uma rua movimentada. A otimização de site é como tornar essa loja mais visível e atraente para as pessoas que passam por ela."
                image={backgroundImg16}
                ></HeaderServices>
                
                </div>
            </div>
            </div>
        </div>
    </div> 
    )

}

export default Otimizacao