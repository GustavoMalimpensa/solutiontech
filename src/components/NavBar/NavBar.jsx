import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 0) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const scrollTo = (to) => {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className={`w-[100%] fixed items-center justify-center ${colorChange && " bg-black transition-all delay-100 ease-in-out bg-opacity-20 backdrop-blur-md border-gray-800 shadow-lg"}`}>
        <div className="flex items-center justify-between lg:w-[80rem] md:w-[100%] px-4 md:px-3 py-5 m-auto text-lg">
          <div className="flex items-center">
            <Link style={{ textDecoration: "none" }} to="/" className="flex items-center">
              {/* Seu logotipo aqui */}
              <h1
                className="hidden mx-2 md:block lg:block font-extrabold text-left text-transparent md:text-3xl text-xs bg-clip-text bg-gradient-to-r from-white to-white h-8"
              >Solucions Tech</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="md:flex gap-8 hidden items-center text-lg font-extrabold">
              <li>
                <Link
                  to="secao1"
                  className={`hover:underline underline-offset-4 ${activeLink === "secao1" ? "decoration-blue-500" : "decoration-sky-500"}`}
                  onClick={() => scrollTo("secao1")}
                >
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  to="secao2"
                  className={`hover:underline underline-offset-4 ${activeLink === "secao2" ? "decoration-blue-500" : "decoration-sky-500"}`}
                  onClick={() => scrollTo("secao2")}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="secao3"
                  className={`hover:underline underline-offset-4 ${activeLink === "secao3" ? "decoration-blue-500" : "decoration-sky-500"}`}
                  onClick={() => scrollTo("secao3")}
                >
                  Contato
                </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => {
                setMenu(!menu);
              }}
              className="animate-pulse md:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
            >
              {!menu ? "Menu" : "Fechar"}
            </button>
          </div>
        </div>
        {menu && (
          <div className="md:hidden fixed top-[4rem] right-0 rounded-xl w-[12rem] py-2 mr-5 shadow-md text-white bg-gray-900 border-gray-700 border">
            <ul>
              <li>
                <Link
                  to="secao1"
                  onClick={() => {
                    setMenu(false);
                    scrollTo("secao1");
                  }}
                  className="hover:underline hover:border-blue-300 border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  to="secao2"
                  onClick={() => {
                    setMenu(false);
                    scrollTo("secao2");
                  }}
                  className="hover:underline hover:border-blue-300 border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="secao3"
                  onClick={() => {
                    setMenu(false);
                    scrollTo("secao3");
                  }}
                  className="hover:underline hover:border-blue-300 border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
