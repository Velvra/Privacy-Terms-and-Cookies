// Language switcher and interactive functionality
document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language-select');
  
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
    // Set document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Add fade animation to body when language changes
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 0.4s ease';
    }, 100);
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Initialize scroll animations
  const animateElements = document.querySelectorAll('.card, .discord-widget, .policy-content');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    observer.observe(el);
  });

  // Dynamic Navbar transparency
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '0.5rem 0';
      navbar.style.background = 'rgba(10, 10, 11, 0.85)';
    } else {
      navbar.style.padding = '1rem 0';
      navbar.style.background = 'var(--glass-bg)';
    }
  });
});
