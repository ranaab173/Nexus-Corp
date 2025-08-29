
import React from 'react';
import { ImageAssets } from './ImageAssets';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#020215] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 p-6 md:p-10">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-widest glow-text-purple mb-6">About Nexus</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Our Mission</h3>
                  <p className="text-gray-300">
                    To empower visionary organizations by decoding complexity and engineering clarity. We build the frameworks for sustainable growth in a perpetually evolving digital landscape.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Our Vision</h3>
                  <p className="text-gray-300">
                    To be the catalyst for the fourth industrial revolution, creating a future where technology and human ingenuity converge to solve the world’s most critical challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            <div className="absolute w-[70%] h-[90%] right-0 top-0">
              <img src={ImageAssets.about1} alt="Corporate Vision" className="w-full h-full object-cover clip-path-hexagon" />
               <div className="absolute inset-0 bg-purple-500/30 mix-blend-color"></div>
            </div>
            <div className="absolute w-[60%] h-[70%] left-0 bottom-0">
              <img src={ImageAssets.about2} alt="Team Innovation" className="w-full h-full object-cover clip-path-trapezoid" />
              <div className="absolute inset-0 bg-cyan-500/30 mix-blend-color"></div>
            </div>
             <style>{`
                .clip-path-hexagon { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
                .clip-path-trapezoid { clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
