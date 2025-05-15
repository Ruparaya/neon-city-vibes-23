
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  textColor?: string;
  glowColor?: 'pink' | 'cyan' | 'amber' | 'none';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  textColor = 'text-white',
  glowColor = 'pink',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const glowClasses = {
    pink: 'neon-text',
    cyan: 'neon-text-cyan',
    amber: 'neon-text-amber',
    none: '',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className={`font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wider ${textColor} ${glowClasses[glowColor]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
