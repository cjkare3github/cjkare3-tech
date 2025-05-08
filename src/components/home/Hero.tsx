import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, Smartphone, PenTool, Film, BarChart3 } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full mb-4 font-medium">
              #1 IT Services in Tanzania
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <AnimatedText 
                text="Transforming Ideas Into Digital Reality" 
                className="block mb-2"
              />
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              We deliver cutting-edge technology solutions to help businesses thrive in the digital world. From web development to digital marketing, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div>
                <h4 className="font-bold text-4xl text-primary">5+</h4>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-4xl text-primary">100+</h4>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h4 className="font-bold text-4xl text-primary">95%</h4>
                <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image & Services Icons */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="CJKARE3 TECHNOLOGY team working" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Floating service icons */}
            <motion.div 
              className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-2"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 2,
                delay: 0.2
              }}
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code size={20} className="text-primary" />
              </div>
              <span className="font-medium">Web Dev</span>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-2"
              initial={{ x: 10 }}
              animate={{ x: 0 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 2,
                delay: 0.6
              }}
            >
              <div className="p-2 bg-secondary/10 rounded-lg">
                <PenTool size={20} className="text-secondary" />
              </div>
              <span className="font-medium">Graphics</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 left-1/4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-2"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 2,
                delay: 1
              }}
            >
              <div className="p-2 bg-accent/10 rounded-lg">
                <Film size={20} className="text-accent" />
              </div>
              <span className="font-medium">Animation</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;