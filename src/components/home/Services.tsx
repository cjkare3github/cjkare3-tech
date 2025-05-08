import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, PenTool, Film, Video, Smartphone, BarChart3 } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={24} className="text-primary" />,
      title: 'Web Design & Development',
      description: 'Custom websites tailored to your brand with responsive design and modern functionality.',
      price: 'From 300,000 TZS',
    },
    {
      icon: <PenTool size={24} className="text-primary" />,
      title: 'Graphics Design',
      description: 'Eye-catching logos, posters, business cards, and other visual assets for your brand.',
      price: 'From 15,000 TZS',
    },
    {
      icon: <Film size={24} className="text-primary" />,
      title: '2D & 3D Animation',
      description: 'Engaging animated content for advertising, education, entertainment, and more.',
      price: 'From 100,000 TZS',
    },
    {
      icon: <Video size={24} className="text-primary" />,
      title: 'Video Editing',
      description: 'Professional video editing services for commercials, social media, and promotional content.',
      price: 'From 150,000 TZS',
    },
    {
      icon: <Smartphone size={24} className="text-primary" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for Android and iOS devices.',
      price: 'From 250,000 TZS',
    },
    {
      icon: <BarChart3 size={24} className="text-primary" />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing to boost your online presence and reach your target audience.',
      price: 'From 100,000 TZS',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer a wide range of IT services to help your business thrive in the digital world."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;