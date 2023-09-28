import React from 'react'

const Heading1 = ({ text1, text2, details }) => {
    return (
        <div data-aos="fade-right">
            <h1 className='font-bold text-white text-center lg:text-3xl md:text-3xl text-3xl  mb-0'>
            {text1}
            <span className='text-sky-500'> {text2}</span>
            </h1>
            <p className='text-white text-center mt-4'>
            {details}
            </p>
            
        </div>
    )
}

export default Heading1