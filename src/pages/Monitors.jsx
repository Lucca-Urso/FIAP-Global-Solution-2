import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ClimateCard from '../components/ClimateCard';
import { api } from '../services/api';

const Monitors = () => {
  const [climateData, setClimateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getClimateData();
        setClimateData(data);
        setLoading(false);
      } catch (err) {
        setError('Não foi possível carregar os dados climáticos. Tente novamente.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-secondary">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-accent border-t-transparent mx-auto mb-4"></div>
          <p className="text-text-secondary">Carregando dados dos satélites...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-secondary">
        <div className="text-center bg-bg-card rounded-xl shadow-lg p-8 max-w-md">
          <svg className="w-16 h-16 text-danger mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-danger font-medium mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors shadow-md"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <section className="bg-gradient-to-r from-primary via-primary-light to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Monitoramento Climático Global"
            subtitle="Dados em tempo real de regiões monitoradas por nossa rede de satélites."
            variant="h1"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-bg-card rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-accent mb-2">
                {climateData.regions.length}
              </div>
              <div className="text-text-secondary text-sm">Regiões Monitoradas</div>
            </div>
            <div className="bg-bg-card rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-success mb-2">
                {climateData.regions.filter(r => r.alertLevel === 'low').length}
              </div>
              <div className="text-text-secondary text-sm">Alerta Baixo</div>
            </div>
            <div className="bg-bg-card rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-warning mb-2">
                {climateData.regions.filter(r => r.alertLevel === 'medium').length}
              </div>
              <div className="text-text-secondary text-sm">Alerta Médio</div>
            </div>
            <div className="bg-bg-card rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-danger mb-2">
                {climateData.regions.filter(r => r.alertLevel === 'high' || r.alertLevel === 'critical').length}
              </div>
              <div className="text-text-secondary text-sm">Alerta Alto/Crítico</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {climateData.regions.map((region) => (
              <ClimateCard
                key={region.id}
                region={region.name}
                temperature={region.temperature}
                humidity={region.humidity}
                airQuality={region.airQuality}
                alertLevel={region.alertLevel}
                satellite={region.satellite}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-bg-card rounded-lg shadow-md px-6 py-3 border border-gray-200">
              <p className="text-text-muted text-sm">
                Última atualização: <span className="font-medium text-primary">{new Date(climateData.lastUpdate).toLocaleString('pt-BR')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Monitors;