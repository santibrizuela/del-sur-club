import React from 'react'
// image
import digitalMarketing from '../assets/servicesWebSites.jpg';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Webdevelopment = () => {
  return (
    <>


        <div className='w-full h-full'>
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
                    <h2 className='py-2 font-bold text-gradient text-[2.6rem]'>Desarrollo Web</h2>
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
                    <h2 className='text-[1.5rem] text-lime-200'>Diseño Web-Alojamiento-DNS</h2>
                    <p>
                    Diseñamos un sitio web Responsive (opcional Copywriting) como <span className='font-bold'>Landingpage</span> (Nav-Home-About-Catálogo-Contact-Map-Footer
                    con lenguajes de programación HTML-CSS-JS) o <span className='font-bold'>ReacApp</span> (aplicación desarrollada y 
                    estilizada con las herramientas React y Tailwind CSS) para así 
                    subir el sitio a internet y tenerlo estar en línea 24hs. Creamos un repositorio 
                    (carpeta del sitio) en <span className='font-bold'>Github</span> y lo alojamos en <span className='font-bold'>Vercel/Firebase</span> 
                     (tu-marca.vercel.app) o adquirimos un <span className='font-bold'>DNS</span> personalizado 
                    (www.tu-marca.com). También te ofrecemos el certificado de seguridad (<span className='font-bold'>SSL</span>) para 
                    que el ingreso a tu web sea bajo el protocolo HTTPS (https://www.tu-marca.com).

                    <br/>
                    El último paso sería crear un <span className='font-bold'>correo empresarial</span> (ventas@tu-marca.com), vincularlo
                    con el sitio web para informar a tus suscriptores sobre novedades o 
                    hacer <a href='/marketing' className='font-bold text-lime-200'>Email Marketing</a> con promociones sobre tu marca.


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

export default Webdevelopment