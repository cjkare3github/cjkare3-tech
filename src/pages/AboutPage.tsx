import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Target, TrendingUp, Heart } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedText from '../components/common/AnimatedText';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Award className="text-primary h-10 w-10" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.',
    },
    {
      icon: <Users className="text-primary h-10 w-10" />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to understand their needs and deliver tailored solutions.',
    },
    {
      icon: <Target className="text-primary h-10 w-10" />,
      title: 'Innovation',
      description: 'We embrace new technologies and innovative approaches to solve complex problems effectively.',
    },
    {
      icon: <TrendingUp className="text-primary h-10 w-10" />,
      title: 'Growth',
      description: 'We are committed to continuous learning and growth, both as individuals and as a company.',
    },
    {
      icon: <Heart className="text-primary h-10 w-10" />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical standards in all our business dealings.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-28 mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Learn more about CJKARE3 TECHNOLOGY, our team, mission, and the values that drive us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full mb-4 font-medium">
                Our Story
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <AnimatedText text="From Vision to Digital Excellence" />
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2025 by Erasto Kamuli Jelemia, CJKARE3 TECHNOLOGY began with a vision to provide high-quality, affordable IT solutions to businesses in Tanzania. What started as a small web development shop quickly grew into a full-service IT company offering a wide range of digital services.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our team of four passionate professionals combines diverse expertise in web development, graphic design, animation, video editing, mobile app development, and digital marketing. We've helped numerous clients transform their ideas into digital reality, creating impactful online presences that drive growth and success.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                Today, CJKARE3 TECHNOLOGY is recognized as a leading IT services provider in Mwanza, Tanzania, known for our technical excellence, creative solutions, and commitment to client satisfaction. We continue to evolve and adapt to the changing digital landscape, always staying at the forefront of technology trends to deliver the best possible solutions for our clients.
              </p>
            </motion.div>
            
            {/* Story Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="CJKARE3 TECHNOLOGY story" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-6">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To empower businesses and individuals in Tanzania with innovative digital solutions that drive growth, efficiency, and success. We aim to bridge the technological gap by providing affordable, high-quality IT services that meet the unique needs of our local market while maintaining global standards.
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-6">
                <TrendingUp size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become the leading IT services company in East Africa, recognized for our technical excellence, innovative solutions, and positive impact on the digital landscape. We envision a future where every business in our region has access to world-class digital tools and services that help them thrive in the global marketplace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do at CJKARE3 TECHNOLOGY."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="Reasons why clients trust CJKARE3 TECHNOLOGY for their IT needs."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Expert team with diverse skills and experience',
              'Customized solutions tailored to your specific needs',
              'Affordable pricing without compromising on quality',
              'Fast turnaround times and responsive support',
              'Commitment to staying current with the latest technologies',
              'Strong focus on user experience and design aesthetics',
              'Continuous communication throughout project development',
              'Long-term partnership approach with all clients',
            ].map((reason, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 size={24} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-lg">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;