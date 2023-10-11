import React from "react";
import { Link } from 'react-router-dom'
 
import Heading from '../../../../components/Headings/Heading'

const Datascience = () => {

    document.title = 'Data Science';

    return (                
    <div className='pt-16'>
        <main className="bg-thegray home-no-scroll">
        <div className="relative z-10 pt-0 pb-20">''
            <div className="HomeContainer">
            <div className='pt-16'>
                <Heading  className='flex justify-center items-center' heading="O que podemos fazer por você?" 
                description="Somos uma agência digital especializada em desenvolver soluções tecnológicas inteligentes, temos como objetivo usar nossos serviços para ajudar empresas a crescerem e atingirem seus objetivos. Venha ser nosso parceiro!"></Heading>
                <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='site_main'>
            
                    <div data-aos="zoom-in" className='border border-gray-800 bg-[#0f0e0e] hover:bg-[#131212] p-5 rounded-2xl transition-all delay-[30ms] ease-in-out hover:border-gray-700 hover:scale-[101%]  border-b-sky-700 hover:border-b-sky-500' id="datascience_main_1">
                        <div className='flex items-center justify-center my-3'>
                            <div>
                                
                            </div>
                        </div>
                    <div className='text-xl'>
                        Data Science
                    </div>

                    <div className='text-gray-400 my-3 text-sm text-left'>
                        Para melhor seu négocio
                    </div>
                
                    <div  className=' text-gray-400 text-sm'>
                        <div className='flex text-gray-400 text-sm items-center'>
                            {icon}
                            <div className='ml-2'>
                                melhoria
                            </div>
                        </div>
                    </div>

                    <Link to="/contato">
                        <div className='py-3'>
                            <button className='border-sky-500 text-sky-500 border hover:bg-sky-500 px-8 py-2 rounded-full font-medium ease-in transition-all delay-[10ms] hover:text-white'>
                            Entre em Contato
                            </button>
                        </div>
                    </Link>

                </div>    
                </div>
            </div>
            </div>
        </div>
        </main>
    </div>  
        
    )

}

export default Datascience


