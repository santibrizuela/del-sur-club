import React from 'react';
//Images
import Logo from '../assets/logoE.png'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*Logo*/}
          <div className='w-20'>
          <a href='/'>
            <img src={Logo} alt='Logo' />
          </a>
          </div>
          
          {/*Buttonn*/}
          <a href='#contact'>
            <button className='btn btn-sm'>Contactanos</button>
          </a>


        </div>

      </div>
    </header>
    );
};

export default Header;
