import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        TradingTastes!
      </h1>
      <h2>
        THE dashboard LOVE
      </h2>
      
      <li><a href="/api/logout">Logout</a></li>
      <img src="/sample.png" width="200" height="200"/>
      <div className="image"></div>
    </div>
  );
};

export default Dashboard;
