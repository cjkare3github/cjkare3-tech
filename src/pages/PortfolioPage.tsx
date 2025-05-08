import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  date: string;
  link?: string;
}

const PortfolioPage: React.FC = () => {
  // Portfolio categories
  const categories = ['All', 'Web Development', 'Graphics Design', 'Animation', 'Video Editing', 'Mobile App', 'Digital Marketing'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Portfolio items
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A fully-featured e-commerce platform for a local retail business with payment integration, inventory management, and responsive design.',
      client: 'MwanzaShop Ltd',
      date: 'March 2025',
      link: 'https://erastocoffe.netlify.app/',
    },
    {
      id: 2,
      title: 'Corporate Identity',
      category: 'Graphics Design',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand identity package including logo design, stationery, brand guidelines, and social media assets.',
      client: 'TechFirm Tanzania',
      date: 'February 2025',
    },
    {
      id: 3,
      title: 'Product Showcase Animation',
      category: 'Animation',
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: '3D product showcase animation for a new smartphone launch, highlighting key features and specifications.',
      client: 'MobileTech',
      date: 'April 2025',
      link: 'https://example.com',
    },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Mobile application for a local food delivery service with real-time tracking, payment processing, and restaurant management system.',
      client: 'MwanzaEats',
      date: 'May 2025',
      link: 'https://example.com',
    },
    {
      id: 5,
      title: 'Marketing Campaign',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3800336/pexels-photo-3800336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comprehensive digital marketing campaign for a local business, including social media, email marketing, and PPC advertising.',
      client: 'Victoria Boutique',
      date: 'January 2025',
    },
    {
      id: 6,
      title: 'Gift finder website',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Modern, responsive gift finder website with a recommendation, and contact form integration.',
      client: 'Mwanza Investment Group',
      date: 'March 2025',
      link: 'https://giftsfinder.netlify.app/',
    },
    {
      id: 7,
      title: 'Corporate Video',
      category: 'Video Editing',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Professional corporate video showcasing company values, services, and team members with captivating storytelling.',
      client: 'Tanzania Insurance Company',
      date: 'April 2025',
      link: 'https://example.com',
    },
    {
      id: 8,
      title: 'Educational App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/4144293/pexels-photo-4144293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interactive educational application for primary school students, featuring gamified learning experiences and progress tracking.',
      client: 'EduTech Tanzania',
      date: 'May 2025',
    },
    {
      id: 9,
      title: 'Restaurant Menu Design',
      category: 'Graphics Design',
      image: 'https://images.pexels.com/photos/4144299/pexels-photo-4144299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Modern, visually appealing menu design for a local restaurant, including digital and print versions.',
      client: 'Lake View Restaurant',
      date: 'February 2025',
    },
  ];

  // Filter portfolio items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  // State for selected item
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Explore our latest projects and see how we've helped our clients achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Our Work" 
            subtitle="Browse through our recent projects across various industries and services."
          />

          {/* Portfolio filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
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

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="portfolio-item rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="portfolio-overlay">
                    <button 
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      onClick={() => setSelectedItem(item)}
                      aria-label="View project details"
                    >
                      <Eye size={20} className="text-primary" />
                    </button>
                  </div>
                </div>
                
                <div className="p-5">
                  <span className="text-sm text-primary font-medium">{item.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Item Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-80 overflow-hidden">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-primary font-medium">{selectedItem.category}</span>
                  <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedItem.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Client</h4>
                  <p>{selectedItem.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Completion Date</h4>
                  <p>{selectedItem.date}</p>
                </div>
              </div>
              
              {selectedItem.link && (
                <a 
                  href={selectedItem.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark"
                >
                  Visit Project <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PortfolioPage;