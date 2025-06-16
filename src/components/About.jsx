import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id='About'>
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm a passionate digital artist and web developer with a unique approach to creating engaging user experiences. My work combines the dynamic storytelling of manga with modern web technologies.
          </p>
          <p className="about-text">
            With over 1 years of experience in digital art and web development, I specialize in creating immersive digital experiences that tell compelling stories through design.
          </p>
          <div className="about-buttons">
            <a href="https://drive.google.com/file/d/13rG6Dk2g4Gp3X1ZROmJ1o24T9Z1zL6WX/view?usp=sharing" download className="manga-button download-button">
              Download CV
            </a>
          </div>
        </div>

        <div className="about-stats">
          {[
            { number: '1+', text: 'Years Experience' },
            { number: '3', text: 'Projects Completed' },
            { number: '4', text: 'Happy Clients' }
          ].map((stat, index) => (
            <div key={index} className={`stat-card stat-card-${index}`}>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;