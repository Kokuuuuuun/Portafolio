const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 88 },
  { name: 'React', level: 82 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 }
];

export function initSkills() {
  const skillsGrid = document.querySelector('.skills-grid');
  
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill';
    skillElement.innerHTML = `
      <h3>${skill.name}</h3>
      <div class="skill-bar">
        <div class="skill-progress" style="--skill-level: ${skill.level}%"></div>
      </div>
      <span class="skill-percentage">${skill.level}%</span>
    `;
    skillsGrid.appendChild(skillElement);
  });
}