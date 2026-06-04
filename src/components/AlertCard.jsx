const AlertCard = ({ alert }) => {
  const typeMapping = {
    flood: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Enchente',
      color: 'bg-blue-500'
    },
    fire: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      label: 'Queimada',
      color: 'bg-orange-500'
    },
    heat: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>
      ),
      label: 'Calor Extremo',
      color: 'bg-red-500'
    },
    drought: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      ),
      label: 'Baixa Umidade',
      color: 'bg-yellow-500'
    }
  };

  const severityMapping = {
    low: { label: 'Baixo', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    medium: { label: 'Médio', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    high: { label: 'Alto', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    critical: { label: 'Crítico', color: 'bg-red-500/20 text-red-400 border-red-500/30' }
  };

  const statusMapping = {
    active: { label: 'Ativo', color: 'bg-red-500/20 text-red-400' },
    monitoring: { label: 'Monitorando', color: 'bg-yellow-500/20 text-yellow-400' },
    resolved: { label: 'Resolvido', color: 'bg-green-500/20 text-green-400' }
  };

  const type = typeMapping[alert.type] || typeMapping.flood;
  const severity = severityMapping[alert.severity] || severityMapping.medium;
  const status = statusMapping[alert.status] || statusMapping.active;

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="card relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-1 h-full ${status.color.split(' ')[0]}`}></div>
      
      <div className="pl-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg ${type.color} flex items-center justify-center text-white`}>
              {type.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-text-primary">{type.label}</h3>
              <p className="text-sm text-text-secondary">{alert.region}</p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${severity.color}`}>
              {severity.label}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.color}`}>
              {status.label}
            </span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          {alert.description}
        </p>

        <div className="flex items-center justify-between text-xs text-text-muted">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatDate(alert.timestamp)}</span>
          </div>
          <span className="text-text-muted">ID: {alert.id}</span>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;