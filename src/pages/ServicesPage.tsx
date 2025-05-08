import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Film, Video, Smartphone, BarChart3, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedText from '../components/common/AnimatedText';

const ServicesPage: React.FC = () => {
  // Define services with pricing tiers
  const services = [
    {
      id: 'web',
      icon: <Code size={32} className="text-primary" />,
      title: 'Web Design & Development',
      description: 'Custom, responsive websites tailored to your brand and business needs. We create engaging, user-friendly websites that look great on all devices.',
      tiers: [
        {
          name: 'Basic',
          price: '250,000 TZS',
          features: [
            '5-page responsive website',
            'Basic SEO optimization',
            'Contact form',
            'Mobile-friendly design',
            '1 month of free maintenance',
          ],
        },
        {
          name: 'Standard',
          price: '500,000 TZS',
          features: [
            '10-page responsive website',
            'Advanced SEO optimization',
            'Contact form & Google Maps integration',
            'Social media integration',
            'Basic e-commerce functionality (up to 20 products)',
            '3 months of free maintenance',
          ],
        },
        {
          name: 'Premium',
          price: '800,000 TZS',
          features: [
            'Unlimited page responsive website',
            'Comprehensive SEO strategy',
            'Advanced e-commerce functionality',
            'Payment gateway integration',
            'Custom animations and interactive elements',
            'Content management system',
            '6 months of free maintenance',
          ],
        },
      ],
    },
    {
      id: 'graphics',
      icon: <PenTool size={32} className="text-primary" />,
      title: 'Graphics Design',
      description: 'Eye-catching visual designs for your brand including logos, marketing materials, social media graphics, and more. We create designs that communicate your message effectively.',
      tiers: [
        {
          name: 'Logo Design',
          price: '15,000 TZS',
          features: [
            '3 initial concepts',
            '3 revision rounds',
            'Final files in multiple formats',
            'Brand color palette',
            'Usage guidelines',
          ],
        },
        {
          name: 'Business Stationery',
          price: '20,000 TZS',
          features: [
            'Business card design',
            'Letterhead design',
            'Envelope design',
            'Email signature',
            'Social media profile graphics',
          ],
        },
        {
          name: 'Marketing Materials',
          price: '30,000 TZS',
          features: [
            'Brochure design',
            'Flyer design',
            'Poster design',
            'Banner design',
            'Social media campaign graphics',
          ],
        },
      ],
    },
    {
      id: 'animation',
      icon: <Film size={32} className="text-primary" />,
      title: 'Animation',
      description: 'Engaging 2D and 3D animations for marketing, education, or entertainment purposes. We bring your ideas to life through motion and storytelling.',
      tiers: [
        {
          name: '2D Animation',
          price: '30,000 TZS',
          features: [
            '30-second animation',
            'Character design',
            'Storyboarding',
            'Background design',
            'Basic sound effects',
          ],
        },
        {
          name: '3D Animation',
          price: '50,000 TZS',
          features: [
            '30-second animation',
            '3D modeling',
            'Texturing',
            'Lighting and rendering',
            'Basic sound design',
          ],
        },
        {
          name: 'Explainer Video',
          price: '100,000 TZS',
          features: [
            '60-second animated explainer',
            'Script writing',
            'Voice-over',
            'Background music',
            'Custom illustrations',
          ],
        },
      ],
    },
    {
      id: 'video',
      icon: <Video size={32} className="text-primary" />,
      title: 'Video Editing',
      description: 'Professional video editing services for commercials, social media content, corporate videos, and more. We transform raw footage into compelling visual stories.',
      tiers: [
        {
          name: 'Basic Edit',
          price: '50,000 TZS',
          features: [
            'Up to 3-minute video',
            'Basic color correction',
            'Simple transitions',
            'Text overlays',
            'Background music',
          ],
        },
        {
          name: 'Standard Edit',
          price: '80,000 TZS',
          features: [
            'Up to 5-minute video',
            'Advanced color grading',
            'Custom transitions',
            'Motion graphics',
            'Sound design',
            'Basic visual effects',
          ],
        },
        {
          name: 'Premium Edit',
          price: '150,000 TZS',
          features: [
            'Up to 10-minute video',
            'Professional color grading',
            'Advanced visual effects',
            'Custom motion graphics',
            'Professional sound mixing',
            'Multiple revision rounds',
          ],
        },
      ],
    },
    {
      id: 'mobile',
      icon: <Smartphone size={32} className="text-primary" />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for Android and iOS that help you engage with your customers and streamline your business processes.',
      tiers: [
        {
          name: 'Basic App',
          price: '150,000 TZS',
          features: [
            'Single platform (Android or iOS)',
            'Up to 5 screens',
            'Basic functionality',
            'Standard UI components',
            '1 month of support',
          ],
        },
        {
          name: 'Standard App',
          price: '200,000 TZS',
          features: [
            'Cross-platform (Android and iOS)',
            'Up to 10 screens',
            'User authentication',
            'Custom UI design',
            'Basic API integration',
            '3 months of support',
          ],
        },
        {
          name: 'Premium App',
          price: '250,000 TZS',
          features: [
            'Native apps for Android and iOS',
            'Unlimited screens',
            'Advanced features (e.g., maps, payments)',
            'Offline functionality',
            'Complex API integration',
            'Push notifications',
            '6 months of support',
          ],
        },
      ],
    },
    {
      id: 'marketing',
      icon: <BarChart3 size={32} className="text-primary" />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing services to boost your online presence, increase brand awareness, and drive more leads and sales for your business.',
      tiers: [
        {
          name: 'Basic Package',
          price: '50,000 TZS/month',
          features: [
            'Social media management (2 platforms)',
            'Weekly content creation (8 posts/month)',
            'Basic SEO optimization',
            'Monthly performance report',
          ],
        },
        {
          name: 'Growth Package',
          price: '80,000 TZS/month',
          features: [
            'Social media management (4 platforms)',
            'Content creation (20 posts/month)',
            'SEO optimization',
            'Google Ads management',
            'Email marketing',
            'Bi-weekly performance reports',
          ],
        },
        {
          name: 'Premium Package',
          price: '100,000 TZS/month',
          features: [
            'Comprehensive social media management',
            'Daily content creation',
            'Advanced SEO strategy',
            'PPC campaign management',
            'Content marketing',
            'Email marketing campaigns',
            'Conversion rate optimization',
            'Weekly performance reports',
          ],
        },
      ],
    },
  ];

  // State to track which services have expanded pricing info
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    if (expandedService === serviceId) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceId);
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Comprehensive IT solutions tailored to meet your business needs and help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Explore our comprehensive range of IT services designed to help your business succeed in the digital world."
          />

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleService(service.id)}
                      className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                    >
                      {expandedService === service.id ? (
                        <>
                          Hide Pricing <ChevronUp size={18} className="ml-1" />
                        </>
                      ) : (
                        <>
                          View Pricing <ChevronDown size={18} className="ml-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Pricing Tiers */}
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {service.tiers.map((tier, tierIndex) => (
                          <div
                            key={tierIndex}
                            className={`border rounded-xl p-6 ${
                              tierIndex === 1
                                ? 'border-primary bg-primary/5 dark:bg-primary/10'
                                : 'border-gray-200 dark:border-gray-700'
                            }`}
                          >
                            <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
                            <p className="text-2xl font-bold text-primary mb-4">{tier.price}</p>
                            <ul className="space-y-3">
                              {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start">
                                  <CheckCircle2 size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Our Work Process" 
            subtitle="We follow a structured approach to ensure high-quality results for every project."
          />

          <div className="relative">
            {/* Process Timeline */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We start by understanding your business, goals, and requirements through in-depth consultations.',
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Based on the discovery phase, we create a detailed project plan with timelines and deliverables.',
                },
                {
                  step: '03',
                  title: 'Design',
                  description: 'Our creative team develops design concepts that align with your brand and project objectives.',
                },
                {
                  step: '04',
                  title: 'Development',
                  description: 'Our technical experts bring the designs to life using the latest technologies and best practices.',
                },
                {
                  step: '05',
                  title: 'Testing',
                  description: 'We thoroughly test everything to ensure it works perfectly and meets all requirements.',
                },
                {
                  step: '06',
                  title: 'Deployment',
                  description: 'Once approved, we launch your project and provide training on how to use it effectively.',
                },
                {
                  step: '07',
                  title: 'Support',
                  description: 'We offer ongoing support and maintenance to ensure your project continues to perform optimally.',
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
                      <span className="inline-block text-3xl font-bold text-primary/30 mb-2">
                        {process.step}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us today to discuss your requirements and get a personalized quote for your project.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;