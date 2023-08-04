import React from 'react';
//components
import Header from '../components/Header'
// image
import portfolioResisten from '../assets/portfolioResisten.png';
// icons 


const Design = () => {
  return (
    <>
        <Header/>


        <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] top-0'>
            <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <img className='h-full w-full object-cover z-1' src={portfolioResisten} alt='Green Card & Visa'/>
            <div className='absolute top-[20%] lg:top-[40%] max-w-[1240px] w-full text-white z-20 p-2'>
                <h2 className='py-2 text-[2rem]'>Madero Imprime</h2>
                <h3>ReactApp-CSS-ProductCards</h3>
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proyecto Activo</p>
                <h2>Madero Imprime</h2>
                <p>
                    
                    La tecnología FDM (Modelado por Deposición Fundida) se utiliza con 
                    impresoras 3D especializadas y termoplásticos (PLA/ABS) de producción 
                    para fabricar piezas resistentes, duraderas, dimensionalmente estables 
                    y hasta flexibles según el material utilizado. Éstas piezas se realizan 
                    superponiendo PLA en las distintas capas de las mismas.


                </p>
                <a target='_blank' href='https://santibrizuela.github.io/madero/'>
                    <button className='btn btn-outline px-8 py-2 mt-4 mr-8 text-emerald-500'>Demo</button>
                </a>
                <a target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </a>
            </div>

            
            <a href='/#projects'>
                <p className='underline cursor-pointer font-bold'>Back</p>
            </a>
        </div>
    </div>

    </>
  )
}

export default Design