import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'


const AllCard = ({ Content, icon }) => {

    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);
    const [showTooltip3, setShowTooltip3] = useState(false);
    const [showTooltip4, setShowTooltip4] = useState(false);
    const [showTooltip5, setShowTooltip5] = useState(false);
    const [showTooltip6, setShowTooltip6] = useState(false);

    const toggleTooltip1 = () => {
        setShowTooltip1(!showTooltip1);
    };

    const toggleTooltip2 = () => {
        setShowTooltip2(!showTooltip2);
    };

    const toggleTooltip3 = () => {
        setShowTooltip3(!showTooltip3);
    };

    const toggleTooltip4 = () => {
        setShowTooltip4(!showTooltip4);
    };

    const toggleTooltip5 = () => {
        setShowTooltip5(!showTooltip5);
    };

    const toggleTooltip6 = () => {
        setShowTooltip6(!showTooltip6);
    };

    return (
              
    <div data-aos="zoom-in" className='border w-96 border-gray-800 bg-[#0a1123] hover:bg-[#0d1529] p-5 transition-all delay-[30ms] ease-in-out hover:border-gray-700 hover:scale-[101%]  border-b-sky-700 hover:border-b-sky-500' id="Servico_main_1">
            
        <div className='flex items-center justify-center my-3'>
            <div>
                <img className='rounded-full h-[6.7rem] w-[6.7rem]  border-2 border-[#121212] border-y-sky-500 border-r-sky-500 p-1' id='Team_img' src={Content.image} alt={Content.image}/>
            </div>
        </div>

        <div className='text-white font-bold text-xl flex justify-center items-center'>
            {Content.name}
        </div>

        <div className='flex justify-center items-center'>
            <div className='text-white my-7 mx-2 text-sl'>
                De
            </div>
            <div className='relative'>
                <div className='text-teal-300 font-bold my-0 text-2xl relative z-10'>
                {Content.value3}
                </div>
                <div className='absolute w-full h-0.5 bg-teal-100 top-1/2 transform -translate-y-1/2 -rotate-6' />
            </div>
            <div className='text-white my-3 mx-2 text-sl'>
                por
            </div>
        </div>

        <div className='flex justify-center items-center'>

            <div className='text-white mx-2 text-sl'>
                12x 
            </div>
        
            <div className='text-teal-300 font-bold my-0 text-4xl'>
                {Content.value}
            </div>
        </div>

        <div className='flex justify-center items-center mb-6 text-white text-sm'>
            à vista {Content.value2}
        </div>

        <div className=' text-white text-sm font-bold'>
            {Content.icon1 && (
                <div className='flex text-white text-sm items-center'>
                    {icon}
                    <div className='ml-2'>
                        {Content.icon1}
                    </div>
                
                    <div className='flex text-white text-sm items-center '>
                        <div className="planos-pagamento__legenda-tooltip">
                            <div className="tooltip-circle" >
                                <span onClick={toggleTooltip1}>?</span>
                            </div>
                            <div className={`planos-pagamento__legenda-tooltip${showTooltip1 ? '--ativo' : ''}`}>
        
                                <p className="planos-pagamento__legenda-descricao "> {Content.description1}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {Content.icon2 && (
                <div className='flex text-white text-sm items-center'>
                    {icon}
                    <div className='ml-2'>
                        {Content.icon2}
                    </div>
                    
                    <div className='flex text-white text-sm items-center '>
                        <div className="planos-pagamento__legenda-tooltip">
                        <div className={`planos-pagamento__legenda-tooltip${showTooltip2 ? '--ativo' : ''}`}>
                            <p className="planos-pagamento__legenda-descricao">{Content.description2}</p>
                        </div>
                        <span onClick={toggleTooltip2}>?</span>
                        </div>
                    </div>
                    
                </div>
            )}  
            {Content.icon3 && (
                <div className='flex text-white text-sm items-center'>
                    {icon}
                    <div className='ml-2'>
                        {Content.icon3}
                    </div>
                    <div className='flex text-white text-sm items-center '>
                        <div className="planos-pagamento__legenda-tooltip">
                        <div className={`planos-pagamento__legenda-tooltip${showTooltip3 ? '--ativo' : ''}`}>
                            <p className="planos-pagamento__legenda-descricao">{Content.description3}</p>
                        </div>
                        <span onClick={toggleTooltip3}>?</span>
                        </div>
                    </div>
                </div>
            )}
            {Content.icon4 && (
                <div className='flex text-white text-sm items-center'>
                    {icon}
                    <div className='ml-2'>
                        {Content.icon4}
                    </div>
                    <div className='flex text-white text-sm items-center '>
                        <div className="planos-pagamento__legenda-tooltip">
                        <div className={`planos-pagamento__legenda-tooltip${showTooltip4 ? '--ativo' : ''}`}>
                            <p className="planos-pagamento__legenda-descricao">{Content.description4}</p>
                        </div>
                        <span onClick={toggleTooltip4}>?</span>
                        </div>
                    </div>
                </div>
            )}
            {Content.icon5 && (
                <div className='flex text-white text-sm items-center'>
                    {icon}
                    <div className='ml-2'>
                        {Content.icon5}
                    </div>
                    <div className='flex text-white text-sm items-center '>
                        <div className="planos-pagamento__legenda-tooltip">
                        <div className={`planos-pagamento__legenda-tooltip${showTooltip5 ? '--ativo' : ''}`}>
                            <p className="planos-pagamento__legenda-descricao">{Content.description5}</p>
                        </div>
                        <span onClick={toggleTooltip5}>?</span>
                        </div>
                    </div>
                </div>
            )}
            {Content.icon6 && (
                <div className='flex text-white text-sm items-center'>
                    {icon}
                    <div className='ml-2'>
                        {Content.icon6}
                    </div>
                    <div className='flex text-white text-sm items-center '>
                        <div className="planos-pagamento__legenda-tooltip">
                        <div className={`planos-pagamento__legenda-tooltip${showTooltip6 ? '--ativo' : ''}`}>
                            <div className="w-4 h-4 bg-[#050811f0] top-0 left-1/2 transform -translate-x-2 rotate-45"></div>
                            <p className="planos-pagamento__legenda-descricao">{Content.description6}</p>
                        </div>
                        <span onClick={toggleTooltip6}>?</span>
                        </div>
                    </div>
                </div>
            )}
        </div>

        <Link to="/contato">
            <div className='py-3 mx-3 mt-4 flex justify-center items-center'>
                <button href={`mailto:${Content.value}`} className='font-bold bg-emerald-500  border-emerald-500 houver:text-black text-black border hover:bg-teal-100 px-8 py-2 font-medium ease-in transition-all delay-[10ms] '>
                    <p className='m-2' >
                        Entrar em contato
                    </p> 
                </button>
            </div>
        </Link>

    </div>
    )
}

export default AllCard