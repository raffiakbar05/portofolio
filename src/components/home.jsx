// src/components/home.jsx
import React from 'react';

const Home = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="name-title">Hello, Saya Achmad Raffi Akbar Baihaqy</h1>
        <p className="intro-text">
          Seorang <strong className="highlight-text">UI/UX & Frontend Developer</strong> yang bersemangat untuk menciptakan pengalaman digital yang intuitif dan menarik.
        </p>
        <div className="cta-buttons">
          <button className="portfolio-button" onClick={(e) => handleScroll(e, 'projects')}>
            See My Projects
          </button>
        </div>
      </div>
      <div className="home-image-container">
        <div className="profile-image-wrapper">
          <img src="/images/foto_formal.jpeg" alt="Raffi" />
        </div>
      </div>
    </section>
  );
};

export default Home;