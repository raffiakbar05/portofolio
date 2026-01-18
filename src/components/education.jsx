// src/components/education.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const educationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <motion.section
      id="education"
      className="education-section"
      variants={educationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Pendidikan</h2>
      <div className="education-container">
        <div className="education-item">
          <img src="/images/logo_sekolah.jpg" alt="Logo Sekolah" className="education-logo" />
          <div className="education-details">
            <h3>SMK TELKOM SIDOARJO</h3>
            <p className="degree">Jurusan Sistem Informasi Jaringan Aplikasi</p>
            <p className="year">2023 - 2027</p>
            <p className="description">Fokus pada pengembangan perangkat lunak, desain antarmuka pengguna, dan analisis data.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;