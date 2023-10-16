import React from 'react';
import { Link } from 'react-router-dom';

const NavbarSecundaria = ({}) => {

    return (
        <div className="fixed w-full">
        <div className={`w-[100%] fixed items-center justify-center ${colorChange && " bg-black transition-all delay-100 ease-in-out bg-opacity-20 backdrop-blur-md border-gray-800 shadow-lg"}`}>
            <div className="flex items-center justify-between lg:w-[80rem] md:w-[100%] px-4 md:px-3 py-5 m-auto text-lg">
                <div className="flex items-center">
                    <ul className="md:flex gap-8 hidden items-center text-lg font-extrabold">
                        <li>
                            <Link
                            to="/"
                            className={`hover:underline underline-offset-4 ${activeLink === "secao1" ? "decoration-blue-500" : "decoration-sky-500"}`}
                            onClick={() => scrollTo("/")}
                            >
                            Página Inicial
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/#secao2"
                            className={`hover:underline underline-offset-4 ${activeLink === "secao2" ? "decoration-blue-500" : "decoration-sky-500"}`}
                            onClick={() => scrollTo("/#secao2")}
                            >
                            Sobre
                            </Link>
                        </li>
                        
                        <li>
                            <Link
                            to="/#secao3"
                            className={`hover:underline underline-offset-4 ${activeLink === "secao3" ? "decoration-blue-500" : "decoration-sky-500"}`}
                            onClick={() => scrollTo("/#secao3")}
                            >
                            Serviços
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="secao5"      
                            className={`hover:underline underline-offset-4 ${activeLink === "secao3" ? "decoration-blue-500" : "decoration-sky-500"}`}          
                            onClick={() => scrollTo("secao5")}                            
                            >
                            Contato
                             
                            </Link>
                        </li>  
                    </ul> 
                </div>
            </div>
        </div>
        </div>
    
    )
}

export default NavbarSecundaria