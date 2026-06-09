const RiskIndicator = ({ type, level }) => {
  const config = {
    flood: {
      label: 'Risco de Enchente',
      color: 'from-blue-500 to-blue-600',
    },
    fire: {
      label: 'Risco de Queimada',
      color: 'from-orange-500 to-orange-600',
    },
    heat: {
      label: 'Risco de Calor',
      color: 'from-red-500 to-red-600',
    },
    drought: {
      label: 'Baixa Umidade',
      color: 'from-yellow-500 to-yellow-600',
    }
  };

  const levelConfig = {
    low: { width: '25%', label: 'Baixo', badge: 'bg-green-500/20 text-green-400' },
    medium: { width: '50%', label: 'Médio', badge: 'bg-yellow-500/20 text-yellow-400' },
    high: { width: '75%', label: 'Alto', badge: 'bg-orange-500/20 text-orange-400' },
    critical: { width: '100%', label: 'Crítico', badge: 'bg-red-500/20 text-red-400' }
  };

  const risk = config[type] || config.fire;
  const levelInfo = levelConfig[level] || levelConfig.low;

  return (
    <div className="bg-bg-secondary rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-text-secondary">{risk.icon}</span>
          <span className="text-sm font-medium text-text-primary">{risk.label}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded font-medium ${levelInfo.badge}`}>
          {levelInfo.label}
        </span>
      </div>

      <div className="relative">
        <div className="h-2 bg-bg-primary rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${risk.color} rounded-full transition-all duration-500 ease-out`}
            style={{ width: levelInfo.width }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RiskIndicator;
