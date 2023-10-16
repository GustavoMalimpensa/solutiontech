import CountUp from 'react-countup';
import React from 'react';
import { Link } from 'react-scroll';

const Vantagens = ({title,description,image}) => {
    return (
        <div data-aos="zoom-in" className='w-fit'>
            <div className='border-[1px]  border-gray-800 hover:border-gray-700  w-[21rem] p-5 hover:scale-[102%] z-0 hover:z-10 bg-[#0a1123] transition-all delay-[30ms] ease-in-out'>
                <div className='h-[10rem] rounded flex items-center justify-center overflow-hidden bg-[#0a1123] mb-5'>
                    <img loading='lazy' className='w-auto h-[13rem] bg-cover bg-center' src={image} alt="about" />
                </div>
                <div className="text-center">
                    <h3 className='text-base font-semibold'>{title}</h3>
                    <p className='text-gray-500 text-sm font-medium leading-5 mt-1'>
                        {
                            description
                        }
                    </p>
                </div>
            </div>
      </div>
    )
}

const Card2 = ({ link, image, title }) => {
    return (
        <div data-aos="zoom-in" className=' w-[21rem] bg-[#0a1123] p-5 hover:scale-[102%] z-0  transition-all delay-[30ms] ease-in-out'>
            <a href={link} target='_blank' className='h-[10rem] flex items-center justify-center overflow-hidden bg-[#0a1123] mb-5 '>
                <img loading='lazy' className='w-auto h-[13rem] bg-cover bg-center ' src={image} alt={title} />
            </a>
            <div className='text-center -mt-1'>
                <h3 className='text-lg font-semibold'>{title}</h3>
            </div>
        </div>
    )
}

const EventCard = ({ data }) => {
    return (
        <div data-aos="zoom-in" className='w-[20rem] p-4 border-2 hover:border-gray-800 hover:scale-[102%] transition-all delay-75 ease-in border-gray-900  mt-5'>
            <div className='flex relative items-center h-44 overflow-hidden w-full rounded-lg border border-gray-900'>
                <img className='w-full z-0' src={data.image} alt={data.name} />
                <p className='py-1 absolute bottom-2 right-1 z-[5] px-3  mt-2 text-sky-500 text-xs  bg-gray-900 w-fit bg-opacity-90'>{data.tag}</p>
            </div>
            <h3 className='text-xl font-semibold pl-2 mt-2'>{data.name}</h3>
            <p className='text-gray-500 text-sm pt-1 pl-2'>{data.description.length > 100 ? data.description.substring(0, 90) + "..." : data.description}</p>
            <div className='bg-gray-800 rounded-lg p-2 flex justify-between mt-2 flex-col'>
                <div className='flex justify-between text-xs'>
                    <div>
                        <p className='text-gray-400'>Date</p>
                        <p className='text-sm'>{data.date}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400'>Venue</p>
                        <p className='text-sm'>{data.venue}</p>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-400 text-xs'>Time</p>
                        <p className='text-sm'>{data.time}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400 text-xs'>Reg. Link</p>
                        <a style={{ textDecoration: "none" }} target='_blank' href={data.link} className='text-sm visited:text-sky-500 text-blue-500'>Click</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const EstasticasCard = ({ type, data, icon }) => {
    return (
        <div data-aos="fade-up" className='rounded-2xl w-[16rem] p-5 hover:scale-[102%] z-0 hover:z-[5]  transition-all delay-[30ms] ease-in-out border border-gray-900 bg-[#0c0c0c]'>
            <div>
                {icon}
            </div>
            <h3 className='text-3xl font-semibold mt-3'>
                <CountUp end={data} enableScrollSpy={true} />+
            </h3> 
            <p className='text-gray-500 font-medium'>{type}</p>
        </div>
    )
}

const HeaderServices = ({ title, description, image, local, local2 }) => {
    return (

    <div c>

        <div className=" lg:max-w-[95%] w-[95%] bg-[#0a1123] mx-auto flex flex-col md:py-[20] sm:flex-row ">

            <div className="basis-[50%] sm:px-5 overflow-hidden ">
                {/* Oculta a imagem em telas pequenas */}
                <div className="hidden sm:block">
                    <a target='_blank' className='flex items-center justify-center md:mt-5 mt-5'>
                    <img loading='lazy' className='w-auto lg:h-[25rem] h-[15rem] bg-cover bg-center ' src={image} alt={title} />
                    </a>
                </div>
            </div>

            <div className="sm:hidden absolute inset-0 z-0">
                <a target='_blank' className='flex items-center justify-center h-screen overflow-hidden'>
                    <img loading='lazy' className='w-auto h-full object-cover blur-sm brightness-50' src={image} alt={title} />
                </a>
            </div>


            <div  data-aos="fade-right" className="m-2 basis-[50%] px-2 ">
            
                <div class="flex items-left justify-left mt-4 ">
                    <h2  className='w-3/4 text-left font-extrabold text-transparent lg:text-sm md:text-sm text-sm bg-clip-text bg-gradient-to-r text-white '>{local}</h2>
                </div>

                <div class="flex items-left justify-left mb-7">
                    <h2  className='w-3/4 text-left font-extrabold text-transparent lg:text-sm md:text-sm text-sm bg-clip-text bg-gradient-to-r from-sky-500 to-sky-500 '>{local2}</h2>
                </div>
            
                <div className="pr-4 flex justify-left items-left text-left" >
                    <h1  className='font-extrabold lg:text-5xl md:text-3xl text-3xl text-sky-500 '>{title}</h1>
                </div>

                <div class="w-48 mt-3 h-1 bg-pink-500 "></div>
            
                <div class="flex items-left justify-left mt-5 ">
                    <h2 data-aos="fade-right" className='lg:w-4/5 w-full text-left font-extrabold text-transparent lg:text-base md:text-base text-base bg-clip-text bg-gradient-to-r text-white '>{description}</h2>
                </div>
                
                <div className="hover:scale-95 duration-1000 ">
                    <Link to="/contato">
                        <div className='py-3 mt-6 pb-6 flex justify-left items-left '>
                            <button className='font-bold bg-emerald-500  border-emerald-500 houver:text-black text-black border hover:bg-teal-100 px-8 py-2 font-medium ease-in transition-all delay-[10ms] '>
                                <p className='m-2' >
                                    Adquira agora 
                                </p> 
                            </button>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    </div>
    
    )
}






export { Vantagens, Card2, EventCard, EstasticasCard, HeaderServices };