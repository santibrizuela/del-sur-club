import React from 'react'
// components
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
        <Main/>
        <About/>
        <Services/>
        <Work/>
    </>
  )
}

export default Home