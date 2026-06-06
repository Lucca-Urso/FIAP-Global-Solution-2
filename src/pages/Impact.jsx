import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Contact from '../components/Contact';

const Impact = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Impacto Social',
      description: 'Proteção de vidas humanas através de alertas preventivos que permitem evacuações e preparativos antecipados.',
      stats: [
        { value: '500+', label: 'Comunidades Protegidas' },
        { value: '1M+', label: 'Pessoas Impactadas' },
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Impacto Ambiental',
      description: 'Preservação de ecossistemas através do monitoramento de desmatamento, queimadas e mudanças climáticas.',
      stats: [
        { value: '50M+', label: 'Hectares Monitorados' },
        { value: '85%', label: 'Redução de Danos' },
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Impacto Econômico',
      description: 'Redução de prejuízos materiais através da antecipação de eventos extremos e planejamento preventivo.',
      stats: [
        { value: 'R$ 2Bi+', label: 'Economia Gerada' },
        { value: '40%', label: 'Redução de Perdas' },
      ],
    },
  ];

  const useCases = [
    {
      title: 'Defesa Civil',
      description: 'Órgãos de defesa civil utilizam nossos alertas para coordenar evacuações e alocar recursos de emergência de forma eficiente.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Prefeituras',
      description: 'Gestores municipais utilizam nossos dados para planejamento urbano, gestão de riscos e tomada de decisão em emergências.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Órgãos Ambientais',
      description: 'Agências ambientais monitoram desmatamento, queimadas e mudanças climáticas para formular políticas de preservação.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Gestão de Riscos',
      description: 'Empresas de seguro e gestão de riscos utilizam nossos dados para avaliação de exposição e precificação de apólices.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        title="Impacto Real na Prevenção de Desastres"
        subtitle="O Orbit Sentinel gera impacto mensurável na proteção de vidas, preservação ambiental e redução de prejuízos econômicos causados por eventos climáticos extremos."
      />

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Benefícios Gerados"
            subtitle="Nosso trabalho gera impacto positivo em múltiplas dimensões da sociedade."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">{benefit.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">{benefit.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {benefit.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="bg-bg-secondary rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-secondary-light mb-1">{stat.value}</div>
                      <div className="text-xs text-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Quem Utiliza"
            subtitle="Nossa plataforma é utilizada por organizações que trabalham na prevenção e gestão de desastres ambientais."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center text-secondary-light flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{useCase.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Casos de Sucesso"
            subtitle="Veja como o Orbit Sentinel está fazendo a diferença em comunidades e organizações."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="mb-4">
                <div className="flex text-secondary-light">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-text-secondary mb-6 italic">
                "O Orbit Sentinel nos alertou com 48 horas de antecedência sobre o risco de enchentes. 
                Conseguimos evacuar 200 famílias a tempo."
              </p>
              <div>
                <p className="font-semibold text-text-primary">Defesa Civil Municipal</p>
                <p className="text-sm text-text-muted">Região Serrana, RJ</p>
              </div>
            </div>

            <div className="card">
              <div className="mb-4">
                <div className="flex text-secondary-light">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-text-secondary mb-6 italic">
                "Os dados de monitoramento de queimadas nos permitem agir rapidamente, 
                reduzindo em 60% a área afetada pelo fogo."
              </p>
              <div>
                <p className="font-semibold text-text-primary">Instituto Ambiental</p>
                <p className="text-sm text-text-muted">Pantanal, MT</p>
              </div>
            </div>

            <div className="card">
              <div className="mb-4">
                <div className="flex text-secondary-light">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-text-secondary mb-6 italic">
                "As previsões de onda de calor nos permitem preparar nossos serviços de saúde 
                e reduzir em 30% as internações relacionadas ao calor."
              </p>
              <div>
                <p className="font-semibold text-text-primary">Secretaria de Saúde</p>
                <p className="text-sm text-text-muted">Sertão, NE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact title="Faça Parte Deste Impacto" description="Junte-se a nós na missão de proteger comunidades e ecossistemas através do monitoramento ambiental inteligente." buttonText="Contribua com Nossa Missão" buttonLink="/contribua" variant="primary"/>
    </div>
  );
};

export default Impact;