import React from 'react'
import './ServicoStyle.scss'
import Heading from '../../components/Headings/Heading'
import ServicoCard from './ServicoCard'
import { BsCheck } from 'react-icons/bs'
import backgroundImg12 from '../../assets/images/terra.png' 
import backgroundImg13 from '../../assets/images/lista.png'
import backgroundImg14 from '../../assets/images/datascience.png'
import backgroundImg15 from '../../assets/images/e-mail.png'
import backgroundImg16 from '../../assets/images/lupa.png'
import backgroundImg17 from '../../assets/images/maleta.png'



const Servico = () => {
  document.title = 'Solucions Tech | Serviços';

  const servicos = [
    {
      name: 'Criação de Sites',
      image: backgroundImg12,
      about: "Criamos sites com design responsivo, segurança e desempenho. Tire suas idéias do papel, ajudamos você a divulgar seu negócio para a região e para o mundo.", 
      value: "Saiba mais ...",
      icon1: "Domínio",
      icon2: "Hospedagem",
      icon3: "Design Personalizado",
      icon4: "Responsivo",
      icon5: "Certificado SSL",
      id: "0"
    },
    {
      name: 'Cátalogo de Produtos',
      image: backgroundImg13,
      about: "Uma plataforma digital que organiza, apresenta e facilita a compra de produtos de uma empresa, melhorando a visibilidade e acessibilidade dos produtos aos clientes.", 
      value: "Saiba mais ...",
      icon1: "Apresentação Visual",
      icon2: "Facilidade de Pesquisa",
      icon3: "Preços e Disponibilidade",
      icon4: "Organização",
      icon5: "Otimização",
      id: "1"
    },
    {
      name: 'Data Science',
      image: backgroundImg14,
      about: "Um campo que utiliza técnicas e algoritmos para coletar, analisar e interpretar grandes volumes de dados, fornecendo insights valiosos e tomadas de decisões.", 
      value: "Saiba mais ...",
      icon1: "Favorece o marketing",
      icon2: "Previsão de demandas",
      icon3: "Aperfeiçoar tomadas de decisões",
      icon4: "Melhorar o desempenho",
      icon5: "Mantenha mais clientes",
      id: "2"
    },
    {
      name: 'E-mail Corporativo',
      image: backgroundImg15,
      about: "Tenha um email próprio para o seu negócio, transmita confiança para os seus clientes enviando emails com a sua marca email@suaempresa.com.br.", 
      value: "Saiba mais ...",
      icon1: "Domínio",
      icon2: "Hospedagem",
      icon3: "Configuração",
      icon4: "Backup",
      icon5: "E-Mail Profissional",
      id: "3"
    },
    {
      name: 'Otimização SEO',
      image: backgroundImg16,
      about: "Ajudamos você a apareçer nas primeiras posições do Google ® através do serviço de otimização de pesquisa (SEO), saia na frente da concorrência.", 
      value: "Saiba mais ...",
      icon1: "Consultoria",
      icon2: "Programação SEO-Friendly",
      icon3: "Google Analytics ®",
      icon4: "Google Search Console ®",
      icon5: "Apareça Primeiro na Pesquisa",
      id: "5"
    },
    {
      name: 'Consultoria em T.I',
      image: backgroundImg17,
      about: "Estamos aqui para ajudá-lo a lidar com o mundo da tecnologia que as vezes parece muito complicado. Vamos descomplicar, deixe com a gente!", 
      value: "Saiba mais ...",
      icon1: "Para Empresas",
      icon2: "Governança de TI",
      icon3: "Gestão de TI",
      icon4: "Consultoria de Sistemas",
      icon5: "Para Pequenas Empresas",
      id: "6"
    }
    
  ]

  return (
    <div className='pt-16'>
      <Heading  className='flex justify-center items-center' heading="O que podemos fazer por você?" description="Somos uma agência digital especializada em desenvolver soluções tecnológicas inteligentes, temos como objetivo usar nossos serviços para ajudar empresas a crescerem e atingirem seus objetivos. Venha ser nosso parceiro!"></Heading>
      <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='Servico_main'>
        {servicos.map((servico, id ) => (
          <ServicoCard icon={<BsCheck className='text-sky-500' size={30} />} servico={servico} key={id}/>
        ))}
      </div>
    </div>
  )
}

export default Servico