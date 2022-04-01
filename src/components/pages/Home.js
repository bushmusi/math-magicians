import React from 'react';

const Home = () => {
  const parentStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    padding: '20px',
    gap: '30px',
  };

  const oldStyle = {
    margin: '20px',
  };

  return (
    <div style={parentStyle}>
      <h1>Welocome to our page</h1>
      <p>
        In this project, I have created Single Page Application
        which contains different features of ReactJs.
        <ol style={oldStyle}>
          <li>React Router</li>
          <li>Page deployment to GitHub</li>
          <li>Linter pipeline to GitHub</li>
          <li>React styled components</li>
        </ol>
      </p>
      <p>
        I have used Three functional components to make this page
        <ol style={oldStyle}>
          <li>Home page</li>
          <li>Calculator</li>
          <li>Quote</li>
        </ol>
      </p>
    </div>
  );
};

export default Home;
