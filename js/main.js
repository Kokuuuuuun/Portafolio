import { initThreeBackground } from './three-background.js';
import { renderProjects } from './projects.js';
import { initLanguage } from './language.js';
import { initContactForm } from './contact.js';
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import '../css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Inicializar componentes
    initThreeBackground();
    initLanguage();
    renderProjects();
    initContactForm();
    initTheme();
    initNavigation();

    // Animaciones GSAP
    gsap.from('.nav-link', {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Animación para las cards de proyectos
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        });
    });
});