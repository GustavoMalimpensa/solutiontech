import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebook } from 'react-icons/fa'

const ContatoCard = ({ title,description }) => {

    const handleClick = () => {
        const whatsappURL = `https://api.whatsapp.com/send?phone=${+5519999372133}`;
        window.open(whatsappURL);
    };

    return (             
        
    <div data-aos="zoom-in" className='w-fit '>
        <div className='border-[1px] border-gray-800 hover:border-gray-700 rounded-2xl w-[21rem] p-5 hover:scale-[102%] z-0 hover:z-10 bg-[#0a0a0a] transition-all delay-[30ms] ease-in-out'>
            <div data-aos="fade-up" className='w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base  pt-8'>
            <div className='flex items-center justify-start '>
                <h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1>
                <h1 className='text-lg font-semibold'>Informações de Contato</h1></div>
                <p className='max-w-[16rem] pt-4 text'>Rio Claro / SP - Brasil</p>
                <p className='pt-2'>Telefone : <a style={{ textDecoration: "none" }} href="tel:(19)99937-2133" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>(19) 99937-2133</span></a></p>
                <p className='pt-2'>E-mail : <a style={{ textDecoration: "none" }} href="mailto:ontato@solutiontech.dev" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>contato@solutiontech.dev</span></a></p>
            </div>
            <div className='flex items-center justify-start pt-8'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Redes Sociais</h1></div>
            <div className='flex gap-3 py-2 justify-center items-center pt-8'>
                <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gustavo_malimpensa/" >
                <FaInstagram className='transition ease-in delay-50 text-pink-500 visited:text-pink-500 hover:text-pink-600 hover:scale-[110%]' size={30} />
                </a>
                <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavo-malimpensa/" >
                <FaLinkedinIn className='transition ease-in delay-50 text-blue-500 visited:text-blue-500 hover:text-blue-600 hover:scale-[110%]' size={30} />
                </a>
                <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/T_E_S_L_Aclub" >
                <FaFacebook className='transition ease-in delay-50 text-sky-500 visited:text-sky-500 hover:text-sky-600 hover:scale-[110%]' size={30} />
                </a>
            </div> 
            <div>
                <h1 className='font-extrabold text-2xl text-black mr-3'>|</h1>
                <h3 className='text-base font-semibold flex justify-center items-center text-sky-500'>{title}</h3>
                <p className='text-gray-500 text-sm font-medium leading-5 mt-1'>
                    {
                        description
                    }
                </p>
            </div>
            <div className="flex justify-center pt-8 mb-8 ">
                <button  onClick={handleClick} className="border-sky-500 text-sky-500 border hover:bg-green-500 px-8 py-2 rounded-full font-medium ease-in transition-all delay-[10ms] hover:text-white">
                    Chamar no Whatsapp
                </button>
            </div>
        </div>
    </div>
   
    );
};

export default ContatoCard;


 
      
    
