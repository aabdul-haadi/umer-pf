import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Database, Check, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const pricingData = [
  {
    id: 'basic',
    title: 'Basic',
    description: 'Small-scale security audits for startups and small businesses.',
    price: '$1,999',
    period: 'per audit',
    icon: <Shield className="w-10 h-10 text-blue-500" />,
    features: [
      'Network vulnerability scan',
      'Basic firewall configuration review',
      'Security policy assessment',
      'Password management recommendations',
      'Employee security awareness tips',
      'Basic incident response plan'
    ],
    color: 'blue',
    recommended: false
  },
  {
    id: 'standard',
    title: 'Standard',
    description: 'Full network analysis for medium-sized organizations.',
    price: '$4,999',
    period: 'per analysis',
    icon: <Server className="w-10 h-10 text-purple-500" />,
    features: [
      'Everything in Basic',
      'Comprehensive penetration testing',
      'Advanced firewall implementation',
      'VPN security assessment',
      'Wireless network security audit',
      'Remote work security solutions',
      'Data encryption implementation',
      'Quarterly security review'
    ],
    color: 'purple',
    recommended: true
  },
  {
    id: 'premium',
    title: 'Premium',
    description: 'Enterprise-level security & ongoing support.',
    price: '$9,999',
    period: 'per year',
    icon: <Database className="w-10 h-10 text-teal-500" />,
    features: [
      'Everything in Standard',
      '24/7 security monitoring',
      'Custom security architecture design',
      'Advanced threat detection system',
      'Security compliance management',
      'Incident response team access',
      'Executive security briefings',
      'Employee security training',
      'Annual security roadmap'
    ],
    color: 'teal',
    recommended: false
  }
];

const Pricing = () => {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <PageTransition>
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Pricing & Services" 
            subtitle="Choose the right security package for your business needs."
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {pricingData.map((plan) => (
              <motion.div 
                key={plan.id}
                className={`card relative ${plan.recommended ? 'border-purple-500 ring-2 ring-purple-500/20' : ''}`}
                variants={itemVariants}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="flex justify-center mb-6">
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-1">{plan.title}</h3>
                <p className="text-gray-400 text-center mb-5 h-12">{plan.description}</p>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className={`text-${plan.color}-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <button 
                    className={`w-full btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} py-3`}
                  >
                    Get Started <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center bg-gray-800 p-8 rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Every organization has unique security requirements. Contact me for a personalized security assessment and tailored solutions that fit your specific needs and budget.
            </p>
            <button className="btn btn-primary">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Pricing;