import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Contact from '../components/Contact';

const Purpose = () => {
  const mission = {
    title: 'Nossa Missão',
    description: 'Fornecer dados climáticos precisos e em tempo real para governos, empresas e cidadãos, permitindo decisões informadas que protejam nosso planeta.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  const vision = {
    title: 'Nossa Visão',
    description: 'Ser a principal fonte global de dados climáticos, utilizando tecnologia espacial para criar um futuro mais sustentável e consciente.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  };

  const objectives = [
    {
      title: 'Monitoramento Global',
      description: 'Cobrir 100% do planeta com nossa rede de satélites até 2030.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Precisão de Dados',
      description: 'Manter 99.9% de precisão nas medições climáticas.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Acesso Democrático',
      description: 'Disponibilizar dados gratuitos para pesquisa científica.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Inovação Contínua',
      description: 'Desenvolver novas tecnologias de sensoriamento remoto.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const impact = [
    {
      number: '50+',
      label: 'Países Monitorados',
    },
    {
      number: '1M+',
      label: 'Dados Coletados/dia',
    },
    {
      number: '200+',
      label: 'Parceiros de Pesquisa',
    },
    {
      number: '10M+',
      label: 'Pessoas Impacontactdas',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        title="Tecnologia Espacial para Preservação Terrestre"
        subtitle="Utilizamos satélites e infraestrutura orbital para monitorar as mudanças climáticas do planeta, fornecendo dados essenciais para a tomada de decisões."
      />

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-card rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center text-white mb-6 shadow-md">
                {mission.icon}
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">{mission.title}</h2>
              <p className="text-text-secondary leading-relaxed">{mission.description}</p>
            </div>

            <div className="bg-bg-card rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center text-white mb-6 shadow-md">
                {vision.icon}
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">{vision.title}</h2>
              <p className="text-text-secondary leading-relaxed">{vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="O Desafio Climático Global"
            subtitle="As mudanças climáticas representam uma das maiores ameaças à humanidade. Dados precisos são essenciais para ação."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-card rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent mb-4">+1.1°C</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Aquecimento Global</h3>
              <p className="text-text-secondary text-sm">
                Temperatura média global já aumentou 1.1°C desde a era pré-industrial.
              </p>
            </div>
            <div className="bg-bg-card rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent mb-4">400ppm</div>
              <h3 className="text-lg font-semibold text-primary mb-2">CO₂ Atmosférico</h3>
              <p className="text-text-secondary text-sm">
                Níveis de dióxido de carbono atingiram 400 partes por milhão.
              </p>
            </div>
            <div className="bg-bg-card rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent mb-4">3.2mm/ano</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Elevação dos Oceanos</h3>
              <p className="text-text-secondary text-sm">
                Nível do mar sobe 3.2mm por ano devido ao derretimento das calotas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossos Objetivos"
            subtitle="Trabalhamos com metas claras para maximizar nosso impacto na preservação climática."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, index) => (
              <div key={index} className="bg-bg-card rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    {obj.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{obj.title}</h3>
                    <p className="text-sm text-text-secondary">{obj.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nosso Impacto"
            subtitle="Resultados concretos da nossa missão de monitoramento climático global."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impact.map((item, index) => (
              <div key={index} className="bg-primary-light/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{item.number}</div>
                <div className="text-gray-300 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-bg-card rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Por que o Espaço?
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Satélites oferecem uma perspectiva única para monitorar mudanças climáticas em escala global.
                De órbita, podemos observar padrões que seriam impossíveis de detecontactr da superfície.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Cobertura global contínua 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Medições precisas de temperatura e umidade</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Monitoramento de desmatamento e queimadas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Rastreamento de gases de efeito estufa</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-white text-lg font-medium">Satélite em Órbita</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact title="Junte-se a Nós" description="Faça parte da solução. Contribua com dados, apoie pesquisas ou simplesmente compartilhe nossa missão." buttonText="Saiba Como Ajudar" buttonLink="/contribuinte" variant="primary"/>
    </div>
  );
};

export default Purpose;