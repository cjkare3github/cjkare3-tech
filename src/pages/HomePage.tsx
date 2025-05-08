import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Portfolio from '../components/home/Portfolio';
import Team from '../components/home/Team';
import Contact from '../components/home/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <Contact />
    </>
  );
};

export default HomePage;