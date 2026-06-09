const SensorCard = ({ sensor }) => {
  const typeMapping = {
    satellite: {
      label: 'Satélite',
      color: 'text-purple-400'
    },
    ground: {
      label: 'Estação Terrestre',
      color: 'text-green-400'
    },
    buoy: {
      label: 'Boia Oceânica',
      color: 'text-blue-400'
    },
    tower: {
      label: 'Torre de Monitoramento',
      color: 'text-orange-400'
    }
  };

  const statusMapping = {
    active: { label: 'Ativo', color: 'text-green-400', bg: 'bg-green-500/20' },
    maintenance: { label: 'Manutenção', color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
    offline: { label: 'Offline', color: 'text-red-400', bg: 'bg-red-500/20' }
  };

  const type = typeMapping[sensor.type] || typeMapping.ground;
  const status = statusMapping[sensor.status] || statusMapping.active;

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="font-semibold text-lg text-text-primary">{sensor.name}</h3>
            <p className="text-sm text-text-secondary flex items-center mt-1">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {sensor.location}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${status.bg} ${status.color}`}>
          {status.label}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {sensor.metrics.map((metric, index) => (
          <div key={index} className="bg-bg-secondary rounded-lg p-4 text-center">
            <div className="text-xs text-text-muted mb-1.5">{metric.name}</div>
            <div className="text-lg font-bold text-text-primary">
              {metric.value}
              {metric.unit && <span className="text-xs text-text-muted ml-1">{metric.unit}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-text-muted pt-5 border-t border-white/10">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Atualizado: {formatDate(sensor.lastUpdate)}</span>
        </div>
        <span className="text-text-muted">ID: {sensor.id}</span>
      </div>
    </div>
  );
};

export default SensorCard;