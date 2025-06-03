import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Lock, FileCode, Wifi, Globe, Database, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const skills = [
  {
    category: 'Network Security',
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    items: [
      { name: 'Firewall Configuration', proficiency: 95 },
      { name: 'VPN Implementation', proficiency: 90 },
      { name: 'Network Monitoring', proficiency: 92 },
      { name: 'IDS/IPS Setup', proficiency: 88 }
    ]
  },
  {
    category: 'Infrastructure',
    icon: <Server className="w-8 h-8 text-purple-500" />,
    items: [
      { name: 'Server Hardening', proficiency: 93 },
      { name: 'Network Architecture', proficiency: 87 },
      { name: 'Cloud Security', proficiency: 85 },
      { name: 'Disaster Recovery', proficiency: 82 }
    ]
  },
  {
    category: 'Penetration Testing',
    icon: <Lock className="w-8 h-8 text-red-500" />,
    items: [
      { name: 'Vulnerability Assessment', proficiency: 90 },
      { name: 'Ethical Hacking', proficiency: 85 },
      { name: 'Security Auditing', proficiency: 88 },
      { name: 'Risk Mitigation', proficiency: 84 }
    ]
  },
  {
    category: 'Compliance & Standards',
    icon: <FileCode className="w-8 h-8 text-teal-500" />,
    items: [
      { name: 'ISO 27001', proficiency: 80 },
      { name: 'NIST Framework', proficiency: 85 },
      { name: 'GDPR', proficiency: 82 },
      { name: 'PCI DSS', proficiency: 87 }
    ]
  }
];

const certifications = [
  'Certified Information Systems Security Professional (CISSP)',
  'Certified Ethical Hacker (CEH)',
  'CompTIA Security+',
  'Cisco Certified Network Professional Security (CCNP Security)',
  'Offensive Security Certified Professional (OSCP)'
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <PageTransition>
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Skills & Expertise" 
            subtitle="A comprehensive overview of my technical skills and areas of expertise in network security."
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="card"
                variants={itemVariants}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                
                <div className="space-y-5">
                  {skill.items.map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="text-gray-400">{item.proficiency}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                >
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-200">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Skills;