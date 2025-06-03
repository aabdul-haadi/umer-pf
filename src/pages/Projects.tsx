import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, Server, Database, AlertTriangle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'Enterprise Firewall Implementation',
    description: 'Deployed a next-generation firewall system for a financial institution, enhancing security posture and reducing vulnerabilities by 87%.',
    technologies: ['Palo Alto Networks', 'Cisco ASA', 'IDS/IPS', 'Zero Trust Architecture'],
    icon: <Shield className="text-blue-500" />,
    color: 'blue'
  },
  {
    id: 2,
    title: 'Network Segmentation Project',
    description: 'Redesigned network architecture for a healthcare provider to isolate sensitive patient data and implement compliance controls.',
    technologies: ['VLANs', 'ACLs', 'Micro-segmentation', 'HIPAA Compliance'],
    icon: <Server className="text-purple-500" />,
    color: 'purple'
  },
  {
    id: 3,
    title: 'Threat Detection System',
    description: 'Implemented an advanced threat detection system for a retail chain with 200+ locations, providing real-time alerts and automated responses.',
    technologies: ['SIEM', 'EDR', 'Behavioral Analytics', 'Machine Learning'],
    icon: <AlertTriangle className="text-yellow-500" />,
    color: 'yellow'
  },
  {
    id: 4,
    title: 'Secure Cloud Migration',
    description: 'Led the security aspects of a major cloud migration project, ensuring data protection throughout the transition process.',
    technologies: ['AWS Security', 'Azure Sentinel', 'Cloud Access Security Broker', 'IAM'],
    icon: <Database className="text-teal-500" />,
    color: 'teal'
  }
];

const Projects = () => {
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
    <PageTransition backgroundImage="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg">
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Security Projects" 
            subtitle="Explore some of my recent work in network security and infrastructure protection."
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`card hover:border-${project.color}-600 group`}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-full bg-${project.color}-900/30 mr-4`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`text-xs py-1 px-2 rounded-full bg-gray-700 text-gray-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-right">
                  <button className={`text-${project.color}-500 inline-flex items-center text-sm font-medium group-hover:underline`}>
                    View Details <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;