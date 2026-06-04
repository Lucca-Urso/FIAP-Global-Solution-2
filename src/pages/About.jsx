import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Contact from '../components/Contact';

const About = () => {
  const mission = {
    title: 'Nossa Missão',
    description: 'Monitorar condições ambientais em tempo real, identificar situações de risco e emitir alertas preventivos para minimizar impactos causados por eventos climáticos extremos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  };

  const vision = {
    title: 'Nossa Visão',
    description: 'Ser a principal plataforma de monitoramento ambiental e prevenção de desastres naturais, utilizando tecnologias orbitais para proteger comunidades e ecossistemas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  };

  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Eventos Extremos',
      description: 'Enchentes, queimadas e ondas de calor geram impactos humanos, sociais e econômicos devastadores.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      ),
      title: 'Falta de Monitoramento',
      description: 'Muitas regiões não possuem sistemas acessíveis capazes de monitorar continuamente condições ambientais.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Resposta Tardia',
      description: 'Sem alertas preventivos, as comunidades não têm tempo suficiente para se preparar e se proteger.',
    },
  ];

  const values = [
    {
      title: 'Prevenção',
      description: 'Antecipar eventos extremos para reduzir impactos e salvar vidas.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Inovação',
      description: 'Utilizar tecnologias orbitais de ponta para monitoramento ambiental.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Acesso Democrático',
      description: 'Disponibilizar dados e alertas para todos, sem barreiras.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Colaboração',
      description: 'Trabalhar com comunidades, governos e organizações para maximizar impacto.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        title="Tecnologia Orbital para Proteção Terrestre"
        subtitle="Utilizamos satélites e sensores ambientais para monitorar condições climáticas em tempo real, identificar riscos e emitir alertas preventivos para proteger comunidades e ecossistemas."
      />

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                {mission.icon}
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">{mission.title}</h2>
              <p className="text-text-secondary leading-relaxed">{mission.description}</p>
            </div>

            <div className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                {vision.icon}
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">{vision.title}</h2>
              <p className="text-text-secondary leading-relaxed">{vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="O Problema que Resolvemos"
            subtitle="Eventos climáticos extremos representam uma ameaça crescente para comunidades em todo o mundo."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center text-secondary-light mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{problem.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossos Valores"
            subtitle="Somos guiados por princípios que nos ajudam a cumprir nossa missão de proteção ambiental."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-md">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="card">
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                A Conexão Espacial
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                O Orbit Sentinel é inspirado nos sistemas utilizados por satélites de observação terrestre. 
                Aplicamos conceitos de monitoramento contínuo, coleta de dados ambientais e análise de 
                condições climáticas em larga escala para gerar informações estratégicas que protegem vidas.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Monitoramento orbital contínuo 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Sensores ambientais de alta precisão</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Análise de padrões climáticos em tempo real</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Geração de alertas preventivos automáticos</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 text-secondary-light mx-auto mb-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-text-primary text-lg font-medium">Satélite em Órbita</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact title="Faça Parte Desta Missão" description="Junte-se a nós na proteção de comunidades e ecossistemas através do monitoramento ambiental inteligente." buttonText="Saiba Como Contribuir" buttonLink="/contribua" variant="primary"/>
    </div>
  );
};

export default About;