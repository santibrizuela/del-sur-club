import React from 'react';
//Import Icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboard, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-40'>
    <div className='container mx-auto w-min'>
      {/*nav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full 
      max-w-[460px] mx-auto flex justify-center items-center text-2xl text-white/50 
      px-6'
      >
        <a 
          href='/'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[60px] h-[60px] flex items-center m-auto justify-center'
        >
          <BiHomeAlt className='icon-color'/>
        </a>
        <a 
          href='/about' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center m-auto justify-center'
        >
          <BiUser className='icon-color'/>
        </a>
        <a 
          href='/services'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center m-auto justify-center'
        >
          <BsClipboard className='icon-color'/>
        </a>
        <a 
          href='/work'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center m-auto justify-center'
        >
          <BsBriefcase className='icon-color'/>
        </a>
        <a 
          href='#contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center m-auto justify-center'
        >
          <BsChatSquareText className='icon-color'/>
        </a>
      </div>

    </div>
    
  </nav>;
};

export default Nav;
