// src/components/projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/dataprojects.jsx'; // Mengimpor data dari file dataprojects.jsx

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Recent Works</h2>
      {projectsData.map((project, index) => (
        <motion.div
          key={project.id}
          className={`project-item ${index % 2 === 1 ? 'reverse-layout' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project-image-container">
            <img src={project.imageUrl} alt={project.title} />
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.linkUrl} className="project-link" target="_blank" rel="noopener noreferrer">
              Lihat Proyek →
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;