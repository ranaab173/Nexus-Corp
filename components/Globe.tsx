
import React from 'react';

const Globe: React.FC = () => {
  const particleCount = 50;

  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full perspective-1000">
      <style>{`
        @keyframes rotate {
          0% { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
        @keyframes rotate-reverse {
          0% { transform: rotateX(20deg) rotateY(360deg); }
          100% { transform: rotateX(20deg) rotateY(0deg); }
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 1; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.7; }
          100% { transform: translateY(0px) scale(1); opacity: 1; }
        }
      `}</style>

      {/* Particles */}
      <div className="absolute w-full h-full">
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
              boxShadow: '0 0 5px #00ffff',
            }}
          />
        ))}
      </div>
      
      {/* Globe structure */}
      <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative transform-style-3d animate-[rotate_40s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 transform rotate-y-60"></div>
        <div className="absolute inset-0 rounded-full border border-cyan-500/10 transform rotate-y-120"></div>

        {/* Rings */}
        <div className="absolute inset-[-20px] rounded-full border border-cyan-500/30 animate-[rotate-reverse_30s_linear_infinite]"></div>
        <div className="absolute inset-[-40px] rounded-full border border-purple-500/20 animate-[rotate_35s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default Globe;
