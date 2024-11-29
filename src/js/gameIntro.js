export function initGameIntro() {
  const gameIntro = document.getElementById('gameIntro');
  const pressStart = document.querySelector('.press-start');

  // Add click event to start the website
  gameIntro.addEventListener('click', () => {
    gameIntro.style.animation = 'gameIntroFade 1s forwards';
    setTimeout(() => {
      gameIntro.style.display = 'none';
    }, 1000);
  });

  // Auto-start after 5 seconds if user doesn't click
  setTimeout(() => {
    if (gameIntro.style.display !== 'none') {
      gameIntro.click();
    }
  }, 5000);

  // Add hover effect
  pressStart.addEventListener('mouseenter', () => {
    pressStart.style.transform = 'scale(1.1)';
  });

  pressStart.addEventListener('mouseleave', () => {
    pressStart.style.transform = 'scale(1)';
  });
}