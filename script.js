// Mobile Nav Toggle - This should work now
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Fade-in effect for hero content
window.addEventListener('load', () => {
  document.querySelector('.hero-content').style.opacity = '1';
});

// Improved WhatsApp function
function openWhatsApp() {
  const phoneNumber = "919576666110";
  const message = "Hello, I'm interested in your services!";
  
  // Try to open WhatsApp app directly
  const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(appUrl, '_blank');
  
  // Fallback to web WhatsApp
  setTimeout(() => {
    if (!document.hidden) {
      const webUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(webUrl, '_blank');
    }
  }, 500);
}

// Add click event to all WhatsApp buttons/links
document.querySelectorAll('[onclick="openWhatsApp()"], .fa-whatsapp').forEach(element => {
  element.addEventListener('click', openWhatsApp);
});
