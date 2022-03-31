import React from 'react';

const Quote = () => {
  const quoteContainer = {
    display: 'flex',
    height: '100vh',
    padding: '20px',
    flexDireaction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={quoteContainer}>
      <p>
        <q>
          Mathematics is not about numbers,equations, computations,
          or algorithms. It is about understanding.
        </q>
        -William Paul Thurston
      </p>
    </div>
  );
};

export default Quote;
