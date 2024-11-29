// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar el contenido principal después de la animación
    setTimeout(() => {
        document.querySelector('.main-content').classList.remove('hidden');
    }, 4500);

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manejo del formulario
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        alert('Mensaje enviado con éxito!');
        form.reset();
    });
});