import { gsap } from 'gsap';

export function initGameIntro() {
  const gameIntro = document.getElementById('gameIntro');
  const pressStart = document.querySelector('.press-start');

  gsap.to(pressStart, {
    scale: 1.1,
    duration: 0.8,
    repeat: -1,
    yoyo: true
  });

  gameIntro.addEventListener('click', () => {
    gsap.to(gameIntro, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        gameIntro.style.display = 'none';
        document.dispatchEvent(new Event('gameIntroComplete'));
      }
    });
  });

  setTimeout(() => {
    if (gameIntro.style.display !== 'none') {
      gameIntro.click();
    }
  }, 5000);
}