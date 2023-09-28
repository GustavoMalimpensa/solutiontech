import Heading from "../../components/Headings/Heading";
import backgroundImg15 from '../../assets/images/google.jpg'; 
import backgroundImg16 from '../../assets/images/amazon.jpg';  
import backgroundImg17 from '../../assets/images/microsoft.png'; 

const BigTech = () => {
  document.title = "Solucion Tech | Big Techs";

  return (
    <div className="pt-16 min-h-screen" >
      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[20]   sm:flex-row  " >
        <div className="basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <Heading heading="O que são as big techs?"></Heading>
          <div class="w-48 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
            <span></span>
            <span></span>
            Big Techs são as grandes empresas de tecnologia que dominam o mercado. Majoritariamente localizadas no Vale do Silício,
            elas começaram como pequenas startups, criando serviços inovadores, disruptivos e escaláveis. 
            Na prática, elas passaram a moldar a forma de trabalho e comunicação das pessoas, caso da Salesforce,
            bem como os comportamentos dos consumidores. Nós sentimos a presença dessas gigantes de tecnologia diariamente.
            Nas redes sociais, nos aplicativos de motoristas, no streaming de vídeo. Basicamente, tudo que envolve inovação vem das big techs. 
          </p>
        </div>
        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
        <Heading heading="Qual seu papel na sociedade atuals?"></Heading>
        <div class="w-48 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
            <span></span>
            <span></span>
            Em um primeiro momento, podemos ver nitidamente o papel das big techs na sociedade atual: facilitar nossa vida.
            A rotina que descrevemos na introdução é tão comum que sequer percebemos que dependemos diretamente delas. 
            A troca de mensagens pelas redes sociais facilita a comunicação entre pessoas, seja no âmbito pessoal ou profissional. 
            Os serviços inteligentes de casa, como os dispositivos de comando por voz, trazem maior praticidade. Elas também se conectam diretamente 
            ao nosso lazer, como Netflix, Amazon Prime, Apple Music e outros serviços.
          </p>
        </div> 
      </div>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[20]   sm:flex-row  " >
        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className=" text-4xl px-2 back animate-bounce  ">Google</h2>
          <div class="w-48 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
            <span></span>
            <span></span>
            O Google oferece ferramentas essenciais para empresas fortalecerem sua presença online.
            O Google My Business permite criar uma página empresarial com informações detalhadas,
            aumentando a visibilidade. O Google Ads direciona anúncios online para um público 
            específico, aumentando a visibilidade nos resultados de pesquisa. O Google Analytics 
            analisa o desempenho do site, fornecendo insights valiosos sobre tráfego e comportamento 
            dos usuários. Em resumo, essas ferramentas ajudam a criar uma presença online eficaz, 
            direcionar tráfego qualificado e analisar o desempenho, impulsionando o sucesso em um
            ambiente competitivo.
          </p>
        </div>
        <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5 " d>
          <img
            src={backgroundImg15}
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>
      </div>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80]   sm:flex-row   ">
      <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mb-0 md:mb-0 mb-10  ">
          <img
            src={backgroundImg16}
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>

        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className=" text-4xl px-2 back animate-bounce  ">Amazon</h2>
          <div class="w-24 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
          A Amazon oferece diversas ferramentas e serviços para impulsionar as empresas. 
          O Amazon Marketplace permite aos vendedores listar e vender produtos diretamente na
          plataforma, alcançando uma grande base de clientes. O Fulfillment by Amazon (FBA) 
          cuida da logística, incluindo embalagem e entrega, liberando os vendedores para focar
          em outras áreas. O Amazon Advertising é uma poderosa ferramenta de promoção, 
          exibindo anúncios em locais estratégicos para aumentar a visibilidade e as chances
          de venda. Em resumo, essas ferramentas facilitam a venda, ampliam o alcance, 
          simplificam a logística e melhoram o retorno sobre o investimento em publicidade.
           </p>
        </div>
      </div>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80]   sm:flex-row  ">
        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className=" text-4xl px-2 back animate-bounce  ">Microsoft</h2>
          <div class="w-40 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >        
            A Microsoft oferece ferramentas e serviços abrangentes para empresas,
            focados na produtividade, gestão de dados e processos empresariais.
            O Microsoft Office 365 inclui programas essenciais como Word, Excel
            e PowerPoint, permitindo a criação de documentos profissionais e
            colaboração em equipe. O Microsoft Azure é uma plataforma de computação   
            em nuvem escalável, oferecendo hospedagem de aplicativos e armazenamento
            de dados, além de recursos avançados de segurança. 
            O Microsoft Dynamics 365 é uma suíte de aplicativos de negócios integrados 
            para automação de processos e gerenciamento de relacionamento com clientes.
            Essas soluções impulsionam a produtividade, melhoram a eficiência operacional 
            e promovem o crescimento das empresas em um ambiente digital e competitivo.
          </p>
        </div>
        <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5  ">
          <img
            src={backgroundImg17}
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>
      </div>

    </div>
  );
};

export default BigTech;
