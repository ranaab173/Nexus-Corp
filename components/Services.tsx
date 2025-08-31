
import React from 'react';
import ConsultingIcon from './icons/ConsultingIcon.tsx';
import StrategyIcon from './icons/StrategyIcon.tsx';
import InnovationIcon from './icons/InnovationIcon.tsx';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="relative p-8 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-2 border-l-2 border-cyan-400 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-2 border-r-2 border-purple-500 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

    <div className="relative z-10">
      <div className="mb-4 text-cyan-400 transition-colors duration-300 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <StrategyIcon className="h-10 w-10" />,
      title: 'Quantum Strategy',
      description: 'Leveraging predictive analytics and market synthesis to formulate resilient, future-proof business strategies.'
    },
    {
      icon: <ConsultingIcon className="h-10 w-10" />,
      title: 'Digital Transformation',
      description: 'Integrating next-gen AI, blockchain, and IoT to redefine operational efficiency and customer engagement.'
    },
    {
      icon: <InnovationIcon className="h-10 w-10" />,
      title: 'Disruptive Innovation',
      description: 'Incubating and scaling groundbreaking ideas that challenge market conventions and create new paradigms.'
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-widest glow-text-cyan">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Pioneering the next wave of corporate evolution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;