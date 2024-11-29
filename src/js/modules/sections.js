import { skills } from '../data/skills.js';
import { projects } from '../data/projects.js';
import { experiences } from '../data/experiences.js';

export function initSections() {
  initSkills();
  initProjects();
  initExperience();
}

function initSkills() {
  const skillsGrid = document.querySelector('.skills-grid');
  
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill';
    skillElement.innerHTML = `
      <div class="skill-header">
        <i class="fab fa-${skill.icon}"></i>
        <h3>${skill.name}</h3>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="--skill-level: ${skill.level}%"></div>
      </div>
      <span class="skill-percentage">${skill.level}%</span>
    `;
    skillsGrid.appendChild(skillElement);
  });
}

function initProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  
  projects.forEach(project => {
    const projectElement = document.createElement('article');
    projectElement.className = 'project-card';
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn">Demo</a>
          <a href="${project.codeUrl}" target="_blank" rel="noopener" class="btn btn-outline">Código</a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectElement);
  });
}

function initExperience() {
  const timeline = document.querySelector('.timeline');
  
  experiences.forEach((exp, index) => {
    const expElement = document.createElement('div');
    expElement.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
    expElement.innerHTML = `
      <div class="timeline-content" data-aos="fade-${index % 2 === 0 ? 'right' : 'left'}">
        <h3>${exp.company}</h3>
        <h4>${exp.position}</h4>
        <p class="period">${exp.period}</p>
        <p>${exp.description}</p>
      </div>
    `;
    timeline.appendChild(expElement);
  });
}