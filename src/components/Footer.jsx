import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Projects', 'Contact'];
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Shashank23codes',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shashank-gupta-238a96209/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shashan_gupta/',
    },
    {
      name: 'Bento.me',
      url: 'https://bento.me/shashank-gupta',
    }
  ];

  return (
    <footer className="manga-footer">
      <div className="footer-content">
        <QuickLinks links={quickLinks} />
        <SocialConnect socials={socialLinks} />
        <Newsletter />
      </div>

      <Copyright />
    </footer>
  );
};

const QuickLinks = ({ links }) => (
  <div>
    <h3 className="footer-heading">Quick Links</h3>
    <ul className="footer-links">
      {links.map((link) => (
        <li key={link}>
          <a href={`#${link.toLowerCase()}`}>→ {link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialConnect = ({ socials }) => (
  <div>
    <h3 className="footer-heading">Connect</h3>
    <div className="social-links">
      {socials.map((social) => (
        <a 
          key={social.name} 
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {social.icon} {social.name}
        </a>
      ))}
    </div>
  </div>
);

const Newsletter = () => (
  <div>
    <h3 className="footer-heading">Newsletter</h3>
    <div className="newsletter-form">
      <input
        type="email"
        placeholder="Enter your email"
        className="newsletter-input"
      />
      <button className="newsletter-button">Subscribe</button>
    </div>
  </div>
);

const Copyright = () => (
  <div className="copyright">
    <p>© 2025 Shashank's Portfolio. All rights reserved.</p>
  </div>
);

export default Footer;