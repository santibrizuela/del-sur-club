import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'

// services data
const services = [
  
  
  
  {
    name: 'Rugby',
    description:
     'Vení a jugar al rugby y sumate en nuestras categorías en Infantiles (6-14 años), Juveniles(15-19 años) o Plantel Superior.',
    link: '/rugby',
  },
  {
    name: 'Hockey',
    description:
     'Vení a jugar al hockey y sumate en nuestras categorías en Infantiles (6-14 años), Juveniles(15-19 años) o Plantel Superior..',
    link: '/hockey',
  },
  {
    name: 'Transporte',
    description:
     'Contamos con servicio de transporte idea y vuelta con paradas en los barrios Parque Chacabuco, Lugano, Celina, Madero y Tapiales.',
    link: '/transporte',
  }
  
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 
          mix-blend-lighten mb-12 lg:mb-0  text-center lg:text-start'
        >
          <h2 className='h2 font-bold text-yellow-400 my-4'>Te Buscamos</h2>
          <h3 className='h3 lg:max-w-[455px] lg:mb-10'>
            Tenemos<a href='/transporte' className='text-gradient'> Servicio de bus</a> ida y vuelta para que  
            vengas a hacer tus<a href='/actividades' className='text-gradient'> Actividades</a> al club.
             
          </h3>
          <a href='/transporte'>
            <button className='btn'>Ver mas</button>
          </a>
          
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          {/* service list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const { name, description, link } = service;
              return (
                <div 
                  className='border-b border-white/20 h-[146px] 
                  mb-[38px] flex' 
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <a href={link}>
                      <h4 className='text-gradient text-[2rem] tracking-wider w-min font-primary 
                      font-bold mb-6 uppercase'>
                        {name}
                      </h4>
                    </a>
                    
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a 
                      href={link} 
                      className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href={link} className='text-gradient font-bold text-sm'>
                      Ver Más
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
