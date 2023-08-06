import React from 'react';
// motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat 
              h-[640px] bg-top'
            >
          </motion.div>
          {/* text */}
          <motion.div 
            
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 text-center lg:text-start'
          >
            <h2 className='h2 text-gradient'>Del Sur Club</h2>
            <p className='mb-6'>
              En Del Sur Club, somos una familia unida por nuestra pasión compartida 
              por el <a href='/branding' className='text-gradient'>Rugby</a> y 
              el <a href='/branding' className='text-gradient'>Hockey</a>. Aquí, no solo practicamos deportes, sino que 
              también creamos amistades duraderas y cultivamos un ambiente de competencia 
              saludable. Unite a la Familia Sureña para ser parte de esta comunidad apasionada y comprometida.
            </p>
            
            <div className='flex gap-x-8 items-center'>
              <a href='#contact'>
                  <button className='btn btn-lg btn-outline'>
                      Contactanos
                  </button>              
              </a>
              <a href='/actividades' className='text-gradient font-bold'>
                Actividades
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
