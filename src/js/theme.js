export function initTheme() {
  const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
  const html = document.documentElement;
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    html.classList.add('dark');
    themeToggles.forEach(toggle => toggle.checked = true);
  }

  // Theme toggle handler
  themeToggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      const isDark = toggle.checked;
      html.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Sync other toggle
      themeToggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          otherToggle.checked = isDark;
        }
      });
    });
  });
}