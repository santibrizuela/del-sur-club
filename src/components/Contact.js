import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { FaInstagram, FaWhatsapp, } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';

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
            className='flex items-center mx-auto text-center lg:text-start'
          >
            <div>
              <h2 className='text-gradient font-bold text-[45px] lg:text-[86px] leading-none mb-8'>
                Contacto
              </h2>
              <a target='_blank' rel='noreferrer' href='https://www.whatsapp.com/'>
                <p className='flex menuNav'>
                  <FaWhatsapp className='my-auto mx-1'/> 11-2233-4455
                </p>
              </a>
              <a href='mailto:admin@delsurclub.com.ar'>
                <p className='flex menuNav'>
                  <AiOutlineMail className='my-auto mx-1'/> admin@delsurclub.com.ar
                </p>
              </a>
              <a target='_blank' rel='noreferrer' href='https://goo.gl/maps/pa5rVDi5NxHcjc848'>
                <p className='flex menuNav'>
                  <ImLocation className='my-auto mx-1'/> Diego A Maradona 9399
                </p>
              </a>

              
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
                <a target='_blank' rel='noreferrer' href='https://goo.gl/maps/pa5rVDi5NxHcjc848'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <ImLocation/>
                    </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
          {/* form */}
          <div className='flex hover:scale-100 ease-in duration-300 md:h-[60vh] md:w-[60vw] mx-auto md:px-2'>

            
            
            <motion.iframe 
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104936.15253510738!2d-58.64822305664063!3d-34.7239721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccf3b6aa6d3bf%3A0x47ebb03515fbd8fb!2sClub%20Del%20Sur!5e0!3m2!1ses-419!2ses!4v1691291812673!5m2!1ses-419!2ses" 
              className='relative flex-shrink-0 w-full rounded-xl'
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></motion.iframe>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
