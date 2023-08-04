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
            <h2 className='h2 text-lime-200 w-max'>About us.</h2>
            <h3 className='h3 mb-4'>
              Nos dedicamos al <a href='/branding' className='text-gradient text-lime-200'>Diseño Gráfico</a>,
              <a href='/webdevelopment' className='text-gradient text-lime-200'> Desarrollo Web</a> y 
              <a href='/marketing' className='text-gradient text-lime-200'> Marketing</a> de Marcas.
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
                  {inView ? <CountUp start={0} end={3} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Proyectos <br />
                  Completados
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes <br />
                  Satisfechos
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contactanos</button>
              <a href='/portfolio' className='text-lime-200 font-bold btn-link'>
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
