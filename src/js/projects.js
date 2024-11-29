const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con carrito de compras y pagos integrados.",
    image: "https://picsum.photos/seed/1/800/600",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control con visualización de datos en tiempo real.",
    image: "https://picsum.photos/seed/2/800/600",
    tags: ["React", "Chart.js", "API REST", "Firebase"],
    link: "#"
  },
  {
    title: "Task Manager",
    description: "Aplicación de gestión de tareas con características colaborativas.",
    image: "https://picsum.photos/seed/3/800/600",
    tags: ["Vue.js", "Tailwind CSS", "Express", "PostgreSQL"],
    link: "#"
  }
];

export function renderProjects() {
  const projectsContainer = document.getElementById('projects-grid');
  if (!projectsContainer) return;
  
  projectsContainer.innerHTML = projects.map(project => `
    <div class="project-card bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden transition-all hover:-translate-y-2">
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tags.map(tag => `
            <span class="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm">${tag}</span>
          `).join('')}
        </div>
        <a href="${project.link}" class="btn-primary inline-block">Ver Proyecto →</a>
      </div>
    </div>
  `).join('');
}