import React from 'react'
import { Link } from 'react-router-dom'

const SitesCard = ({ site, icon }) => {
    return (
        
        <div data-aos="zoom-in" className='border border-gray-800 bg-[#0f0e0e] hover:bg-[#131212] p-5 rounded-2xl transition-all delay-[30ms] ease-in-out hover:border-gray-700 hover:scale-[101%]  border-b-sky-700 hover:border-b-sky-500' id="site_main_1">
            <div className='flex items-center justify-center my-3'>
                <div>
                    <img className='rounded-full h-[6.7rem] w-[6.7rem]  border-2 border-[#121212] border-y-sky-500 border-r-sky-500 p-1' id='Team_img' src={site.image} alt={site.image}/>
                </div>
            </div>
        <div className='text-xl'>
            {site.name}
        </div>

        <div className='text-gray-400 my-3 text-sm text-left'>
            {site.about}
        </div>
    
        <div  className=' text-gray-400 text-sm'>
            <div className='flex text-gray-400 text-sm items-center'>
                {icon}
                <div className='ml-2'>
                    {site.icon1}
                </div>
            </div>
            <div className='flex text-gray-400 text-sm items-center'>
                {icon}
                <div className='ml-2'>
                    {site.icon2}
                </div>
            </div>
            <div className='flex text-gray-400 text-sm items-center'>
                {icon}
                <div className='ml-2'>
                    {site.icon3}
                </div>
            </div> 
            <div className='flex text-gray-400 text-sm items-center'>
                {icon}
                <div className='ml-2'>
                    {site.icon4}
                </div>
            </div>
            <div className='flex text-gray-400 text-sm items-center'>
                {icon}
                <div className='ml-2'>
                    {site.icon5}
                </div>
            </div>
            <div className='flex text-gray-400 text-sm items-center'>
                {icon}
                <div className='ml-2'>
                    {site.icon6}
                </div>
            </div>
        </div>

        <Link to="/contato">
            <div className='py-3'>
                <button href={`mailto:${site.value}`} className='border-sky-500 text-sky-500 border hover:bg-sky-500 px-8 py-2 rounded-full font-medium ease-in transition-all delay-[10ms] hover:text-white'>
                   Entre em Contato
                </button>
            </div>
        </Link>

    </div>
    )
}

export default SitesCard