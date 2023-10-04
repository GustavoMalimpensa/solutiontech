import React from 'react'
import { Link } from 'react-router-dom'

const SitesCard = ({ site, icon }) => {
    return (
        
        <div data-aos="zoom-in" className='border border-gray-800 bg-[#0a1123] hover:bg-[#0d1529] p-5 transition-all delay-[30ms] ease-in-out hover:border-gray-700 hover:scale-[101%]  border-b-sky-700 hover:border-b-sky-500' id="Servico_main_1">
            <div className='flex items-center justify-center my-3'>
                <div>
                    <img className='rounded-full h-[6.7rem] w-[6.7rem]  border-2 border-[#121212] border-y-sky-500 border-r-sky-500 p-1' id='Team_img' src={site.image} alt={site.image}/>
                </div>
            </div>
        <div className='text-white font-bold text-xl flex justify-center items-center'>
            {site.name}
        </div>

        <div className='flex justify-center items-center'>
            <div className='text-white my-7 mx-2 text-sl'>
                De
            </div>
            <div className='relative'>
                <div className='text-teal-300 font-bold my-0 text-2xl relative z-10'>
                {site.value3}
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
                {site.value}
            </div>
        </div>

        <div className='flex justify-center items-center mb-6 text-white text-sm'>
            à vista {site.value2}
        </div>
    
        <div className=' text-white text-sm font-bold'>
    {site.icon1 && (
        <div className='flex text-white text-sm items-center'>
            {icon}
            <div className='ml-2'>
                {site.icon1}
            </div>
        </div>
    )}
    {site.icon2 && (
        <div className='flex text-white text-sm items-center'>
            {icon}
            <div className='ml-2'>
                {site.icon2}
            </div>
        </div>
    )}
    {site.icon3 && (
        <div className='flex text-white text-sm items-center'>
            {icon}
            <div className='ml-2'>
                {site.icon3}
            </div>
        </div>
    )}
    {site.icon4 && (
        <div className='flex text-white text-sm items-center'>
            {icon}
            <div className='ml-2'>
                {site.icon4}
            </div>
        </div>
    )}
    {site.icon5 && (
        <div className='flex text-white text-sm items-center'>
            {icon}
            <div className='ml-2'>
                {site.icon5}
            </div>
        </div>
    )}
    {site.icon6 && (
        <div className='flex text-white text-sm items-center'>
            {icon}
            <div className='ml-2'>
                {site.icon6}
            </div>
        </div>
    )}
</div>


        <Link to="/contato">
            <div className='py-3 flex justify-center items-center'>
                <button href={`mailto:${site.value}`} className='font-bold bg-emerald-500  border-emerald-500 houver:text-black text-black border hover:bg-teal-100 px-8 py-2 font-medium ease-in transition-all delay-[10ms] '>
                   Entrar em contato
                </button>
            </div>
        </Link>

    </div>
    )
}

export default SitesCard