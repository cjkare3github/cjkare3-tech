import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Erasto Kamuli Jelemia',
      role: 'CEO & Founder',
      bio: 'Expert in web design and development with a passion for creating innovative digital solutions.',
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
      name: 'Christina Kamuli Jeremiah',
      role: 'Animation Specialist',
      bio: 'Talented animator and video editor creating engaging visual content for various platforms.',
      image: '/src/images/tina.jpg',
      email: 'christinajeremiah@gmail.com',
      phone: '+255697472243',
      socials: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Zainab Athuman Amiry',
      role: 'Graphics Designer',
      bio: 'Creative graphics designer with expertise in brand identity and digital marketing strategies.',
      image: '/src/images/zainabu.jpg',
      email: 'zainabamiry31@gmail.com',
      phone: '+255621382624',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Alexanda Steven Msisi',
      role: 'Mobile Developer',
      bio: 'Experienced mobile app developer specializing in native and cross-platform solutions.',
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
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Meet Our Team" 
          subtitle="Our talented professionals are dedicated to delivering exceptional services and innovative solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                
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
          <Link to="/team" className="btn btn-primary">
            View Full Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;