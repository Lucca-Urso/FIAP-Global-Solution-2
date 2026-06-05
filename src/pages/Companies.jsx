import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import CompanyCard from '../components/CompanyCard';
import Contact from '../components/Contact';
import { api } from '../services/api';

const Companies = () => {
  const [companiesData, setCompaniesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getCompanies();
        setCompaniesData(data);
        setLoading(false);
      } catch (err) {
        setError('Não foi possível carregar os casos de uso. Tente novamente.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando casos de uso...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-red-600 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-accent text-primary rounded-full font-medium hover:bg-accent-light transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'API Key Dedicada',
      description: 'Acesso seguro e personalizado para sua empresa.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'SLA Garantido',
      description: '99.9% de uptime para operações críticas.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Suporte Dedicado',
      description: 'Equipe especializada para sua empresa.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics Avançado',
      description: 'Dashboards e relatórios personalizados.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Soluções Empresariais"
            subtitle="Integre dados climáticos em tempo real na sua operação e tome decisões mais inteligentes."
            variant="h1"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Casos de Sucesso"
            subtitle="Veja como empresas estão transformando suas operações com nossos dados climáticos."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companiesData?.companies.map(company => (
              <CompanyCard
                key={company.id}
                companyName={company.companyName}
                logo={company.logo}
                useCase={company.useCase}
                results={company.results}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Integração Simples</h2>
                <p className="text-gray-300 mb-6">
                  Nossa API REST é fácil de integrar e vem com documentação completa.
                  Comece a receber dados climáticos em minutos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Endpoints RESTful</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Autenticação segura com API Key</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SDKs para principais linguagens</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary-dark rounded-xl p-6 font-mono text-sm">
                <div className="text-accent mb-2">// Exemplo de requisição</div>
                <div className="text-gray-300">
                  <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-green-400">'https://api.clim.io/v1/climate'</span>, {'{'}
                  <br />&nbsp;&nbsp;headers: {'{'}
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">'Authorization'</span>: <span className="text-green-400">'Bearer YOUR_API_KEY'</span>
                  <br />&nbsp;&nbsp;{'}'}
                  <br />{'}'});
                  <br />
                  <span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> response.json();
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact title="Leve Dados Climáticos para sua Empresa" description="Fale com nosso time de vendas e descubra como podemos ajudar sua organização a tomar decisões baseadas in dados." buttonText="Falar com Vendas" buttonLink="/contato" variant="primary"/>
    </div>
  );
};

export default Companies;