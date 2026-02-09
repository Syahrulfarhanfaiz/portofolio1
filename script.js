/**
 * =============================================
 * PORTFOLIO WEBSITE - GAME THEME JAVASCRIPT
 * =============================================
 * Author: Your Name
 * Description: Interactive features for game-themed portfolio
 * =============================================
 */

// ===== DOM ELEMENTS =====
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// ===== THEME TOGGLE FUNCTIONALITY =====
/**
 * Initialize theme based on saved preference or system preference
 * Default is dark mode
 */
function initTheme() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme) {
        // Use saved preference
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Default to dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

/**
 * Toggle between dark and light themes
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('portfolio-theme', newTheme);
    
    // Add animation class for smooth transition
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 300);
}

// Theme toggle event listener
themeToggle.addEventListener('click', toggleTheme);

// Initialize theme on page load
initTheme();

// ===== MOBILE MENU FUNCTIONALITY =====
/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Mobile menu button event listener
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to current section's link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// ===== SCROLL ANIMATIONS =====
/**
 * Intersection Observer for scroll animations
 */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Optional: Unobserve after animation (one-time animation)
            // scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
animatedElements.forEach(element => {
    scrollObserver.observe(element);
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
/**
 * Enable smooth scrolling for all anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
/**
 * Add/remove navbar background on scroll
 */
const navbar = document.querySelector('.navbar');

function updateNavbarBackground() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbarBackground);

// ===== TYPING EFFECT (OPTIONAL) =====
/**
 * Simple typing effect for hero section
 * Uncomment and modify if you want to use it
 */
/*
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Usage example:
// const heroName = document.querySelector('.name-glow');
// typeWriter(heroName, 'Your Name', 150);
*/

// ===== PARALLAX EFFECT FOR ORBS (OPTIONAL) =====
/**
 * Add subtle parallax effect to background orbs
 */
function parallaxOrbs() {
    const orbs = document.querySelectorAll('.glow-orb');
    const scrolled = window.scrollY;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.1;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Enable parallax on scroll (uncomment to activate)
// window.addEventListener('scroll', parallaxOrbs);

// ===== SKILL BADGE HOVER EFFECT =====
/**
 * Add interactive glow effect to skill badges
 */
const skillBadges = document.querySelectorAll('.skill-badge');

skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== PROJECT CARD TILT EFFECT =====
/**
 * Add subtle 3D tilt effect to project cards on hover
 */
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== CONSOLE WELCOME MESSAGE =====
/**
 * Display welcome message in browser console
 */
console.log('%c Welcome to My Portfolio! ', 'background: #00ffcc; color: #0d0d1a; font-size: 16px; font-weight: bold; padding: 10px; border-radius: 5px;');
console.log('%c Built with ♥ using HTML, CSS & JavaScript ', 'background: #1a1a2e; color: #00ffcc; font-size: 12px; padding: 5px;');

// ===== PAGE LOAD ANIMATION =====
/**
 * Trigger animations when page is fully loaded
 */
window.addEventListener('load', function() {
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Initial update for active nav link
    updateActiveNavLink();
});

// ===== KEYBOARD NAVIGATION =====
/**
 * Add keyboard support for theme toggle
 */
themeToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
    }
});

// ===== REDUCE MOTION FOR ACCESSIBILITY =====
/**
 * Check for reduced motion preference
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-normal', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// ===== END OF SCRIPT =====
