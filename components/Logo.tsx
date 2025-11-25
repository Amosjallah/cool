import React, { useId } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  const maskId = useId();

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cool Job Services Logo"
    >
      <defs>
        <mask id={maskId}>
          {/* Base mask: visible everywhere */}
          <rect width="100" height="100" fill="white" />
          
          {/* Cut out the center to make a ring */}
          <circle cx="50" cy="55" r="24" fill="black" />
          
          {/* Cut out the "GH" text on the top right extension */}
          <text 
            x="61" 
            y="33" 
            fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" 
            fontWeight="900" 
            fontSize="18" 
            fill="black"
            style={{ letterSpacing: '-1px' }}
          >
            GH
          </text>
          
          {/* Cut out the diagonal stripes at the bottom */}
          <line x1="45" y1="95" x2="58" y2="78" stroke="black" strokeWidth="3" />
          <line x1="53" y1="98" x2="66" y2="81" stroke="black" strokeWidth="3" />
          <line x1="61" y1="101" x2="74" y2="84" stroke="black" strokeWidth="3" />
        </mask>
      </defs>
      
      <g mask={`url(#${maskId})`} fill="currentColor">
        {/* Main circular body */}
        <circle cx="50" cy="55" r="40" />
        {/* Top right extension for GH */}
        <rect x="50" y="15" width="40" height="26" />
        {/* Connector cleanup for smooth look between circle and rect */}
        <path d="M 50 15 L 90 15 L 90 55 L 50 55 Z" />
      </g>
    </svg>
  );
};

export default Logo;
