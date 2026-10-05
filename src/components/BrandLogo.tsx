import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'brand-slate';
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  showBadge = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  // Color configurations
  const textColor =
    variant === 'dark'
      ? '#1a2427'
      : variant === 'brand-slate'
      ? '#546d75'
      : '#F0F4F5';

  const logoSvg = (
    <svg
      viewBox="0 0 280 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} w-auto transition-transform duration-300`}
      aria-label="NOKA Sushi"
      role="img"
    >
      {/* "Nōka" Main Wordmark */}
      <g fill={textColor} style={{ filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.15))' }}>
        {/* N */}
        <path
          d="M20 78V26h9l20 32V26h9v52h-9L29 46v32H20z"
          fillRule="evenodd"
        />
        
        {/* ō with Macron */}
        {/* Macron bar */}
        <rect x="74" y="27" width="22" height="5" rx="2.5" />
        {/* 'o' letter */}
        <path
          d="M85 39c12 0 20 8 20 20s-8 20-20 20-20-8-20-20 8-20 20-20zm0 9c-6.5 0-10.5 4.8-10.5 11s4 11 10.5 11 10.5-4.8 10.5-11-4-11-10.5-11z"
          fillRule="evenodd"
        />

        {/* k */}
        <path
          d="M117 24h9v27l18-18h12l-18 18 19 27h-12l-14-20-5 5v15h-9V24z"
          fillRule="evenodd"
        />

        {/* a */}
        <path
          d="M174 41c10 0 17 6 17 15v22h-8v-6c-2.5 4.5-8 7-14 7-8.5 0-14-5-14-12 0-7.5 6-12 17-12h11v-2c0-4.5-3.5-7-9.5-7-4.5 0-8 1.5-11 4.5l-5-5.5c4.5-4.5 10.5-6.5 16.5-6.5zm9 21h-9.5c-6 0-9.5 2.5-9.5 6.5 0 4 3.5 6.5 8.5 6.5 6 0 10.5-3.5 10.5-9v-4z"
          fillRule="evenodd"
        />
      </g>

      {/* "SUSHI" Submark in geometric modern caps */}
      <g fill={textColor} opacity="0.95">
        {/* S */}
        <path d="M113 103c-1.5-1.5-3.5-2.2-6-2.2-4.5 0-7.5 2.5-7.5 6 0 7.5 14 3.5 14 12 0 4.5-3.5 7.5-8.5 7.5-3.5 0-6.5-1.2-8.5-3.5l3.2-3.8c1.5 1.5 3.2 2.3 5.3 2.3 2.5 0 4.2-1.2 4.2-2.8 0-7.5-14-3.5-14-12 0-4.5 3.5-7.5 8.5-7.5 3.2 0 6 1 8 3l-2.7 3z" />
        
        {/* U */}
        <path d="M125 98h5v16c0 5 3 7.5 7 7.5s7-2.5 7-7.5V98h5v16c0 8-5 12.5-12 12.5s-12-4.5-12-12.5V98z" />
        
        {/* S */}
        <path d="M165 103c-1.5-1.5-3.5-2.2-6-2.2-4.5 0-7.5 2.5-7.5 6 0 7.5 14 3.5 14 12 0 4.5-3.5 7.5-8.5 7.5-3.5 0-6.5-1.2-8.5-3.5l3.2-3.8c1.5 1.5 3.2 2.3 5.3 2.3 2.5 0 4.2-1.2 4.2-2.8 0-7.5-14-3.5-14-12 0-4.5 3.5-7.5 8.5-7.5 3.2 0 6 1 8 3l-2.7 3z" />
        
        {/* H */}
        <path d="M178 98h5v11.5h11V98h5v27h-5v-11h-11v11h-5V98z" />
        
        {/* I */}
        <path d="M206 98h5v27h-5V98z" />
      </g>
    </svg>
  );

  if (showBadge) {
    return (
      <div
        className={`inline-flex items-center justify-center p-3 rounded-xl bg-[#546d75] shadow-lg shadow-black/20 ${className}`}
      >
        {logoSvg}
      </div>
    );
  }

  return <div className={`inline-flex items-center ${className}`}>{logoSvg}</div>;
};
