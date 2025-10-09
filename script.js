// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });

  // Close menu when clicking on nav links
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// // Navbar scroll effect
// window.addEventListener('scroll', () => {
//   const navbar = document.querySelector('.navbar');
//   if (window.scrollY > 100) {
//     navbar.style.background = 'rgba(255, 255, 255, 0.98)';
//     navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//   } else {
//     navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//     navbar.style.boxShadow = 'none';
//   }
// });

// Animated counters for statistics
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      // Animate counters when they come into view
      if (entry.target.classList.contains('stat-number')) {
        const text = entry.target.textContent;
        const number = parseInt(text.replace(/[^\d]/g, ''));
        if (number) {
          entry.target.textContent = '0';
          setTimeout(() => {
            animateCounter(entry.target, number);
          }, 200);
        }
      }
      
      // Animate metric values
      function animateCounter(el, value, suffix = '') {
        let current = 0;
        const increment = value / 50; // define a velocidade (quanto menor, mais devagar)
        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            clearInterval(interval);
            el.textContent = value + suffix; // valor final com sufixo
          } else {
            el.textContent = Math.floor(current) + suffix;
          }
        }, 20);
      }
    }
  });
}, observerOptions);
// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  // Add animation classes to elements
  const animatedElements = document.querySelectorAll(`
    .service-card,
    .process-step,
    .benefit-item,
    .project-card,
    .tool-card,
    .contact-item,
    .stat-number,
    .metric-value
  `);
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      // Show success message
      showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
      
      // Reset form
      this.reset();
      
      // Reset button
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }, 2000);
  });
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#10B981' : '#3498DB'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;
  
  notification.querySelector('.notification-content').style.cssText = `
    display: flex;
    align-items: center;
    gap: 0.75rem;
  `;
  
  notification.querySelector('.notification-close').style.cssText = `
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0;
    margin-left: auto;
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
  
  // Close button functionality
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => notification.remove(), 300);
  });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-shape');
  
  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card, .project-card, .tool-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// // Typing effect for hero title
// function typeWriter(element, text, speed = 100) {
//   let i = 0;
//   element.innerHTML = '';
  
//   function type() {
//     if (i < text.length) {
//       element.innerHTML += text.charAt(i);
//       i++;
//       setTimeout(type, speed);
//     }
//   }
  
//   type();
// }

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 50);
    }, 1000);
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Smooth reveal animations for sections
const revealSections = () => {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = 150;
    
    if (sectionTop < window.innerHeight - sectionVisible) {
      section.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealSections);
document.addEventListener('DOMContentLoaded', revealSections);

// Add CSS for section animations
const style = document.createElement('style');
style.textContent = `
  section {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  section.active {
    opacity: 1;
    transform: translateY(0);
  }
  
  .loaded {
    overflow-x: hidden;
  }
`;
document.head.appendChild(style);


document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const indicators = document.querySelectorAll('.indicator');
  let currentIndex = 0;
  let autoSlideInterval;
  const totalSlides = slides.length;
  const slideWidth = 100; // % da largura

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentIndex));
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Eventos
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  indicators.forEach((ind, i) => ind.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  }));

  // Autoplay
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Iniciar autoplay e pausar no hover
  startAutoSlide();
  const wrapper = document.querySelector('.carousel-wrapper');
  wrapper.addEventListener('mouseenter', stopAutoSlide);
  wrapper.addEventListener('mouseleave', startAutoSlide);

  // Responsivo: Ajustar slides baseados em breakpoint (opcional, via CSS media queries)
  updateCarousel();
});
