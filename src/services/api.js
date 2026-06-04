const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getClimateData() {
    await delay(800);
    try {
      const response = await fetch('/src/data/climate-data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch climate data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching climate data:', error);
      throw error;
    }
  },

  async getAlerts() {
    await delay(600);
    try {
      const response = await fetch('/src/data/alerts-data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch alerts data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching alerts data:', error);
      throw error;
    }
  },

  async getSensors() {
    await delay(700);
    try {
      const response = await fetch('/src/data/sensors-data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch sensors data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching sensors data:', error);
      throw error;
    }
  },

  async getAlertsByType(type) {
    await delay(500);
    try {
      const response = await fetch('/src/data/alerts-data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch alerts data');
      }
      const data = await response.json();
      return {
        alerts: data.alerts.filter(alert => alert.type === type)
      };
    } catch (error) {
      console.error('Error fetching alerts by type:', error);
      throw error;
    }
  },

  async getActiveAlerts() {
    await delay(500);
    try {
      const response = await fetch('/src/data/alerts-data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch alerts data');
      }
      const data = await response.json();
      return {
        alerts: data.alerts.filter(alert => alert.status === 'active')
      };
    } catch (error) {
      console.error('Error fetching active alerts:', error);
      throw error;
    }
  },

  async getDashboardSummary() {
    await delay(400);
    try {
      const climateResponse = await fetch('/src/data/climate-data.json');
      const alertsResponse = await fetch('/src/data/alerts-data.json');
      
      if (!climateResponse.ok || !alertsResponse.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      
      const climateData = await climateResponse.json();
      const alertsData = await alertsResponse.json();
      
      const activeAlerts = alertsData.alerts.filter(a => a.status === 'active');
      const criticalAlerts = activeAlerts.filter(a => a.severity === 'critical');
      
      return {
        totalRegions: climateData.regions.length,
        activeAlerts: activeAlerts.length,
        criticalAlerts: criticalAlerts.length,
        averageTemperature: climateData.regions.reduce((sum, r) => sum + r.temperature, 0) / climateData.regions.length,
        lastUpdate: climateData.lastUpdate
      };
    } catch (error) {
      console.error('Error fetching dashboard summary:', error);
      throw error;
    }
  }
};