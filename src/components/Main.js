import React from 'react'
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mask'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <motion.div 
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='justify-center text-center'
            >
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-gray-300'>
                    <a target='_blank' rel='noreferrer' href='https://www.whatsapp.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineWhatsApp/>
                        </div>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/delsurclub/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineInstagram/>
                        </div>
                    </a>    
                    <a href='#contact'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <ImLocation/>
                        </div>
                    </a>
                </div>
                
                <a href='/#contact'>
                    <div className='btn btn-lg'>
                        <p className='p-2'>Contactanos</p>
                    </div>
                </a>

            </motion.div>
        </div>
    </div>
  )
}

export default Main