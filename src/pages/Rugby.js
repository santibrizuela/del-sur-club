import React from 'react'
// image
import topImage from '../assets/branding.jpg';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Rugby = () => {
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
                <img className='h-full w-full object-cover z-1' src={topImage} alt='Green Card & Visa'/>
                <div className='absolute top-[14%] lg:top-[24%] max-w-[1240px] w-full text-white z-20 p-2'>
                    <h2 className='py-2 font-bold text-gradient text-[2.6rem]'>Desarrollo de Marca</h2>
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
                    <h2 className='text-[1.5rem] text-lime-200'>Diseño Gráfico-Imagotipo-Paleta de Colores</h2>
                    <p>
                    El primer paso para Digitalizar una Marca es diseñar un <span className='font-bold'>Logo</span> atractivo  
                    con editores de <span className='font-bold'>Diseño Gráfico</span> como Photoshop/Ilustrator, junto con la creatividad y 
                    la <span className='font-bold'>Paleta de Colores</span> adecuada damos el estilo e identidad que corresponda 
                    a tu Marca. Ésta es la base para la creación de plantillas y el estilo que 
                    tendrán el Sitio Web y las Redes Sociales (Feed-Story-Destacadas), siendo éstos los elementos necesarios para 
                    introducirnos en el Desarrollo Web y Marketing Digital respectivamente, damos
                     una <span className='font-bold'>Entidad Digital</span> a la Marca.

                    <br/>
                    Luego de ocuparnos de éste primer paso podemos seguir con el crecimiento de tu marca poníendola en lína, estando 
                    24hs expuesta ya sea desde una <a href='/webdevelopment' className='font-bold text-lime-200'>Web Personalizada</a> o 
                    los perfiles de las <a href='/marketing' className='font-bold text-lime-200'>Redes Sociales</a>.


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

export default Rugby