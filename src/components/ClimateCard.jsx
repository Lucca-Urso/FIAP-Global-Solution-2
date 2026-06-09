import RiskIndicator from './RiskIndicator';

const ClimateCard = ({ region }) => {
  const alertStyles = {
    low: 'bg-green-500/20 text-green-400 border-green-500/30',
    medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    high: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const alertLabels = {
    low: 'Baixo',
    medium: 'Médio',
    high: 'Alto',
    critical: 'Crítico',
  };

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
      <div className="flex justify-between items-start mb-6 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{region.name}</h3>
          <p className="text-xs text-text-muted mt-2 flex items-center">
            Região Monitorada
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${alertStyles[region.alertLevel]}`}>
          {alertLabels[region.alertLevel] || region.alertLevel}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-bg-secondary rounded-lg p-4 text-center">
          <div className="text-xs text-text-muted mb-1.5">Temperatura</div>
          <div className="text-xl font-bold text-text-primary">{region.temperature}°C</div>
        </div>
        <div className="bg-bg-secondary rounded-lg p-4 text-center">
          <div className="text-xs text-text-muted mb-1.5">Umidade</div>
          <div className="text-xl font-bold text-text-primary">{region.humidity}%</div>
        </div>
        <div className="bg-bg-secondary rounded-lg p-4 text-center">
          <div className="text-xs text-text-muted mb-1.5">Qualidade do Ar</div>
          <div className="text-xl font-bold text-text-primary">{region.airQuality}</div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <RiskIndicator type="flood" level={region.floodRisk} />
        <RiskIndicator type="fire" level={region.fireRisk} />
        <RiskIndicator type="heat" level={region.heatRisk} />
      </div>

      <div className="pt-5 border-t border-white/10">
        <p className="text-xs text-text-muted text-center">
          Última atualização: {formatDate(region.lastUpdate)}
        </p>
      </div>
    </div>
  );
};

export default ClimateCard;