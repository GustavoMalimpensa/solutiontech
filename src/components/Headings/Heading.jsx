import React from 'react'

const Heading = ({ heading, description }) => {
    return (
    <div>
        <h1 data-aos="fade-right" className='flex justify-center items-center text-center font-extrabold text-transparent lg:text-1xl md:text-4xl text-4xl bg-clip-text bg-gradient-to-r from-sky-500 to-sky-500 m-10 '>{heading}</h1>
        <div  class="flex items-center justify-center">
            <h2 data-aos="fade-right" className='w-3/4 text-center font-extrabold text-transparent lg:text-base md:text-base text-base bg-clip-text bg-gradient-to-r text-white  '>{description}</h2>
        </div>
    </div>
    )
}

export default Heading

