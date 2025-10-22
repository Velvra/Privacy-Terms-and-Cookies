// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language-select');
  const content = {
    en: document.querySelectorAll('.content-en'),
    ar: document.querySelectorAll('.content-ar')
  };

  // Set initial language from localStorage or default to English
  const savedLanguage = localStorage.getItem('language') || 'en';
  setLanguage(savedLanguage);
  languageSelect.value = savedLanguage;

  // Handle language change
  languageSelect.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  });

  function setLanguage(lang) {
    // Set document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Show/hide content based on language
    Object.keys(content).forEach(language => {
      const display = language === lang ? 'block' : 'none';
      content[language].forEach(element => {
        element.style.display = display;
      });
    });

    // Add fade effect
    const activeContent = content[lang];
    activeContent.forEach(element => {
      element.classList.add('fade-enter');
      element.classList.add('fade-enter-active');
      setTimeout(() => {
        element.classList.remove('fade-enter');
        element.classList.remove('fade-enter-active');
      }, 300);
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});