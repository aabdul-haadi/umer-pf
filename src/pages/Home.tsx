import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck, Wifi, Lock, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition backgroundImage="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg">
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Text Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-5 backdrop-blur-sm">
                  Network Security Specialist
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Hi, I'm <span className="text-blue-500">Muhammed Umer</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-lg backdrop-blur-sm bg-gray-900/30 p-4 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                I help businesses protect their digital assets with comprehensive network security solutions, vulnerability assessments, and threat monitoring.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Link to="/projects" className="btn btn-primary">
                  View My Projects <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/pricing" className="btn btn-outline">
                  Explore Services
                </Link>
              </motion.div>

              <motion.div 
                className="mt-10 flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:contact@muhammedumer.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Hero Visual Element */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-800">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                
                {/* Floating security icons */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 bg-gray-800/80 p-4 rounded-lg backdrop-blur-md border border-gray-700"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <ShieldCheck className="text-blue-500 w-10 h-10" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 bg-gray-800/80 p-4 rounded-lg backdrop-blur-md border border-gray-700"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <FileCheck className="text-purple-500 w-8 h-8" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/4 right-1/5 bg-gray-800/80 p-4 rounded-lg backdrop-blur-md border border-gray-700"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <Wifi className="text-teal-500 w-9 h-9" />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/3 right-1/3 bg-gray-800/80 p-4 rounded-lg backdrop-blur-md border border-gray-700"
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <Lock className="text-green-500 w-7 h-7" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;