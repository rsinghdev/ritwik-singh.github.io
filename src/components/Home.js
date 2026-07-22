import React from 'react';
import CherryBlossomTree from './CherryBlossomTree';

function Home() {
  return (
    <div className="home-content">
      <p className="home-lead">
        Hi! I'm Ritwik, a chemical engineering student at the University of Delaware.{' '}
        On campus, I'm studying wind turbines wakes in the <a href="https://sites.udel.edu/ceoe-carcher/research/" target="_blank" rel="noopener noreferrer">Archer Lab</a>.{' '}
        
      </p>

      <p>
        Previously, I worked on research at{' '}
        <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA</a>,{' '}
        <a href="https://www.princeton.edu/" target="_blank" rel="noopener noreferrer">Princeton University</a>, and{' '}
        <a href="https://www.hyalotechnologies.com/" target="_blank" rel="noopener noreferrer">Hyalo Technologies</a>.
        I'm interested in renewable energy, sustainability, and machine learning.
      </p>

      <CherryBlossomTree />
    </div>
  );
}

export default Home;
