import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import backgroundImg11 from '../../assets/images/logo.mini.png'; 

const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <div className="bg-[#5858583c] text-sm w-[100%] pt-8 ">

      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1'>

          <Link to="/">
            <img src={backgroundImg11} alt="logo" className='h-16 mb-2 w-auto' />
          </Link>

          <p className='max-w-[15rem] py-3 text-base'>Tech Solucion é uma empresa com serviços voltados para o desenvolvimento empresarial de pequenas empresas e microempreendedores</p>
          <div className='flex gap-3 py-2 '>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gustavo_malimpensa/" >
              <FaInstagram className='transition ease-in delay-50 text-pink-500 visited:text-pink-500 hover:text-pink-600 hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavo-malimpensa/" >
              <FaLinkedinIn className='transition ease-in delay-50 text-blue-500 visited:text-blue-500 hover:text-blue-600 hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/T_E_S_L_Aclub" >
              <FaTwitter className='transition ease-in delay-50 text-sky-500 visited:text-sky-500 hover:text-sky-600 hover:scale-[110%]' size={30} />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Links Úteis</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/news"><p className='text-gray-400 hover:text-sky-500'>Serviços</p></Link></li>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/events"><p className='text-gray-400 hover:text-sky-500'>Pacotes</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/team"><p className='text-gray-400 hover:text-sky-500'>Parceiros</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/gallery"><p className='text-gray-400 hover:text-sky-500'>Clientes</p></Link></li>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/admin"><p className='text-gray-400 hover:text-sky-500'>Tecnologias</p></Link></li>
          </ul>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Deve verificar</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/">
              <p className='text-gray-400 hover:text-sky-500'>Serviços Web</p></Link></li>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/"><p className='text-gray-400 hover:text-sky-500'>Serviço Profissional</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/"><p className='text-gray-400 hover:text-sky-500'>Consultoria Free</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/"><p className='text-gray-400 hover:text-sky-500'>Desenvolvimento do Négocio</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/"><p className='text-gray-400 hover:text-sky-500'>Oportunidades de Crescimento</p></Link></li>
          </ul>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Contatos</h1></div>
          <p className='max-w-[16rem] pt-4 text'>Rio Claro / SP - Brasil</p>
          <p className='pt-2'>Telefone : <a style={{ textDecoration: "none" }} href="tel:(19)99937-2133" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>(19) 99937-2133</span></a></p>
          <p className='pt-2'>E-mail : <a style={{ textDecoration: "none" }} href="mailto:ontato@solutiontech.dev" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>contato@solutiontech.dev</span></a></p>
        </div>

      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>
          © {year} Tech Solucions.
        </p>
        <p>
          Direitos reservados para <a style={{ textDecoration: "none" }} className="font-medium text-blue-500" href="#">
            <span className='text-sky-500'>Solution Tech</span>
          </a>.
        </p>
      </div>
    </div>
  )
}

export default Footer
