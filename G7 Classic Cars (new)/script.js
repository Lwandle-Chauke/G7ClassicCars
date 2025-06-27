 
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            });
        });
        
        // Page Navigation Dots
        const sections = document.querySelectorAll('section');
        const navDots = document.querySelectorAll('.nav-dot');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.dataset.section === current) {
                    dot.classList.add('active');
                }
            });
        });
        
        // Click on navigation dots
        navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const sectionId = dot.dataset.section;
                const targetSection = document.getElementById(sectionId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
    
   document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('showcaseVideo');
    const videoSection = document.querySelector('.video-section');

    // Scroll-triggered video play (only if muted)
    window.addEventListener('scroll', () => {
        if (video && videoSection) {
            const rect = videoSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible && video.paused && video.muted) {
                video.play().catch(() => {
                    // Browsers may still block autoplay silently; we just ignore it here.
                    console.log('Autoplay blocked. Waiting for user interaction..');
                });
            } else if (!isVisible && !video.paused) {
                video.pause();
            }
        }
    });

    // Unmute and play when user clicks
    video.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
        }
        video.play().catch(() => {
            console.log('Manual play blocked, but user can retry.');
        });
    });
});

// Car Fleet
// Initialize car sliders when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.car-slider').forEach(function(slider) {
        const track = slider.querySelector('.car-track');
        const slides = slider.querySelectorAll('.car-slide');
        const totalSlides = slides.length;
        
        // Exit if no slides found
        if (totalSlides === 0) return;

        let index = 0;
        
        const updateSlider = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        // Initialize slider position
        updateSlider();
        
        // Next button
        const nextBtn = slider.querySelector('.next');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                index = (index + 1) % totalSlides;
                updateSlider();
            });
        }

        // Previous button
        const prevBtn = slider.querySelector('.prev');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                index = (index - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
        }
    });
});


