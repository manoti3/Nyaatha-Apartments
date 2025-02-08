import React from 'react';
import './KeyMetrics.css'; // Create a CSS file for styling

const KeyMetrics = () => {
  const metrics = [
    { title: 'Total Properties', value: 120 },
    { title: 'Active Tenants', value: 85 },
    { title: 'Bookings This Month', value: 34 },
    { title: 'Revenue Generated', value: '$50,000' },
    { title: 'Customer Satisfaction', value: '96%' },
  ];

  return (
    <div className="key-metrics-container">
      <h2 className="metrics-title">Key Metrics</h2>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <h3>{metric.value}</h3>
            <p>{metric.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;
