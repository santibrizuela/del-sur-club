import React from 'react'
// image
import topImage from '../assets/rugbyHeader3.jpg';
import rugbySuperior from '../assets/rugbySuperior.png'
import rugbyJuvenil from '../assets/rugbyJuvenil.png'
import rugbyInfantil from '../assets/rugbyInfantil.png'
import rugbyInclusivo from '../assets/rugbyInclusivo.png'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// rugby data
const rugby = [
  
    
    {
      name: 'Juveniles',
      description:
       'Lunes: 20hs-22hs / Martes y Jueves: 20:30hs-22:30hs',
      link: '/rugby',
      cardimage: rugbyJuvenil,
    },
    {
      name: 'Infantiles',
      description:
       'Martes y Jueves: 20:30hs-22:30hs / Sabados 10hs-12hs',
      link: '/hockey',
      cardimage: rugbyInfantil,
    },
    {
      name: 'Plantel Superior',
      description:
       'Lunes: 20hs-22hs / Martes y Jueves: 20:30hs-22:30hs',
      link: '/transporte',
      cardimage: rugbySuperior,
    },
    {
        name:'Inclusivo',
        description: 
        'Sábados 10hs/12hs',
        cardimage: rugbyInclusivo,
    }
    
  ]

const Rugby = () => {
  return (
    <>


        <div className='w-full h-full text-center'>
            <motion.div 
                
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='w-screen h-[30vh] lg:h-[40vh] top-0'
            >
                <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
                <img className='h-full w-full object-cover z-1' src={topImage} alt='Green Card & Visa'/>
                <div className='absolute top-[14%] lg:top-[24%] max-w-[1240px] w-full text-white z-20 p-2 text-left'>
                    <h2 className='py-2 font-bold text-gradient text-[2.6rem] uppercase w-min'>Rugby</h2>
                    <h2 className='font-bold text-[1.5rem]'>Horarios</h2>
                    
                </div>
            </motion.div>

            
            <div className='grid md:grid-cols-2'>
                {rugby.map((service, index) => {
                // destructure service
                const { name, description, link, cardimage } = service;
                return (
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='max-2-[1240px] mx-auto p-2 gap-8 pt-2'
                    key={index}    
                >
                    {/* card */}
                    <div className='  items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group scale-90 hover:scale-100 ease-in duration-300'>
                        <img className='rounded-xl ' src={cardimage} alt={name}/>
                        <div className='  text-black'>
                            <h3 className='text-2xl tracking-wider text-center'>{name}</h3>
                            <p className='pb-4 pt-2'>{description}</p>
                            <a target='_blank' href='https://wa.link/quekoy'>
                                <p className='py-3 rounded-lg bg-white text-emerald-700 border-emerald-700 font-bold text-lg cursor-pointer btn btn-outline hover:shadow-none hover:bg-emerald-700'>WHATSAPP</p>
                            </a>
                        </div>
                    </div>
                </motion.div>
                );
                })}
            </div>
        </div>
    </>
  )
}

export default Rugby