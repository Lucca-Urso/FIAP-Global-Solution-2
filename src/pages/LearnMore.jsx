import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { api } from '../services/api';

const LearnMore = () => {
  const [faqData, setFAQData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getFAQ();
        setFAQData(data);
        setLoading(false);
      } catch (err) {
        setError('Não foi possível carregar o FAQ. Tente novamente.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const technologies = [
    {
      name: 'Sensoriamento Remoto',
      description: 'Satélites equipados com sensores multiespectrais capturam dados de temperatura, umidade e composição atmosférica.',
    },
    {
      name: 'Machine Learning',
      description: 'Algoritmos de IA processam milhões de dados para identificar padrões e fazer previsões climáticas.',
    },
    {
      name: 'Big Data',
      description: 'Infraestrutura escalável processa e armazena petabytes de dados climáticos históricos e em tempo real.',
    },
    {
      name: 'APIs RESTful',
      description: 'Interfaces de programação permitem integração fácil dos dados climáticos em aplicações de terceiros.',
    },
  ];

  const roadmap = [
    {
      quarter: 'Q1 2026',
      status: 'completed',
      items: ['Lançamento da plataforma beta', '50 satélites ativos', 'API v1.0'],
    },
    {
      quarter: 'Q2 2026',
      status: 'current',
      items: ['Expansão para 100 satélites', 'Dashboard empresarial', 'SDKs para Python e JavaScript'],
    },
    {
      quarter: 'Q3 2026',
      status: 'upcoming',
      items: ['Análise preditiva com IA', 'Alertas em tempo real', 'Parcerias com agências espaciais'],
    },
    {
      quarter: 'Q4 2026',
      status: 'upcoming',
      items: ['Cobertura global 100%', 'API v2.0', 'Programa de contribuidores'],
    },
  ];

  const contact = {
    email: 'contato@clim.io',
    phone: '+55 11 99999-9999',
    address: 'Av. Paulista, 1000 - São Paulo, SP',
    social: {
      twitter: 'https://twitter.com/clim',
      github: 'https://github.com/clim',
      linkedin: 'https://linkedin.com/company/clim',
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Saiba Mais"
            subtitle="Conheça mais sobre nossa tecnologia, roadmap e tire suas dúvidas."
            variant="h1"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Tecnologias Utilizadas"
            subtitle="Nossa plataforma é construída com o que há de mais moderno em tecnologia espacial e ciência de dados."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Roadmap"
            subtitle="Acompanhe nosso progresso e saiba o que estamos construindo."
          />

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-8">
              {roadmap.map((quarter, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow transform -translate-x-1/2 mt-6"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <div
                      className={`bg-white rounded-xl shadow-md p-6 ${
                        quarter.status === 'completed'
                          ? 'border-l-4 border-green-500'
                          : quarter.status === 'current'
                          ? 'border-l-4 border-accent'
                          : 'border-l-4 border-gray-300'
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            quarter.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : quarter.status === 'current'
                              ? 'bg-accent/20 text-accent-dark'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {quarter.quarter}
                        </span>
                        {quarter.status === 'current' && (
                          <span className="ml-2 text-xs text-accent font-medium animate-pulse">
                            Em andamento
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {quarter.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                            <svg
                              className={`w-4 h-4 mr-2 mt-0.5 ${
                                quarter.status === 'completed' ? 'text-green-500' : 'text-gray-400'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre a CLIM e nossos serviços."
          />

          {error ? (
            <div className="text-center py-8">
              <p className="text-red-600">{error}</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-6">
              {faqData?.faqs.map((faq) => (
                <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Entre em Contato" subtitle="Tem alguma dúvida? Estamos aqui para ajudar."/>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">Email</h3>
              <a href={`mailto:${contact.email}`} className="text-accent hover:underline text-sm">
                {contact.email}
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">Telefone</h3>
              <a href={`tel:${contact.phone}`} className="text-accent hover:underline text-sm">
                {contact.phone}
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">Endereço</h3>
              <p className="text-gray-600 text-sm">{contact.address}</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a href={contact.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href={contact.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Contact title="Ainda tem dúvidas?" description="Nossa equipe está pronta para ajudar. Entre em contato e vamos conversar." buttonText="Falar Conosco" buttonLink="/contribuinte" variant="primary"/>
    </div>
  );
};

export default LearnMore;