import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
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
            <h2 className='h2 text-gradient w-max'>About us.</h2>
            <h3 className='h3 mb-4'>
              Nos dedicamos al <a href='/branding' className='text-gradient'>Diseño Gráfico</a>,
              <a href='/webdevelopment' className='text-gradient'> Desarrollo Web</a> y 
              <a href='/marketing' className='text-gradient'> Marketing</a> de Marcas.
            </h3>
            <p className='mb-6'>
              Insertamos, potenciamos y lanzamos marcas en línea.
              Creamos soluciones impactantes y auténticas que conectan con tu audiencia y generan resultados excepcionales.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3} /> : 
                  null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Socios <br />
                  Activos
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={3} /> : 
                  null}
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Puntos de <br />
                  Transporte
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> : 
                  null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Seguidores <br />
                  en Redes
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg btn-outline'>Contactanos</button>
              <a href='/portfolio' className='text-gradient font-bold'>
                Ver Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
