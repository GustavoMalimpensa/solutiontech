import React from 'react'
import Heading1 from '../Headings/Heading1'
import { Link } from 'react-router-dom'
import backgroundImg12 from '../../assets/images/terra.png' 
import backgroundImg13 from '../../assets/images/lista.png'
import backgroundImg14 from '../../assets/images/datascience.png'
import backgroundImg15 from '../../assets/images/e-mail.png'
import backgroundImg16 from '../../assets/images/lupa.png'
import backgroundImg17 from '../../assets/images/maleta.png'



const Servicos = () => {

    const Servicoss = [
        {
            name: "Criação de Sites",
            icon: backgroundImg12,
            
        },
        {
            name: "Cátalogo de Produtos",
            icon: backgroundImg13,
        },
        {
            name: "Data Science",
            icon: backgroundImg14,
        },
        {
            name: "E-mail Corporativo",
            icon: backgroundImg15,
        },
        {
            name: "Otimização SEO",
            icon: backgroundImg16,
        },
        {
            name: "Consultoria em T.I",
            icon: backgroundImg17,
        }
    ]
    return (
        <div className='pt-10'>
            <Heading1 details={"Descubra como alavancar seu negócio com facilidade! Você já imaginou ter todas as ferramentas necessárias para vender seus produtos e expandir seu alcance ?"} text1={"Serviços para o seu"} text2={"negocio"} />
            <div className='flex items-center lg:flex-row md:flex-row flex-col justify-center lg:gap-x-16 md:gap-x-8 w-full mt-0'>
                <div className='flex flex-col items-center justify-center gap-5 mt-5'>
                    {Servicoss.slice(0, 3).map((Servicos, idx) => <div data-aos="zoom-in" key={idx} className='flex lg:w-96 md:w-80 w-72 items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                        <div className='bg-gray-900 p-1.5 rounded'>
                            <img src={Servicos.icon} alt="blockchain" className='h-8 w-8' />
                        </div>
                        <div>
                            <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{Servicos.name} </p>
                        </div>
                    </div>)}
                </div>

                <div className='flex flex-col items-center justify-center gap-5 mt-5'>
                    {Servicoss.slice(3, 8).map((Servicos, idx) => <div data-aos="zoom-in" key={idx} className='flex lg:w-96 md:w-80 w-72 items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                        <div className='bg-gray-900 p-1.5 rounded'>
                            <img src={Servicos.icon} alt="blockchain" className='h-8 w-8' />
                        </div>
                        <div>
                            <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{Servicos.name} </p>
                        </div>
                    </div>)}
                </div>
            </div>

            <div data-aos="zoom-in" className='flex items-center justify-center mt-5'>
            <Link to='/Serviços'>
                <button className='border-sky-500 text-sky-500 border hover:bg-sky-500 px-8 py-2 rounded-full font-medium ease-in transition-all delay-[10ms] hover:text-white'>
                    Conheça todos os nossos Serviços
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Servicos