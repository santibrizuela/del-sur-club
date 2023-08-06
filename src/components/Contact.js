import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex items-center mx-auto text-center lg:text-start'
          >
            <div>
              <h2 className='text-gradient font-bold text-[45px] lg:text-[90px] leading-none mb-2'>
                Estemos en <br /> Contacto!
              </h2>
              
              {/* socials */}
              <motion.div 
                variants={fadeIn('up', 0.7)} 
                initial="hidden" 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.7}}
                className='flex-1 flex text-[20px] gap-x-6 my-6 max-w-max mx-auto lg:mx-2'
              >
                <a target='_blank' rel='noreferrer' href='https://www.whatsapp.com/'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <FaWhatsapp/>
                    </div>
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/delsurclub/'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <FaInstagram/>
                    </div>
                </a>    
                <a target='_blank' rel='noreferrer' href='#contact'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <ImLocation/>
                    </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
          {/* form */}
          <div className='lg:w-[60%] scale-90 hover:scale-100 ease-in duration-300'>
          
            <motion.form 
              action="https://formsubmit.co/brizuelasideravicius@gmail.com" 
              method="POST"
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 border rounded-2xl flex flex-col gap-y-6 
              pb-24 p-6 items-start'
            >
              
              <input
                className='bg-transparent border-b py-3 outline-none w-full 
                placeholder:text-white focus:border-accent transition-all'
                type='text'
                name="name" 
                required
                placeholder='Nombre Completo'
              />
              <input
                className='bg-transparent border-b py-3 outline-none w-full 
                placeholder:text-white focus:border-accent transition-all'
                type='text'
                name="email" 
                required
                placeholder='Correo Electrónico'
              />
              <input
                className='bg-transparent border-b py-3 outline-none w-full 
                placeholder:text-white focus:border-accent transition-all'
                type='text'
                name="number" 
                placeholder='Teléfono'
              />
              <input
                className='bg-transparent border-b py-3 outline-none w-full 
                placeholder:text-white focus:border-accent transition-all'
                type='text'
                name="subject" 
                required
                placeholder='Asunto'
              />
              <textarea 
                className='bg-transparent border-b py-4 outline-none w-full 
                placeholder:text-white focus:border-accent transition-all 
                resize-none mb-10'
                name="message" 
                required
                placeholder='Escribir mensaje...'
              ></textarea>
              <button 
                className='btn btn-lg'
                type='submit'
                >Enviar</button>
            </motion.form>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
