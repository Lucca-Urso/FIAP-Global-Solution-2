const Contact = ({ title, description, buttonText, buttonLink, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary via-primary-light to-primary-dark text-text-primary',
    secondary: 'bg-gradient-to-r from-secondary to-secondary-dark text-white',
    outline: 'bg-transparent border-2 border-secondary text-text-primary',
  };

  const buttonVariants = {
    primary: 'bg-gradient-to-r from-secondary to-secondary-dark text-white hover:from-secondary-light hover:to-secondary shadow-lg hover:shadow-secondary/40',
    secondary: 'bg-text-primary text-primary hover:bg-text-secondary shadow-lg',
  };

  return (
    <section className={`py-24 ${variants[variant]}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-text-primary/10 border border-text-primary/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            {variant === 'primary' ? 'Junte-se a Nós' : 'Comece Agora'}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        {buttonText && buttonLink && (
          <a href={buttonLink}
            className={`inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${buttonVariants[variant]}`}>
            {buttonText}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        )}
      </div>
    </section>
  );
};

export default Contact;