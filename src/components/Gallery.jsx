import React from 'react';
import '../styles/Gallery.css';
// Import your images from assets folder
import MOVIEAPP_JPG from '../assets/MovieApp.jpeg';
import ANIMBLOG_PNG from '../assets/animblog.png';
import PORTFOLIO_PNG from '../assets/portfolio.png';

const Gallery = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Movie Search App',
      description: 'A user-friendly movie search app with advanced filters and recommendations',
      tags: ['UI/UX', 'React', 'API Integration'],
      image: MOVIEAPP_JPG,
      project_url:'https://shashank23codes.github.io/Movie-Search-App/'
    },
    {
      id: 2,
      title: 'AnimBlog - A Blog Website',
      description: 'It is a blog website with a modern and responsive design',
      tags: ['Mobile Design', 'User Research', 'Prototyping'],
      image: ANIMBLOG_PNG,
      project_url:'https://github.com/Shashank23codes/MYBLOGSITE'

    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with modern web technologies',
      tags: ['Web Development', 'React', 'CSS3'],
      image: PORTFOLIO_PNG,
      project_url:'https://shashank23codes.github.io/Movie-Search-App/'

    }
  ];

  return (
    <section 
      className="projects" 
      id='Projects' 
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? '0' : '20px'})`,
      }}
    >
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        A selection of my recent work in UI/UX design and web development
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ animationDelay: `${project.id * 0.1}s` }}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
