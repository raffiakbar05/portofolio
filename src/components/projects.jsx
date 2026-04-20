// src/components/projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/dataprojects.jsx'; // Mengimpor data dari file dataprojects.jsx

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Recent Works</h2>
      <div className="projects-scroll-container">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="project-card-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-card-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.linkUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                Lihat Proyek →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;