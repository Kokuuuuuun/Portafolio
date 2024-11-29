export function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      form.reset();
      successMessage.classList.remove('hidden');
      errorMessage.classList.add('hidden');
      
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 5000);
    } catch (error) {
      errorMessage.classList.remove('hidden');
      setTimeout(() => {
        errorMessage.classList.add('hidden');
      }, 5000);
    }
  });
}