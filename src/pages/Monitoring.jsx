import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ClimateCard from '../components/ClimateCard';
import AlertCard from '../components/AlertCard';
import SensorCard from '../components/SensorCard';
import { api } from '../services/api';

const Monitoring = () => {
  const [climateData, setClimateData] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [sensors, setSensors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('regions');
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [climateResponse, alertsResponse, sensorsResponse] = await Promise.all([
          api.getClimateData(),
          api.getActiveAlerts(),
          api.getSensors()
        ]);
        setClimateData(climateResponse);
        setAlerts(alertsResponse.alerts);
        setSensors(sensorsResponse.sensors);
        setLastUpdate(new Date(Date.now() - 10 * 60 * 1000));
        setLoading(false);
      } catch {
        setError('Não foi possível carregar os dados de monitoramento. Tente novamente.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center card max-w-md">
          <svg className="w-16 h-16 text-danger mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-danger font-medium mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary-light transition-colors shadow-md"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'regions', label: 'Regiões', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      </svg>
    )},
    { id: 'alerts', label: 'Alertas', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )},
    { id: 'sensors', label: 'Sensores', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )},
  ];

  const getAlertLevelStats = () => {
    if (!climateData) return { low: 0, medium: 0, high: 0, critical: 0 };
    return {
      low: climateData.regions.filter(r => r.alertLevel === 'low').length,
      medium: climateData.regions.filter(r => r.alertLevel === 'medium').length,
      high: climateData.regions.filter(r => r.alertLevel === 'high').length,
      critical: climateData.regions.filter(r => r.alertLevel === 'critical').length,
    };
  };

  const stats = getAlertLevelStats();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary via-primary-light to-primary-dark text-text-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Dashboard de Monitoramento"
            subtitle="Acompanhe em tempo real as condições ambientais de todas as regiões monitoradas."
            variant="h1"
          />
        </div>
      </section>

      <section className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="text-3xl font-bold text-text-primary mb-2">{climateData?.regions.length || 0}</div>
              <div className="text-text-secondary text-sm">Regiões Monitoradas</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-success mb-2">{stats.low}</div>
              <div className="text-text-secondary text-sm">Alerta Baixo</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-warning mb-2">{stats.medium}</div>
              <div className="text-text-secondary text-sm">Alerta Médio</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-danger mb-2">{stats.high + stats.critical}</div>
              <div className="text-text-secondary text-sm">Alerta Alto/Crítico</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                    : 'bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-bg-card'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'regions' && climateData && (
            <div>
              <SectionTitle
                title="Regiões Monitoradas"
                subtitle="Condições ambientais em tempo real de todas as regiões monitoradas."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {climateData.regions.map((region) => (
                  <ClimateCard key={region.id} region={region} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'alerts' && (
            <div>
              <SectionTitle
                title="Alertas Ativos"
                subtitle="Todos os alertas ambientais atualmente ativos ou em monitoramento."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {alerts.map((alert) => (
                  <AlertCard key={alert.id} alert={alert} />
                ))}
              </div>
              {alerts.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-text-secondary">Nenhum alerta ativo no momento.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'sensors' && (
            <div>
              <SectionTitle
                title="Rede de Sensores"
                subtitle="Status e dados de todos os sensores da rede de monitoramento."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sensors.map((sensor) => (
                  <SensorCard key={sensor.id} sensor={sensor} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {climateData && (
        <section className="py-16 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block card px-6 py-3">
                <p className="text-text-muted text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Última atualização: <span className="font-medium text-text-primary ml-2">{lastUpdate ? lastUpdate.toLocaleString('pt-BR') : '—'}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Monitoring;