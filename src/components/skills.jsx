// src/components/skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3, FaReact, FaGitAlt,
  FaUsers, FaLightbulb, FaComment, FaClock, FaRocket, FaBootstrap, FaSass
} from 'react-icons/fa';
import { SiAdobecreativecloud, SiJavascript, SiLaravel } from 'react-icons/si'; // Tambahkan SiLaravel di sini

const FigmaIcon = () => (
  <svg width="40" height="40" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M133.333 33.3333C133.333 52.619 117.952 68.0001 98.6667 68.0001C79.381 68.0001 64 52.619 64 33.3333C64 14.0476 79.381 0 98.6667 0C117.952 0 133.333 14.0476 133.333 33.3333Z" fill="#F24E1E"/>
    <path d="M133.333 100C133.333 119.286 117.952 134.667 98.6667 134.667C79.381 134.667 64 119.286 64 100C64 80.7143 79.381 65.3333 98.6667 65.3333C117.952 65.3333 133.333 80.7143 133.333 100Z" fill="#FFC700"/>
    <path d="M64 166.667C64 185.952 79.381 201.333 98.6667 201.333C117.952 201.333 133.333 185.952 133.333 166.667C133.333 147.381 117.952 132 98.6667 132C79.381 132 64 147.381 64 166.667Z" fill="#0ACF83"/>
    <path d="M208.333 33.3333C208.333 52.619 192.952 68.0001 173.667 68.0001C154.381 68.0001 139 52.619 139 33.3333C139 14.0476 154.381 0 173.667 0C192.952 0 208.333 14.0476 208.333 33.3333Z" fill="#A259FF"/>
    <path d="M208.333 100C208.333 119.286 192.952 134.667 173.667 134.667C154.381 134.667 139 119.286 139 100C139 80.7143 154.381 65.3333 173.667 65.3333C192.952 65.3333 208.333 80.7143 208.333 100Z" fill="#A259FF"/>
  </svg>
);

const hardSkillsData = [
  { name: 'Figma', icon: FigmaIcon, color: null },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React JS', icon: FaReact, color: '#61DAFB' }, // React JS sudah ada
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' }, // Tambahkan Laravel di sini
];

const softSkillsData = [
  { name: 'Kerja Tim', icon: FaUsers, color: '#4CAF50' },
  { name: 'Kreativitas', icon: FaLightbulb, color: '#FFC107' },
  { name: 'Komunikasi', icon: FaComment, color: '#2196F3' },
  { name: 'Manajemen Waktu', icon: FaClock, color: '#FF9800' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>Hard Skills</h2>
      <div className="skills-grid hard-skills">
        {hardSkillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            whileHover={{ scale: 1.1, rotate: 2 }} 
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill.icon && <skill.icon style={skill.color ? { color: skill.color } : {}} />}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>

      <h2 style={{ marginTop: '80px', marginBottom: '40px', textAlign: 'center' }}>Soft Skills</h2>
      <div className="skills-grid soft-skills">
        {softSkillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill.icon && <skill.icon style={skill.color ? { color: skill.color } : {}} />}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;