export const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Git", level: 70 },
  // Add more skills
];

export function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'mb-4';
    skillElement.innerHTML = `
      <div class="flex justify-between mb-1">
        <span class="font-medium">${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-primary h-2.5 rounded-full" style="width: ${skill.level}%"></div>
      </div>
    `;
    skillsContainer.appendChild(skillElement);
  });
}