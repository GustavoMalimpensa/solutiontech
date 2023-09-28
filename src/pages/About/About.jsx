import './About.scss'
import Heading from '../../components/Headings/Heading'

const About = () => {

  document.title = 'Solucion Tech | Sobre a empresa';

  return (
    <div className='pt-16 min-h-screen'>
      <Heading heading="Sobre a Empresa"></Heading>
      <div className="paragraph-body">
        <p data-aos="fade-up" >
         <strong>Nossa Missão: </strong>
         Nossa missão é transformar a vida das pessoas por meio da inovação tecnológica, fornecendo soluções inteligentes e intuitivas que melhoram a forma como elas vivem, trabalham e se conectam
        </p>
        <p data-aos="fade-up" >
         <strong>Nossa Visão: </strong>
         É ser reconhecidos como líderes no desenvolvimento de tecnologias revolucionárias, impulsionando o progresso e facilitando a vida das pessoas em todo o mundo.
        </p> 
        <p data-aos="fade-up" >
         <strong>Nossos Valores: </strong>
        Inovação constante, qualidade excepcional, ética e colaboração, impulsionando a sustentabilidade para alcançar a excelência.
        </p>      
        <p data-aos="fade-up" >
         Agimos com integridade e ética em todas as nossas relações comerciais, mantendo a transparência e a responsabilidade em cada decisão e ação que tomamos. Valorizamos a colaboração e o trabalho em equipe, reconhecendo que a diversidade de perspectivas e habilidades leva a melhores resultados.
         Além disso, levamos a sustentabilidade a sério. Consideramos os impactos ambientais e sociais em todas as nossas operações, buscando soluções sustentáveis e responsáveis para construir um futuro melhor. Buscamos a excelência em tudo o que fazemos, desde a concepção e desenvolvimento de produtos até o atendimento ao cliente, com o objetivo de alcançar o mais alto padrão de qualidade.
        </p>
      </div>
    </div>
  )
}

export default About
