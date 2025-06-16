import React from 'react';
import heroImage from '../assets/hero-image.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero fade-in">
      <div className="manga-speed-lines"></div>
      <div className="hero-content manga-panel">
        <div className="hero-text">
          <h1 className="hero-title">
            Creative UI/UX Designer & Web Developer
          </h1>
          <p className="hero-description">
            Crafting beautiful, intuitive digital experiences through thoughtful design and clean code.
          </p>
          <div className="hero-buttons">
            <button className="manga-button primary-button" onClick={() => document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' })}>
              View Project
            </button>
            <button className="manga-button secondary-button" onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>
          <div className="skill-tags">
            <div className="skill-tag">UI Design</div>
            <div className="skill-tag">UX Research</div>
            <div className="skill-tag">Web Development</div>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="UI/UX Designer"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;