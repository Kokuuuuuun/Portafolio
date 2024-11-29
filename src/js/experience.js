const experiences = [
  {
    company: 'Empresa 1',
    position: 'Desarrollador Full Stack',
    period: '2020 - Presente',
    description: 'Descripción del trabajo realizado'
  },
  // Add more experiences here
];

export function initExperience() {
  const timeline = document.querySelector('.timeline');
  
  experiences.forEach((exp, index) => {
    const expElement = document.createElement('div');
    expElement.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
    expElement.innerHTML = `
      <div class="timeline-content">
        <h3>${exp.company}</h3>
        <h4>${exp.position}</h4>
        <p class="period">${exp.period}</p>
        <p>${exp.description}</p>
      </div>
    `;
    timeline.appendChild(expElement);
  });
}