// Navigation Module
export function initNavigation() {
  const header = document.getElementById('header');
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  let lastScroll = 0;

  // Mobile menu toggle
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu?.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuBtn?.contains(e.target)) {
      menuBtn?.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        // Close mobile menu if open
        menuBtn?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.classList.remove('no-scroll');

        // Smooth scroll to target
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Hide/show header on scroll
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header?.classList.remove('hidden');
      return;
    }
    
    if (currentScroll > lastScroll && !header?.classList.contains('hidden')) {
      header?.classList.add('hidden');
    } else if (currentScroll < lastScroll && header?.classList.contains('hidden')) {
      header?.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
}