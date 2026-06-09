import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Contact from '../components/Contact';
import satelite_1  from "../assets/images/satelite_1.svg"

const Technology = () => {
  const technologies = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Sensoriamento Orbital',
      description: 'Satélites equipados com sensores multiespectrais capturam dados de temperatura, umidade, qualidade do ar e composição atmosférica em tempo real.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Análise de Dados',
      description: 'Algoritmos de machine learning processam milhões de dados para identificar padrões climáticos e prever eventos extremos com alta precisão.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Sensores Terrestres',
      description: 'Rede de estações meteorológicas, boias oceânicas e torres de monitoramento complementam os dados orbitais com medições locais precisas.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Sistema de Alertas',
      description: 'Geração automática de alertas baseada em thresholds configuráveis, com notificações em tempo real para órgãos responsáveis e população.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Coleta de Dados',
      description: 'Satélites e sensores terrestres coletam dados ambientais continuamente, 24 horas por dia, 7 dias por semana.',
    },
    {
      step: '02',
      title: 'Processamento',
      description: 'Dados brutos são processados e validados por algoritmos de IA que identificam anomalias e padrões significativos.',
    },
    {
      step: '03',
      title: 'Análise de Riscos',
      description: 'Sistemas especializados avaliam riscos de enchentes, queimadas, ondas de calor e outros eventos extremos.',
    },
    {
      step: '04',
      title: 'Geração de Alertas',
      description: 'Quando thresholds de risco são atingidos, alertas automáticos são emitidos para as autoridades e população afetada.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        title="Tecnologia de Ponta para Monitoramento Ambiental"
        subtitle="Combinamos sensoriamento orbital, inteligência artificial e redes de sensores terrestres para fornecer monitoramento climático preciso e alertas preventivos."
      />

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Tecnologias Utilizadas"
            subtitle="Nossa plataforma é construída com o que há de mais moderno em tecnologia espacial e ciência de dados."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">{tech.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Como Funciona"
            subtitle="Nosso processo de monitoramento e geração de alertas em quatro etapas."
          />

          <div className="relative">

            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary-dark to-primary-darker"></div>

            <div className="space-y-12">
              {process.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >

                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-bg-secondary shadow-lg transform -translate-x-1/2 mt-6 z-10"></div>

                  <div className="ml-16 md:ml-0 md:w-1/2">
                    <div className="card">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl font-bold text-secondary/20 mr-4">{item.step}</span>
                        <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="card">
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Inspirado na Observação Orbital
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                O Orbit Sentinel aplica conceitos desenvolvidos para satélites de observação terrestre, 
                adaptando tecnologias espaciais para monitoramento ambiental em tempo real. Nossa 
                abordagem combina a precisão dos sensores orbitais com a capilaridade das redes 
                terrestres de monitoramento.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Monitoramento contínuo 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Cobertura de larga escala</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Análise multiespectral</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Processamento em tempo real</span>
                </li>
              </ul>
            </div>
              <img src={satelite_1} className="border-10 text-indigo-950 rounded-lg" alt="Satélite artificial em órbita ao redor da Terra, representando monitoramento espacial, comunicação global e transmissão de dados via tecnologia orbital." aria-hidden="true"/>
          </div>
        </div>
      </section>

      <Contact title="Conheça Nossa Tecnologia" description="Quer saber mais sobre como funcionam nossos sistemas de monitoramento e alerta? Entre em contato com nossa equipe técnica." buttonText="Falar com Especialistas" buttonLink="/contribua" variant="primary"/>
    </div>
  );
};

export default Technology;