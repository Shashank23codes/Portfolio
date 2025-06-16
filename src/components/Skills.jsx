import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Design',
      items: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Figma', 'Adobe XD']
    },
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Animation']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'VS Code', 'Webpack', 'Node.js', 'REST APIs', 'Agile']
    }
  ];

  return (
    <section className="skills" id='Skills'>
      <h2 className="skills-title">Skills & Expertise</h2>

      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="skill-tag"
                  style={{ transform: `rotate(${Math.random() * 3 - 1.5}deg)` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;