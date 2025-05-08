import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';

const About: React.FC = () => {
  const advantages = [
    'Expert team with years of experience',
    'Customized solutions for your unique needs',
    'Affordable pricing with high-quality results',
    'Fast turnaround times and responsive support',
    'Cutting-edge technologies and best practices',
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="About CJKARE3 TECHNOLOGY" 
              className="w-full h-auto rounded-xl shadow-xl"
            />
            
            {/* Experience badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-primary text-white p-4 rounded-xl shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="block text-3xl font-bold">5+</span>
              <span className="text-sm">Years of Experience</span>
            </motion.div>
          </motion.div>
          
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full mb-4 font-medium">
              About Our Company
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <AnimatedText text="Leading IT Services Provider in Tanzania" />
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2025, CJKARE3 TECHNOLOGY has quickly established itself as a premier IT services company in Mwanza, Tanzania. Our mission is to help businesses leverage technology to achieve their goals through innovative, cost-effective solutions.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We specialize in web development, graphic design, animation, video editing, mobile app development, and digital marketing. Our team of skilled professionals is committed to delivering high-quality services that exceed client expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;