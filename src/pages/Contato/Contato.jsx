import React from "react";
import ContatoCard from "./ContatoCard";
import backgroundImg10 from '../../assets/images/fundo3.jpg'; 

const Contatos = () => {
  document.title = 'Solucion Tech | Contato';

  const ContatoData = [
    {
      id: "0",
      title: "A mudança está a um click ",
      description: "Entre em contato através das nossas redes sociais ou envie uma mensagem para tirar suas dúvidas.",
    },
  ];

  return (
    <div className="pt-16 relative " >
      <img data-aos="fade-up" className="absolute inset-0 w-full h-full object-cover" src={backgroundImg10} alt="Imagem de fundo"/>
      <div className='my-10 flex flex-wrap gap-10 items-center justify-center '>
        {ContatoData.map((data) => (
          <ContatoCard key={data.id} title={data.title} description={data.description} />
        ))}
      </div>
    </div>
  );
};

export default Contatos;
