import React,  { useState, useEffect } from 'react'

const IconWithDescription = ({ icon, description }) => {

    const [showDescription, setShowDescription] = useState(false);
  
    const toggleDescription = () => {
      setShowDescription(!showDescription);
    };

    // Função para fechar a caixa de descrição quando clicar fora dela
    const closeDescription = (e) => {
        if (
        showDescription &&
        !document.querySelector('.description-box').contains(e.target)
        ) {
        setShowDescription(false);
        }
    };

    // Adiciona um ouvinte de clique ao elemento body quando a caixa de descrição está aberta
    useEffect(() => {
        if (showDescription) {
        document.body.addEventListener('click', closeDescription);
        }
        // Remove o ouvinte de clique quando a caixa de descrição é fechada
        return () => {
        document.body.removeEventListener('click', closeDescription);
        };
    }, [showDescription]);
  
    return (
      <div className='flex text-white text-sm items-center'>
        <div onClick={toggleDescription}>
          <span role="img" aria-label="Ícone de interrogação">❓</span>
        </div>
        <div className='ml-2'>
          {icon}
        </div>
        {showDescription && (
          <div className='absolute mt-28 ml z-50 bg-[#050811f0] text-white p-2 rounded-lg shadow-md'>
              <div className="w-4 h-4 bg-[#050811f0] absolute top-0 left-1/2 transform -translate-x-2 rotate-45"></div>
            <div className='m-2 text-left'>
                {description}
            </div>
          </div>
        )}
      </div>
    );
}

export default IconWithDescription