const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    image: '/src/assets/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#'
  },
  // Add more projects here
];

export function initProjects() {
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
          <a href="${project.demoUrl}" target="_blank" rel="noopener">Demo</a>
          <a href="${project.codeUrl}" target="_blank" rel="noopener">Código</a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectElement);
  });
}