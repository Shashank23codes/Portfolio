import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_ggk4xbb', // Replace with your EmailJS service ID
      'template_78me4tj', // Replace with your EmailJS template ID
      form.current,
      'Z_J5n3HL0aueHiZLL' // Replace with your EmailJS public key
    )
      .then((result) => {
        setStatus('Message sent successfully!');
        form.current.reset();
        setTimeout(() => setStatus(''), 3000);
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <section className="contact" id='Contact'>
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect!</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="form-input form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
          {status && (
            <div className={`status-message ${status.includes('success') ? 'status-success' : 'status-error'}`}>
              {status}
            </div>
          )}
        </form>

        <div className="contact-info">
          <a href="mailto:shashankgupt4068@gmail.com" className="contact-link">
            📧 shashankgupt4068@gmail.com
          </a>
          <a href="tel:8956730349" className="contact-link">
            📞 8956730349
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;