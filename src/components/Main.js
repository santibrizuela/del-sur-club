import React from 'react'
import contactImg from '../assets/dsrEscudo2.png'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { BsPersonVcard } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mask'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='justify-center text-center'>

                <img className='rounded-xl' src={contactImg} alt="Contact" />
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-gray-300'>
                    <a target='_blank' rel='noreferrer' href='https://www.whatsapp.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineWhatsApp/>
                        </div>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineLinkedin/>
                        </div>
                    </a>
                    <a href='/#contact'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </a>
                    <a href='/#projects'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsPersonVcard/>
                        </div>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineInstagram/>
                        </div>
                    </a>    
                </div>
                
                <a href='/#services'>
                    <div className='btn btn-lg'>
                        <p className='p-2'>Contactanos</p>
                    </div>
                </a>

            </div>
        </div>
    </div>
  )
}

export default Main