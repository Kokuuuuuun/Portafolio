import i18next from 'i18next';

export function initContact() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    if (!validateForm(formValues)) {
      return;
    }
    
    console.log('Form submitted:', formValues);
    contactForm.reset();
    
    showSuccessMessage(contactForm);
  });
}

function validateForm(values) {
  const { name, email, message } = values;
  
  if (!name || name.trim().length < 2) {
    alert(i18next.t('contact.errors.name'));
    return false;
  }
  
  if (!email || !isValidEmail(email)) {
    alert(i18next.t('contact.errors.email'));
    return false;
  }
  
  if (!message || message.trim().length < 10) {
    alert(i18next.t('contact.errors.message'));
    return false;
  }
  
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showSuccessMessage(form) {
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = i18next.t('contact.successMessage');
  form.appendChild(successMessage);
  
  setTimeout(() => {
    successMessage.remove();
  }, 3000);
}