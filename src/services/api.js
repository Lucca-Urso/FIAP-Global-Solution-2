import climateData from '../data/climate-data.json';
import alertsData from '../data/alerts-data.json';
import sensorsData from '../data/sensors-data.json';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getClimateData() {
    await delay(800);
    return climateData;
  },

  async getAlerts() {
    await delay(600);
    return alertsData;
  },

  async getSensors() {
    await delay(700);
    return sensorsData;
  },

  async getActiveAlerts() {
    await delay(500);
    return {
      alerts: alertsData.alerts.filter((alert) => alert.status === 'active'),
    };
  },

  async getDashboardSummary() {
    await delay(400);
    const activeAlerts = alertsData.alerts.filter((a) => a.status === 'active');
    const criticalAlerts = activeAlerts.filter((a) => a.severity === 'critical');

    return {
      totalRegions: climateData.regions.length,
      activeAlerts: activeAlerts.length,
      criticalAlerts: criticalAlerts.length,
      averageTemperature:
        climateData.regions.reduce((sum, r) => sum + r.temperature, 0) /
        climateData.regions.length,
      lastUpdate: climateData.lastUpdate,
    };
  },
};
