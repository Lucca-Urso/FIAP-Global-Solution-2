const SectionTitle = ({ title, subtitle, align = 'center', variant = 'h2' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const TitleTag = variant;

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <div className="inline-block">
        <TitleTag className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
          {title}
        </TitleTag>
      </div>
      {subtitle && (
        <div className="mt-4 max-w-2xl mx-auto">
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      )}
      <div className={`mt-6 w-24 h-1.5 bg-gradient-to-r from-secondary to-secondary-dark rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;