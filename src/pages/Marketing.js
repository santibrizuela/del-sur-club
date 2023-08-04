import React from 'react'
// image
import digitalMarketing from '../assets/digitalMarketing.jpg';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Marketing = () => {
  return (
    <>


        <div className='w-full'>
            <motion.div 
                
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='w-screen h-[30vh] lg:h-[40vh] top-0'
            >
                <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
                <img className='h-full w-full object-cover z-1' src={digitalMarketing} alt='Green Card & Visa'/>
                <div className='absolute top-[18%] lg:top-[24%] max-w-[1240px] w-full text-white z-20 p-2'>
                    <h2 className='py-2 font-bold text-gradient text-[2.6rem]'>Marketing Digital</h2>
                    <h2 className='font-bold text-[2rem] text-lime-200'>¿Qué hacemos?</h2>
                    
                </div>
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-2'>
                <div className='col-span-4'>
                    <h2 className='text-[1.5rem] text-lime-200'>Social Media-Contenidos-SEO</h2>
                    <p>
                    Usamos estrategias para promocionar tu marca o negocio en redes sociales 
                    como Facebook, Instagram, Twitter, LinkedIn. Se 
                    busca interactuar con los seguidores y generar contenido atractivo para 
                    fomentar la participación y el crecimiento de la comunidad en línea (<span className='font-bold'>Social 
                    Media Marketing</span>). La creación y distribución de contenidos relevantes para atraer y retener a 
                    una audiencia específica también es tarea del Marketing Digital (<span className='font-bold'>Marketing 
                    de Contenidos</span>).<br/>

                    Desarrollamos Técnicas para mejorar la visibilidad y el posicionamiento de
                    tu marca en los motores de búsqueda de Google (<span className='font-bold'>Search Engine Optimization</span>). 
                    Queremos lograr aparecer lo más arriba posible en las búsquedas.



                       


                    </p>
                    <a href='/portfolio'>
                        <button className='btn btn-outline px-8 py-2 mt-4 mr-8'>Portfolio</button>
                    </a>
                    <a href='#contact'>
                        <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Contactanos</button>
                    </a>
                </div>
            </motion.div>
        </div>
    </>
  )
}

export default Marketing