
import React from 'react';
import { ImageAssets } from './ImageAssets.tsx';
import ArrowRightIcon from './icons/ArrowRightIcon.tsx';

interface CaseStudy {
  image: string;
  category: string;
  title: string;
  description: string;
}

const caseStudiesData: CaseStudy[] = [
  { image: ImageAssets.caseStudy1, category: 'AI & Automation', title: 'AeroCorp Dynamics', description: 'Implemented a predictive maintenance AI, reducing downtime by 40%.' },
  { image: ImageAssets.caseStudy2, category: 'Blockchain', title: 'FinSecure Ledger', description: 'Developed a decentralized platform for secure inter-bank transactions.' },
  { image: ImageAssets.caseStudy3, category: 'IoT Integration', title: 'UrbanMatrix', description: 'Architected a smart city sensor network for real-time traffic optimization.' },
  { image: ImageAssets.caseStudy4, category: 'Market Strategy', title: 'Helios Energy', description: 'Pioneered a market entry strategy for renewable energy, capturing 15% market share in one year.' },
];

const CaseStudyCard: React.FC<CaseStudy> = ({ image, category, title, description }) => (
  <div className="flex-shrink-0 w-80 sm:w-96 group relative overflow-hidden rounded-lg">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <p className="text-sm font-semibold text-cyan-400 mb-1">{category}</p>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{description}</p>
      <a href="#" className="inline-flex items-center text-cyan-400 mt-4 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
        Read More <ArrowRightIcon className="ml-1 w-4 h-4" />
      </a>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-widest glow-text-cyan">Case Studies</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Evidence of our impact across industries.</p>
        </div>
      </div>
      <div className="pl-4 sm:pl-6 lg:pl-8">
        <div className="flex space-x-8 pb-4 overflow-x-auto horizontal-scrollbar">
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
          {/* Add a spacer at the end */}
          <div className="flex-shrink-0 w-1"></div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;