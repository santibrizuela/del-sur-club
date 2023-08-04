import React from 'react';
// components
import WhatsappScroll from './components/WhatsappScroll';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Marketing from './pages/Marketing';
import Webdevelopment from './pages/Webdevelopment';
import Rugby from './pages/Rugby';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Navbar />
      <WhatsappScroll />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/webdevelopment' element={<Webdevelopment/>} />
        <Route path='/rugby' element={<Rugby/>} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
