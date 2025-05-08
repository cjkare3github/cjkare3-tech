import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Link } from 'react-router-dom';

// Portfolio item type
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

// Portfolio component
const Portfolio: React.FC = () => {
  // Portfolio categories
  const categories = ['All', 'Web', 'Graphics', 'Animation', 'Mobile App', 'Marketing'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'Web',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Modern e-commerce platform with payment integration',
      link: '/portfolio',
    },
    {
      id: 2,
      title: 'Company Branding',
      category: 'Graphics',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand identity design for a tech startup',
      link: '/portfolio',
    },
    {
      id: 3,
      title: 'Product Animation',
      category: 'Animation',
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: '3D product showcase animation for marketing',
      link: '/portfolio',
    },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Mobile app for local food delivery service',
      link: '/portfolio',
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/3800336/pexels-photo-3800336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Successful marketing campaign for a local business',
      link: '/portfolio',
    },
    {
      id: 6,
      title: 'Business Dashboard',
      category: 'Web',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Data visualization dashboard for business analytics',
      link: '/portfolio',
    },
  ];

  // Filter portfolio items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Our Portfolio" 
          subtitle="Explore our latest projects and see how we've helped our clients achieve their goals."
        />

        {/* Portfolio filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="portfolio-item rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover"
              />
              
              <div className="portfolio-overlay">
                <Link to={item.link} className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
                  <Eye size={20} className="text-primary" />
                </Link>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-700">
                <span className="text-sm text-primary font-medium">{item.category}</span>
                <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio" className="btn btn-primary">
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;