import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Award, MapPin, Mail, Phone, FileCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import pfImage from '../components/pf.png'; // Import the local image

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageTransition>
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="About Me" 
            subtitle="Learn more about my background, expertise, and passion for network security."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-gray-700">
                {/* Updated this line to use inline style for background image */}
               <div 
  className="absolute inset-0 bg-cover bg-center" 
  style={{ 
    backgroundImage: `url(${pfImage})`, 
    backgroundSize: 'contain',  // To fit the image within the container while preserving its aspect ratio
    backgroundPosition: 'center', // Keep the image centered
    backgroundRepeat: 'no-repeat' // Prevent the image from repeating
  }}
></div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Muhammed Umer</h3>
                  <p className="text-blue-400 font-medium">Network Security Specialist</p>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-gray-300">
                      <MapPin size={18} className="mr-3 text-gray-400" />
                      <span>Karachi, PK</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail size={18} className="mr-3 text-gray-400" />
                      <span>contact@muhammedumer.com</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone size={18} className="mr-3 text-gray-400" />
                      <span>+92 313 6253035</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certifications Quick View */}
              <motion.div 
                className="mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award size={20} className="mr-2 text-yellow-500" />
                  Key Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FileCheck size={18} className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <span>CISSP (Certified Information Systems Security Professional)</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck size={18} className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <span>CEH (Certified Ethical Hacker)</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck size={18} className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <span>CCNP Security (Cisco Certified Network Professional)</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Bio */}
              <motion.div 
                className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-4">Professional Biography</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    With a solid foundation in network security and a keen interest in protecting organizations from cyber threats, I am working to build my career in this ever-evolving field. I have experience in assisting with firewall configurations, conducting vulnerability assessments, and supporting penetration testing efforts to strengthen security defenses.
                  </p>
                  <p>
                    I am eager to continue learning and growing my skills to contribute to innovative security solutions. As I progress in my career, I aim to support organizations in improving their security posture and safeguarding their valuable data from potential risks.
                  </p>
                  <p>
                    I focus on translating technical security concepts into understandable terms for various audiences, and I am committed to fostering a security-conscious mindset within teams and organizations as I gain experience and expertise in the field.
                  </p>
                </div>
              </motion.div>
              
              {/* Experience */}
              <motion.div 
                className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-6">Professional Experience</h3>
                <div className="space-y-8">
                  <div className="relative pl-8 border-l border-gray-700 pb-2">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="flex justify-between mb-1">
                      <h4 className="text-lg font-medium">Lead Security Specialist</h4>
                      <div className="flex items-center text-blue-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>2020 - Present</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">TechShield Security Solutions</p>
                    <p className="text-gray-300">
                      Leading a team of security professionals in implementing and maintaining comprehensive security solutions for enterprise clients.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l border-gray-700 pb-2">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="flex justify-between mb-1">
                      <h4 className="text-lg font-medium">Network Security Consultant</h4>
                      <div className="flex items-center text-purple-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>2016 - 2020</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">CyberDefense Partners</p>
                    <p className="text-gray-300">
                      Provided security consulting services, conducting risk assessments and implementing security solutions for clients across multiple industries.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-500"></div>
                    <div className="flex justify-between mb-1">
                      <h4 className="text-lg font-medium">Network Engineer</h4>
                      <div className="flex items-center text-teal-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>2013 - 2016</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">Global Systems Inc.</p>
                    <p className="text-gray-300">
                      Managed network infrastructure and implemented security protocols for corporate environments.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Education */}
              <motion.div 
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-900/30 rounded-lg">
                      <GraduationCap className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Master of Science in Cybersecurity</h4>
                      <p className="text-gray-400">Stanford University</p>
                      <div className="flex items-center text-blue-400 text-sm mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>2011 - 2013</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-purple-900/30 rounded-lg">
                      <GraduationCap className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Bachelor of Science in Computer Science</h4>
                      <p className="text-gray-400">Iqra University, Karachi</p>
                      <div className="flex items-center text-purple-400 text-sm mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>2007 - 2011</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
