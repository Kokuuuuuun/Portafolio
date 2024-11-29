export function initContact() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    // Validate form
    if (!validateForm(formValues)) {
      return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formValues);
    contactForm.reset();
    alert('Mensaje enviado correctamente');
  });
}

function validateForm(values) {
  const { name, email, message } = values;
  
  if (!name || name.trim().length < 2) {
    alert('Por favor ingrese un nombre válido');
    return false;
  }
  
  if (!email || !isValidEmail(email)) {
    alert('Por favor ingrese un email válido');
    return false;
  }
  
  if (!message || message.trim().length < 10) {
    alert('Por favor ingrese un mensaje de al menos 10 caracteres');
    return false;
  }
  
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}