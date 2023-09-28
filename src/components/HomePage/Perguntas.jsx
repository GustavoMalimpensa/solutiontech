import React, { useState } from 'react'
import Heading1 from '../Headings/Heading1'

const Perguntas = () => {

    const Perguntass = [
        {
            question: "Por que eu deveria escolher a Solucions Tech? Quais são os benefícios?",
            answer:"A Solucions Tech é a escolha ideal para microempreendedores que buscam orientação e suporte especializado desde o início de seus negócios. Nossos serviços oferecem uma série de benefícios significativos.",
            id: "0"
        },
        {
            question: "Como entrar em contato e solicitar uma visita?",
            answer:"Você pode entrar em contato conosco por meio das nossas redes sociais. Além disso, em breve entraremos em contato com todos os microempreendedores que precisam de ajuda por meio de nossa ferramenta de análise robusta. Basta aceitar a inovação e aguardar o nosso contato.",
            id: "1"
        },
        {
            question: "Você gostaria de enviar uma mensagem, mas não sabe por onde começar?",
            answer:"Nós estamos aqui para te ajudar! Auxiliamos o seu negócio desde a ideia inicial. Venha fazer parte da mudança e tenha um espaço seguro para compartilhar o seu ponto de vista. Acompanhamos o crescimento do seu negócio até alcançar os resultados esperados.",
            id: "2"
        }
    ]


    return (
        <div className='pt-28'>
            <Heading1 details={"Você está enfrentando desafios complexos e precisa tomar decisões importantes para o seu negócio? Não se preocupe, estamos aqui para ajudar!"} text1={"Perguntas"} text2={"Frequentes"} />

            <div className='flex flex-col items-center justify-center gap-4 my-16'>
                {
                    Perguntass.map((Perguntas) => <PerguntasCard key={Perguntas.id} data={Perguntas} />)
                }
            </div>
        </div>
    )
}

const PerguntasCard = ({ data }) => {
    const [show, setShow] = useState(false);
    return (
        <div data-aos="fade-up" className='flex lg:w-[80%] md:w-[80%] w-[95%] transition-all delay-[15ms] ease-in-out  bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border lg:p-5 md:p-5 p-3 rounded-2xl gap-0 flex-col'>
            <div onClick={()=>setShow((show)=>!show)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='font-semibold lg:text-lg md:text-lg text-base pr-5'>
                    {data.question}
                </h3>
                <button className={`transition-all delay-75 ease-in-out ${show && '-rotate-180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${show ? 'h-fit mt-4 my-2':'h-0'}`}>
                <p className='text-gray-400 text-sm w-[95%]'>
                    {
                        data.answer
                    }
                </p>
            </div>
        </div>
    )
}

export default Perguntas