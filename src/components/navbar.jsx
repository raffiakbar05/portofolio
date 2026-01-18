// src/components/navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fungsi untuk menentukan section yang sedang aktif berdasarkan posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const currentScrollPos = window.scrollY + 100; // Offset untuk penyesuaian

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          if (
            currentScrollPos >= section.offsetTop &&
            currentScrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveLink(id);
          }
        }
      });

      // Efek navbar ketika digulir
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(id);
    setIsMenuOpen(false); // Tutup menu setelah link diklik
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">Portofolio Raffiakbar</div>
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={activeLink === 'home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={activeLink === 'about' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={(e) => handleLinkClick(e, 'education')}
            className={activeLink === 'education' ? 'active' : ''}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleLinkClick(e, 'skills')}
            className={activeLink === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, 'projects')}
            className={activeLink === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;