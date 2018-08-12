import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        TradingTastes!
      </h1>
      Fresh.Local.Healthy 
      To login with Facebook click here
      <a href="/auth/facebook">Login with Facebook</a>
    </div>
  );
};

export default Landing;
