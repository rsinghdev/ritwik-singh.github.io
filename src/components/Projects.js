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
        <h3>Compost Share</h3>
        <p className="project-subtitle"><em>Find and Share Composting Spots</em></p>
        <p className="project-description">
          Interactive web app which allows users to share, post, and look for local composting stations.
          Built with React, MongoDB, and the Google Maps API.
          Won first place at Cal Earth Hacks 2020.
        </p>
        <div className="project-links">
          <a href="https://compost-share.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">project</a>
          <a href="https://github.com/meiaalsup/compost-share" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
          <a href="https://devpost.com/software/compost-share" className="project-link" target="_blank" rel="noopener noreferrer">devpost</a>
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
        <h3>Super Snazzy Schedule</h3>
        <p className="project-subtitle"><em>Scheduling System</em></p>
        <p className="project-description">
          Wellness app for students to maintain a healthy and productive schedule while quarantined. Submitted to Silicon Valley Hacks 2020. Built with Java.
        </p>
        <div className="project-links">
          <a href="https://github.com/jenaalsup/SuperSnazzySchedule" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;