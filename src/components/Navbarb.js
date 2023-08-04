import brandImg from '../assets/dsrEscudo.png';
import { AiOutlineMenu, AiOutlineClose, AiFillGithub, AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { useState } from 'react';

const Navbarb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 25) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500  
      ${
        isOpen ? `bg-white md:${scrolled ? 'bg-white':'bg-transparent'}` : 'bg-transparent'
      }
      ${
        scrolled
          ? 'bg-white bg-opacity-90 shadow-lg text-gray-800'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center hover:scale-90 ease-in duration-300">
          <a href="/" legacyBehavior>
            <a href='/'>
              <img
                src={brandImg}
                alt="Keyboardr logo"
                width={80}
                height={48}
                objectFit="contain"
              />
            </a>
          </a>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6 rounded-full shadow-lg cursor-pointer" />
            ) : (
              <AiOutlineMenu className={`w-6 h-6 
              ${scrolled ? 
                'text-gray-800' 
                : 
                'text-white'
              }`} />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:w-auto w-full`}
          style={{ zIndex: '999' }}
        >
          <ul className="md:flex justify-end flex-1 items-center flex-col md:flex-row">
            <li className="md:mx-3 my-3 md:my-0">
              <a href="/" passHref legacyBehavior>
                <div className="px-4 py-3 text-gray-800 hover:text-blue-500 cursor-pointer ease-in duration-300">
                  Inicio
                </div>
              </a>
            </li>
            <li className="md:mx-3 my-3 md:my-0">
              <a href="/about" passHref legacyBehavior>
                <div className="px-4 py-3 text-gray-800 hover:text-blue-500 cursor-pointer ease-in duration-300">
                  Acerca de Nosotros
                </div>
              </a>
            </li>
            <li className="md:mx-3 my-3 md:my-0">
              <a href="/catalog" passHref legacyBehavior>
                <div className="px-4 py-3 text-gray-800 hover:text-blue-500 cursor-pointer ease-in duration-300">
                  Catálogo
                </div>
              </a>
            </li>
            <li className="md:mx-3 my-3 md:my-0">
            <a href="/contact" passHref legacyBehavior>
                <div className="px-4 py-3 text-gray-800 hover:text-blue-500 cursor-pointer ease-in duration-300">
                  Contacto
                </div>
              </a>
            </li>
          </ul>


          
          <div className={` text-cyan-950 ${isOpen ? 'flex md:hidden' 
             : 'hidden md:hidden'
            }`} >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbarb;