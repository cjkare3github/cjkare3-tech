import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, Phone, Users, Award, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedText from '../components/common/AnimatedText';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  experience: string[];
  image: string;
  email: string;
  phone: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TeamPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Erasto Kamuli Jelemia',
      role: 'CEO & Founder',
      bio: 'Erasto is the visionary founder and CEO of CJKARE3 TECHNOLOGY. With extensive experience in web design and development, he leads the company with a focus on innovation, quality, and client satisfaction.',
      experience: [
        'Full-stack web development',
        'UI/UX design',
        'E-commerce solutions',
        'Web application architecture',
        'SEO and performance optimization',
      ],
      image: '/src/images/me2.png',
      email: 'erastojelemia@gmail.com',
      phone: '+255676027855',
      socials: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 2,
      name: 'Christina Kamuli Jeremiah',
      role: 'Animation Specialist',
      bio: 'Christina is our creative animation and video editing expert. Her passion for visual storytelling and attention to detail allows her to create captivating animations and videos that engage audiences.',
      experience: [
        '2D and 3D animation',
        'Motion graphics',
        'Character design',
        'Video editing and post-production',
        'Visual effects',
      ],
      image: '/src/images/tina.jpg',
      email: 'christinajeremiah232004@gmail.com',
      phone: '+255697472243',
      socials: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      id: 3,
      name: 'Zainab Athuman Amiry',
      role: 'Graphics Designer',
      bio: 'Zainab leads our graphics design and digital marketing efforts. Her creative vision and strategic thinking help clients establish strong brand identities and effective marketing campaigns.',
      experience: [
        'Brand identity design',
        'Print and digital graphics',
        'Social media marketing',
        'Content creation',
        'Digital advertising',
      ],
      image: '/src/images/zainabu.jpg',
      email: 'zainabamiry31@gmail.com',
      phone: '+255621382624',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 4,
      name: 'Alexanda Steven Msisi',
      role: 'Mobile Developer',
      bio: 'Alexanda specializes in mobile app development and services. His technical expertise and problem-solving skills enable him to create powerful, user-friendly mobile applications for various platforms.',
      experience: [
        'Native Android and iOS development',
        'Cross-platform solutions',
        'Mobile UI design',
        'App performance optimization',
        'Mobile backend development',
      ],
      image: '/src/images/alex.jpg',
      email: 'alexandamsisi47@gmail.com',
      phone: '+255616413668',
      socials: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Meet the talented professionals behind CJKARE3 TECHNOLOGY who make digital excellence possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full mb-4 font-medium">
              The Heart of Our Company
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <AnimatedText text="Meet the Experts Behind Our Success" />
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300">
              Our team combines diverse skills, creativity, and technical expertise to deliver exceptional IT solutions. Each member brings unique talents and perspectives that contribute to our collective success and enable us to provide comprehensive services to our clients.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:w-3/5">
                    <span className="text-primary font-medium">{member.role}</span>
                    <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                    
                    <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                    <ul className="mb-4 space-y-1">
                      {member.experience.map((skill, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{skill}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center mb-2">
                      <Mail size={16} className="text-primary mr-2" />
                      <a href={`mailto:${member.email}`} className="text-sm hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Phone size={16} className="text-primary mr-2" />
                      <a href={`tel:${member.phone}`} className="text-sm hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    
                    <div className="flex space-x-3">
                      {member.socials.facebook && (
                        <a 
                          href={member.socials.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook size={16} />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a 
                          href={member.socials.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a 
                          href={member.socials.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users size={40} className="text-primary" />, number: '4+', label: 'Team Members' },
              { icon: <Award size={40} className="text-primary" />, number: '100+', label: 'Projects Completed' },
              { icon: <CheckCircle2 size={40} className="text-primary" />, number: '95%', label: 'Client Satisfaction' },
              { icon: <Users size={40} className="text-primary" />, number: '50+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-primary text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl mb-8">
                We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;