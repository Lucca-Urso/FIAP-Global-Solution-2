import { useState, useEffect, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import AlertCard from '../components/AlertCard';
import { api } from '../services/api';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getAlerts();
        setAlerts(data.alerts);
        setLoading(false);
      } catch {
        setError('Não foi possível carregar os alertas. Tente novamente.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const matchesType = filterType === 'all' || alert.type === filterType;
      const matchesSeverity = filterSeverity === 'all' || alert.severity === filterSeverity;
      return matchesType && matchesSeverity;
    });
  }, [alerts, filterType, filterSeverity]);

  const getStats = () => {
    const stats = {
      total: alerts.length,
      active: alerts.filter(a => a.status === 'active').length,
      monitoring: alerts.filter(a => a.status === 'monitoring').length,
      resolved: alerts.filter(a => a.status === 'resolved').length,
      critical: alerts.filter(a => a.severity === 'critical').length,
      high: alerts.filter(a => a.severity === 'high').length,
    };
    return stats;
  };

  const stats = getStats();

  const alertTypes = [
    { value: 'all', label: 'Todos' },
    { value: 'flood', label: 'Enchentes' },
    { value: 'fire', label: 'Queimadas' },
    { value: 'heat', label: 'Calor Extremo' },
    { value: 'drought', label: 'Baixa Umidade' },
  ];

  const severityLevels = [
    { value: 'all', label: 'Todas' },
    { value: 'low', label: 'Baixo' },
    { value: 'medium', label: 'Médio' },
    { value: 'high', label: 'Alto' },
    { value: 'critical', label: 'Crítico' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-secondary border-t-transparent mx-auto mb-4"></div>
          <p className="text-text-secondary">Carregando alertas...</p>
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

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary via-primary-light to-primary-dark text-text-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Central de Alertas"
            subtitle="Acompanhe todos os alertas de eventos climáticos extremos em tempo real."
            variant="h1"
          />
        </div>
      </section>

      <section className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="card text-center">
              <div className="text-3xl font-bold text-text-primary mb-2">{stats.total}</div>
              <div className="text-text-secondary text-sm">Total de Alertas</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-danger mb-2">{stats.active}</div>
              <div className="text-text-secondary text-sm">Ativos</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-warning mb-2">{stats.monitoring}</div>
              <div className="text-text-secondary text-sm">Monitorando</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-success mb-2">{stats.resolved}</div>
              <div className="text-text-secondary text-sm">Resolvidos</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-danger mb-2">{stats.critical}</div>
              <div className="text-text-secondary text-sm">Críticos</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-warning mb-2">{stats.high}</div>
              <div className="text-text-secondary text-sm">Altos</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Tipo de Evento
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-secondary text-text-primary focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300"
                >
                  {alertTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Nível de Severidade
                </label>
                <select
                  value={filterSeverity}
                  onChange={(e) => setFilterSeverity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-secondary text-text-primary focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300"
                >
                  {severityLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Lista de Alertas"
            subtitle={filterType !== 'all' || filterSeverity !== 'all' ? 'Alertas filtrados' : 'Todos os alertas registrados'}
          />

          {filteredAlerts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredAlerts.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 card">
              <svg className="w-16 h-16 text-text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-text-secondary">Nenhum alerta encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Legenda de Severidade</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-text-secondary text-sm">Baixo - Condições normais</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span className="text-text-secondary text-sm">Médio - Atenção necessária</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span className="text-text-secondary text-sm">Alto - Risco significativo</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-text-secondary text-sm">Crítico - Emergência</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alerts;