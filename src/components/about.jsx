// src/components/about.jsx
import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image-container">
        <img src="/images/foto saya.jpg" alt="Foto Profil" className="about-image" />
      </div>
      <div className="content">
        <h2>About Me</h2>
        <p>
          Saya merupakan siswa SMK Telkom Sidoarjo. Pada saat duduk di kelas XI, saya mengikuti program Digital Talent Program dan memilih kelas Hipster. 
          Melalui program tersebut, saya mulai mendalami bidang UI/UX Design dan Frontend Development, khususnya dalam merancang tampilan website maupun aplikasi. 
          Pengalaman ini menumbuhkan minat dan ketertarikan saya terhadap bidang tersebut, sehingga saya bercita-cita untuk berkarier secara profesional sesuai dengan kompetensi yang saya miliki.
        </p>
      </div>
    </section>
  );
}

export default About;