// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = mobileMenuBtn.querySelector('i');
        
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden') && 
                !mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                toggleMobileMenu();
            }
        });
        
        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    }
    
    // Wave animation on hover for social icons
    const socialIcons = document.querySelectorAll('footer a[href^="#"], .contact-info a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const iconElement = icon.querySelector('i');
            if (iconElement) {
                iconElement.classList.add('wave');
            }
        });
        
        icon.addEventListener('mouseleave', () => {
            const iconElement = icon.querySelector('i');
            if (iconElement) {
                iconElement.classList.remove('wave');
            }
        });
    });
    
    // Random glow effect for skills icons
    const skillIcons = document.querySelectorAll('.flex-wrap.justify-center div');
    
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * skillIcons.length);
        skillIcons[randomIndex].classList.add('glow');
        
        setTimeout(() => {
            skillIcons[randomIndex].classList.remove('glow');
        }, 2000);
    }, 3000);
    
    // Form submission handling
    // Handled in main HTML file with WhatsApp integration
});
