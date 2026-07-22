import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
        <h3>Caltech Summer Roommate Finder</h3>
        <p className="project-subtitle"><em>Meet other Techers in your city</em></p>
        <p className="project-description">
          Webapp to find summer roommates and friends from Caltech. Built for HackTech 2025 with Next.js, Mapbox, Firebase, MongoDB, Vercel.</p>
        <div className="project-links">
          <a href="https://hacktech-omega.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">project</a>
          <a href="https://github.com/jenaalsup/hacktech" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Nab</h3>
        <p className="project-subtitle"><em>E-thrifting with automatic dynamic pricing</em></p>
        <p className="project-description">
          Peer-to-peer marketplace platform designed specifically for university students to buy and sell items within their campus community. Features an exponential decay pricing algorithm that automatically adjusts listings based on move-out deadlines and real-time market conditions. Built with Next.js, Firebase, and Vercel.</p>
        <div className="project-links">
          <a href="https://nab-ashy.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">project</a>
          <a href="https://github.com/jenaalsup/nab" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Palette Party</h3>
        <p className="project-subtitle"><em>AI-Powered Color Creation</em></p>
        <p className="project-description">
          A web application that enables users to create, save, and manage their own color palettes. Utilizes generative AI to provide ratings for optimal color combinations. Built with Next.js, TailwindCSS, Firebase, and generative AI (Anthropic's Claude).
        </p>
        <div className="project-links">
          <a href="https://palette-party-552f4.web.app/" className="project-link" target="_blank" rel="noopener noreferrer">project</a>
          <a href="https://github.com/jenaalsup/palette-party" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Eco-mmerce</h3>
        <p className="project-subtitle"><em>Marketplace for Sustainable Products</em></p>
        <p className="project-description">
          Created a platform for users to discover and purchase vetted eco-friendly products.
          Submitted to Equitable Elevation Hacks 2023. 
          Built with Next.js, MongoDB, and Google Authentication.
        </p>
        <div className="project-links">
          <a href="https://eco-mmerce-seven.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">project</a>
          <a href="https://github.com/jenaalsup/eco-mmerce" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Chemical Agents in World War 1 and 2</h3>
        <p className="project-subtitle"><em>Interdisciplinary Analysis of Chemical Warfare</em></p>
        <p className="project-description">
          Studied chemical weapon development, biochemical effects, and the ethical failures surrounding wartime deployment.
          Published in ACS Bulletin for the History of Chemistry, 2026.
        </p>
        <div className="project-links">
          <a href="https://essopenarchive.org/doi/full/10.22541/essoar.176556259.99226332/v1" className="project-link" target="_blank" rel="noopener noreferrer">paper</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Adaptive Blade Pitch Control</h3>
        <p className="project-subtitle"><em>A Novel Approach to Increasing Wind Turbine Efficiency</em></p>
        <p className="project-description">
          Designed and simulated a 3D wind turbine model in Autodesk Fusion 360 with adaptive blade pitch, integrating sensor feedback (anemometers, potentiometers, wind vanes) for real-time angle adjustment.
          Presented findings at the Fall 2025 American Geophysical Union conference.
        </p>
        <div className="project-links">
          <a href="https://essopenarchive.org/doi/full/10.22541/essoar.176556259.99226332/v1" className="project-link" target="_blank" rel="noopener noreferrer">paper</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>ReCursive </h3>
        <p className="project-subtitle"><em>Gamified Cursive Learning Platform </em></p>
        <p className="project-description">
          Browser-based educational game for students to learn and practice cursive writing. Built with JS and HTML.
        </p>
        <div className="project-links">
          <a href="https://github.com/ritwiksi/ReCursive" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;