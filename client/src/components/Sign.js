import React from 'react';

const Sign = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>
        SIGN IN PAGE
      </h2>
      <div style={{ textAlign: 'center' }}>
        <a href="/auth/facebook">Login With Facebook</a> <br/>
        <a href="/auth/google">Login With Google</a>
      </div>
    </div>
  );
};

export default Sign;
