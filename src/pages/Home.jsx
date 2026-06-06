import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Contact from '../components/Contact';
import ClimateCard from '../components/ClimateCard';
import AlertCard from '../components/AlertCard';
import { api } from '../services/api';

const Home = () => {
  const [summary, setSummary] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [climateData, setClimateData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [summaryData, alertsData, climateDataResponse] = await Promise.all([
          api.getDashboardSummary(),
          api.getActiveAlerts(),
          api.getClimateData()
        ]);
        setSummary(summaryData);
        setAlerts(alertsData.alerts.slice(0, 4));
        setClimateData(climateDataResponse);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Monitoramento em Tempo Real',
      description: 'Acompanhe condições ambientais 24/7 através de satélites e sensores terrestres.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Alertas Inteligentes',
      description: 'Sistema automático de notificação para enchentes, queimadas e eventos extremos.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Análise Preditiva',
      description: 'IA avançada para previsão de eventos climáticos e identificação de padrões.',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-secondary border-t-transparent mx-auto mb-4"></div>
          <p className="text-text-secondary">Carregando dados dos satélites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header
        title="Observando hoje para proteger o amanhã"
        subtitle="Orbit Sentinel é uma plataforma inteligente de monitoramento climático que utiliza tecnologias orbitais para prevenir desastres naturais e proteger comunidades."
        contactText="Acessar Monitoramento"
        contactLink="/monitoramento"
      />

      {summary && (
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="card text-center">
                <div className="text-4xl font-bold text-secondary-light mb-2">{summary.totalRegions}</div>
                <div className="text-text-secondary text-sm">Regiões Monitoradas</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-warning mb-2">{summary.activeAlerts}</div>
                <div className="text-text-secondary text-sm">Alertas Ativos</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-danger mb-2">{summary.criticalAlerts}</div>
                <div className="text-text-secondary text-sm">Alertas Críticos</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-info mb-2">{summary.averageTemperature.toFixed(1)}°C</div>
                <div className="text-text-secondary text-sm">Temp. Média</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {alerts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Alertas Ativos"
              subtitle="Acompanhe em tempo real os eventos climáticos que exigem atenção."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {alerts.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/alertas" className="text-secondary-light hover:text-secondary transition-colors font-medium">
                Ver todos os alertas →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Tecnologia Orbital a Serviço do Clima"
            subtitle="Nossa plataforma combina satélites, sensores e inteligência artificial para fornecer monitoramento ambiental preciso."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {climateData && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Regiões Monitoradas"
              subtitle="Acompanhe as condições ambientais em diferentes biomas e regiões."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {climateData.regions.slice(0, 4).map((region) => (
                <ClimateCard key={region.id} region={region} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/monitoramento" className="text-secondary-light hover:text-secondary transition-colors font-medium">
                Ver todas as regiões →
              </Link>
            </div>
          </div>
        </section>
      )}

      <Contact title="Junte-se à Nossa Missão" description="Contribua com dados, apoie pesquisas ou integre nossas soluções na sua organização. Juntos podemos fazer a diferença na prevenção de desastres ambientais." buttonText="Saiba Como Contribuir" buttonLink="/contribua" variant="primary"/>
    </div>
  );
};

export default Home;