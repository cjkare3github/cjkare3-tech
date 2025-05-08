import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const ContactPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Get in touch with our team to discuss your project or request a quote for our services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            {[
              {
                icon: <Phone size={24} className="text-primary" />,
                title: 'Phone',
                details: [
                  { label: 'Main', value: '+255 676 027 855', link: 'tel:+255676027855' },
                  { label: 'Alternative', value: '+255 616 083 055', link: 'tel:+255616083055' },
                ],
              },
              {
                icon: <Mail size={24} className="text-primary" />,
                title: 'Email',
                details: [
                  { label: 'General Inquiries', value: 'erastojelemia@gmail.com', link: 'mailto:erastojelemia@gmail.com' },
                ],
              },
              {
                icon: <MapPin size={24} className="text-primary" />,
                title: 'Location',
                details: [
                  { label: 'Office', value: 'Mwanza, Tanzania', link: 'https://maps.google.com/?q=Mwanza,Tanzania' },
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full inline-flex">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{detail.label}: </span>
                      <a 
                        href={detail.link} 
                        className="font-medium hover:text-primary transition-colors"
                        target={detail.link.startsWith('https') ? '_blank' : undefined}
                        rel={detail.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                      >
                        {detail.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Send Us a Message
              </h3>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="Erasto Kamuli"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="erastojelemia@gmail.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="+255 676027855"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Design & Development</option>
                    <option value="graphics">Graphics Design</option>
                    <option value="animation">Animation</option>
                    <option value="video">Video Editing</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full sm:w-auto flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </motion.div>
            
            {/* Contact Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127154.98789507752!2d32.844798563191915!3d-2.5166861682947258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ce54150bb15f39%3A0x11e262ec810a9c1a!2sMwanza%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1695913134296!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CJKARE3 TECHNOLOGY location"
                ></iframe>
              </div>
              
              {/* Business Hours */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services and processes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What services does CJKARE3 TECHNOLOGY offer?",
                answer: "We offer a wide range of IT services including web design and development, graphics design, animation (2D and 3D), video editing, mobile app development, and digital marketing services."
              },
              {
                question: "How much do your services cost?",
                answer: "Our pricing varies depending on the specific requirements of your project. We offer different packages for each service, starting from as low as 15,000 TZS for basic graphics design to 500,000 TZS for premium mobile app development. Please contact us for a personalized quote."
              },
              {
                question: "How long does it take to complete a project?",
                answer: "Project timelines vary based on complexity and scope. A basic website might take 1-2 weeks, while a complex mobile app could take 2-3 months. We'll provide you with a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we provide ongoing support and maintenance for all our projects. Depending on the service package, we offer free maintenance periods ranging from 1 to 6 months, with options to extend through maintenance contracts."
              },
              {
                question: "Can you help with an existing project that needs updates?",
                answer: "Absolutely! We're experienced in working with existing projects. We'll evaluate your current setup and recommend the best approach for updates or improvements."
              },
              {
                question: "How do I get started with CJKARE3 TECHNOLOGY?",
                answer: "Simply contact us through our contact form, email, or phone. We'll schedule an initial consultation to discuss your project requirements, provide a quote, and outline the next steps."
              },
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;