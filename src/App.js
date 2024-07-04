import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="bg-[#010A04] m-0 min-h-screen">
      
      
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
