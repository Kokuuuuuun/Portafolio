// Importar dependencias
import { initThreeBackground } from './three-background.js';

// Configuración de proyectos
const projects = [
    {
        title: "AI-Powered Task Manager",
        description: "Aplicación de gestión de tareas que utiliza IA para priorizar y categorizar automáticamente las tareas.",
        image: "https://picsum.photos/seed/1/800/600",
        tags: ["React", "Node.js", "OpenAI", "MongoDB"],
        link: "https://github.com/carlosdev/ai-task-manager"
    },
    {
        title: "E-commerce 3D Viewer",
        description: "Plataforma de comercio electrónico con visualización 3D de productos en tiempo real.",
        image: "https://picsum.photos/seed/2/800/600",
        tags: ["Three.js", "Next.js", "Stripe", "AWS"],
        link: "https://github.com/carlosdev/3d-ecommerce"
    },
    {
        title: "Real-time Collaboration Tool",
        description: "Herramienta de colaboración en tiempo real para equipos remotos con características de chat y whiteboard.",
        image: "https://picsum.photos/seed/3/800/600",
        tags: ["Socket.io", "React", "Express", "PostgreSQL"],
        link: "https://github.com/carlosdev/collab-tool"
    }
];

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS para animaciones de scroll
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Inicializar Three.js background
    initThreeBackground();

    // Renderizar proyectos
    renderProjects();

    // Inicializar formulario de contacto
    initContactForm();

    // Inicializar animaciones GSAP
    initGSAPAnimations();
});

// Función para renderizar proyectos
function renderProjects() {
    const projectsContainer = document.getElementById('projects-grid');
    
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden transition-all hover:-translate-y-2" data-aos="fade-up">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `
                        <span class="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm">${tag}</span>
                    `).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="btn-primary inline-block">
                    Ver Proyecto
                    <span class="ml-2">→</span>
                </a>
            </div>
        </div>
    `).join('');
}

// Función para manejar el formulario de contacto
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            // Simular envío de formulario
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            form.reset();
            successMessage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
            
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        } catch (error) {
            errorMessage.classList.remove('hidden');
            setTimeout(() => {
                errorMessage.classList.add('hidden');
            }, 5000);
        }
    });
}

// Función para inicializar animaciones GSAP
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Animación del nav
    gsap.from('.nav-link', {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Animaciones al hacer scroll
    gsap.utils.toArray('.about-block').forEach(block => {
        gsap.from(block, {
            scrollTrigger: {
                trigger: block,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Animación para las skill cards
    gsap.utils.toArray('.skill-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=50',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    });
}