export function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
  } else {
    document.body.className = prefersDarkScheme.matches ? 'dark-theme' : 'light-theme';
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  });
}