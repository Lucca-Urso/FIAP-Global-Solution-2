const Header = ({ title, subtitle, contactText, contactLink, backgroundImage }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : 'linear-gradient(135deg, #000000 0%, #0F172A 30%, #1E1B4B 70%, #312E81 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary-dark/70"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary-dark/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary-light/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-secondary-light/35 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-secondary/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-secondary-light/30 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/5 right-1/3 w-1 h-1 bg-secondary/20 rounded-full animate-pulse delay-600"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-6 py-3 bg-secondary/20 border border-secondary/30 rounded-full text-secondary-light text-sm font-medium backdrop-blur-sm">
            Monitoramento Climático Inteligente
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-tight">
          {title}
        </h1>
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            {subtitle}
          </p>
        </div>
        {contactText && contactLink && (
          <a href={contactLink}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-full hover:from-secondary-light hover:to-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary/40">
            {contactText}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-secondary-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  );
};

export default Header;