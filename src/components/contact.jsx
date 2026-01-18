// src/components/contact.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Hubungi Saya</h2>
      <p>Jika Anda tertarik dengan pekerjaan saya atau ingin berkolaborasi, jangan ragu untuk menghubungi saya.</p>
      <a href="mailto:akbarbaihaqy0@gmail.com" className="contact-email-link">
        akbarbaihaqy0@gmail.com
      </a>
      <div className="social-links">
        <a href="https://github.com/raffiakbar05" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/raffibaihaqy02" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/raffiakbar.03_" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}

export default Contact;