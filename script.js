document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for Fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Dynamic Background Scroll Effect
    const bgContainer = document.querySelector('.background-container');

    window.addEventListener('scroll', () => {
        if (!bgContainer) return;

        const scrolled = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        // Start from 0.3 opacity, go to 1
        const scrollFraction = Math.min(0.3 + (scrolled / (window.innerHeight * 1.5)) * 0.7, 1);

        // Update opacity
        bgContainer.style.opacity = scrollFraction;

        // Add class to body for text color contrast updates when background is dark
        if (scrollFraction > 0.3) {
            document.body.classList.add('bg-active');
        } else {
            document.body.classList.remove('bg-active');
        }
    });

    // Parallax effect for Starry Night images
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const artImages = document.querySelectorAll('.art-showcase img');
        artImages.forEach(img => {
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            img.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
        });
    });
});
