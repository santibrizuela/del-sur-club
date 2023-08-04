import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import portfolioDivano2 from '../assets/portfolioDivano2.png';
import portfolioZetaGroup from '../assets/portfolioZetaGroup.png';
import portfolioCe from '../assets/portfolioCePasteleria.png';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0 text-center mx-auto lg:text-start'>
          {/* text */}
          <div>
            
            <h2 className='h2 leading-tight font-bold text-lime-200 mx-auto'>
              <a href='/skills' className='text-gradient text-lime-200 w-min'>
                  Servicios <br />
                  Digitales.
              </a>
            </h2>
            
            <p className='max-w-sm text-[1.5rem] font-bold mb-16 mx-auto lg:mx-0'>
              Diseñamos y creamos el <a href='/branding' className='text-gradient text-lime-200'>Logo</a> de 
              tu marca. Desarrollamos su <a href='/webdevelopment' className='text-gradient text-lime-200'>Sitio Web</a>, 
              perfiles en <a href='/marketing' className='text-gradient text-lime-200'>Redes Sociales</a> y 
              estrategias de <a href='/marketing' className='text-gradient text-lime-200'>Marketing</a>.
            </p>
            <a href='/portfolio'>
              <button className='btn btn-sm'>Ver Proyectos</button>
            </a>
            
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioZetaGroup} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Diseño UX/UI</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>ZETA GROUP</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://zgroup-nextjs.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-16'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioDivano2} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Desarrollos de Marca-Web y Marketing Digital</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>DIVANO 2.0</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://divano-nextjs.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioCe} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Diseño Gráfico</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Ce Pastelería</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://www.instagram.com/ce_pasteleriaa/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </section>
  );
};

export default Work;
