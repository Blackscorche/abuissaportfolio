import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Home() {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          
          <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight'>
            Hi, I'm Abu Issa
          </h1>
          
          <p className='text-gray-400 text-lg mb-6 max-w-lg mx-auto'>
            I'm a full-stack developer who loves crafting clean, scalable web applications. 
            My goal is to build solutions that offer both exceptional performance and a delightful experience.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-9">
            <a 
              href="https://github.com/blackscorche" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-blue-500 hover:text-cyan-400 text-4xl'
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/abu-issa-a12010306/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-blue-500 hover:text-cyan-400 text-4xl'
            >
              <FaLinkedin />
            </a>

            <a 
              href="https://wa.me/2349037959033" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-blue-500 hover:text-cyan-400 text-4xl'
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-3">
            <a 
              href="Projects" 
              className='bg-blue-500 py-3 px-5 rounded font-medium transition duration-200 
                         relative overflow-hidden hover:-translate-y-0.5 
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
            >
              View Projects
            </a>

            <a 
              href="contact" 
              className='border border-blue-500/50 text-blue-500 py-3 px-5 rounded font-medium 
                         transition-all duration-200 relative overflow-hidden 
                         hover:-translate-y-0.5 hover:bg-blue-500/10'
            >
              Contact Me
            </a>
          </div>
        
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
