interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 40 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Green background square */}
      <rect width="100" height="100" fill="hsl(var(--primary))" rx="8" />
      
      {/* Grass/plant blades forming M shape */}
      <g fill="hsl(var(--primary-foreground))">
        {/* Left blade group */}
        <path d="M15 95 Q20 60 25 30 Q30 50 28 95 Z" fill="currentColor" className="text-foreground" />
        <path d="M25 95 Q32 55 40 25 Q45 50 38 95 Z" fill="currentColor" className="text-foreground" />
        
        {/* Center blades (peak of M) */}
        <path d="M38 95 Q45 45 50 15 Q55 45 62 95 Z" fill="currentColor" className="text-foreground" />
        
        {/* Right blade group */}
        <path d="M55 95 Q58 55 65 25 Q72 50 70 95 Z" fill="currentColor" className="text-foreground" />
        <path d="M68 95 Q72 60 78 30 Q82 55 82 95 Z" fill="currentColor" className="text-foreground" />
      </g>
    </svg>
  );
};

export default Logo;
