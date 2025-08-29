
import React from 'react';

// In a real project, these would be local paths like '/images/logo.svg'
// For this demo, we use placeholders. The structure allows for easy replacement.
export const ImageAssets = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#8A2BE2" />
        </linearGradient>
      </defs>
      <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="900" fill="url(#logo-gradient)">
        NEXUS
      </text>
    </svg>
  ),
  about1: 'https://picsum.photos/seed/futurecorp1/400/600',
  about2: 'https://picsum.photos/seed/futurecorp2/400/500',
  caseStudy1: 'https://picsum.photos/seed/futurecase1/600/400',
  caseStudy2: 'https://picsum.photos/seed/futurecase2/600/400',
  caseStudy3: 'https://picsum.photos/seed/futurecase3/600/400',
  caseStudy4: 'https://picsum.photos/seed/futurecase4/600/400',
};
