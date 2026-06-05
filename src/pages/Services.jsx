import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Contact from '../components/Contact';
import { api } from '../services/api';

const Services = () => {
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getServices();
        setServicesData(data);
        setLoading(false);
      } catch (err) {
        setError('Não foi possível carregar os serviços. Tente novamente.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredServices = servicesData?.services.filter(service => {
    if (filter === 'all') return true;
    return service.audience === filter || service.audience === 'both';
  });

  const filterOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'users', label: 'Usuários' },
    { value: 'companies', label: 'Empresas' },
    { value: 'developers', label: 'Desenvolvedores' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando serviços...</p>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Soluções completas para monitoramento e análise climática, desde usuários comuns até grandes empresas."
            variant="h1"
          />
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === option.value
                    ? 'bg-accent text-primary shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices?.map(service => (
              <ServiceCard
                key={service.id}
                iconType={service.iconType}
                title={service.name}
                description={service.description}
                audience={service.audience}
                features={service.features}
              />
            ))}
          </div>

          {filteredServices?.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum serviço encontrado para este filtro.</p>
            </div>
          )}
        </div>
      </section>

      <Contact title="Pronto para Começar?" description="Escolha o plano ideal para sua necessidade e tenha acesso a dados climáticos em tempo real." buttonText="Falar com Especialista" buttonLink="/empresas" variant="primary"/>
    </div>
  );
};

export default Services;