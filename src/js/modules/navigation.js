export function initNavigation() {
  const header = document.getElementById('header');
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  let lastScroll = 0;

  initMobileMenu(menuBtn, navMenu);
  initSmoothScroll(menuBtn, navMenu);
  initScrollHeader(header, lastScroll);
}

function initMobileMenu(menuBtn, navMenu) {
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }
}

function initSmoothScroll(menuBtn, navMenu) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        closeMobileMenu(menuBtn, navMenu);
        scrollToTarget(target);
      }
    });
  });
}

function closeMobileMenu(menuBtn, navMenu) {
  menuBtn?.classList.remove('active');
  navMenu?.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function scrollToTarget(target) {
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function initScrollHeader(header, lastScroll) {
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