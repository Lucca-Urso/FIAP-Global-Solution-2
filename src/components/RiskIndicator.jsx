const RiskIndicator = ({ type, level }) => {
  const config = {
    flood: {
      label: 'Risco de Enchente',
      color: 'from-blue-500 to-blue-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    fire: {
      label: 'Risco de Queimada',
      color: 'from-orange-500 to-orange-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    },
    heat: {
      label: 'Risco de Calor',
      color: 'from-red-500 to-red-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>
      )
    },
    drought: {
      label: 'Baixa Umidade',
      color: 'from-yellow-500 to-yellow-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      )
    }
  };

  const levelConfig = {
    low: { width: '25%', color: 'bg-green-500', label: 'Baixo' },
    medium: { width: '50%', color: 'bg-yellow-500', label: 'Médio' },
    high: { width: '75%', color: 'bg-orange-500', label: 'Alto' },
    critical: { width: '100%', color: 'bg-red-500', label: 'Crítico' }
  };

  const risk = config[type] || config.fire;
  const levelInfo = levelConfig[level] || levelConfig.low;

  return (
    <div className="bg-bg-secondary rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className={`text-text-secondary`}>{risk.icon}</span>
          <span className="text-sm font-medium text-text-primary">{risk.label}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded ${levelInfo.color} bg-opacity-20 text-${levelInfo.color.replace('bg-', '')}-400`}>
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