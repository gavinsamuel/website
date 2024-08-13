document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('navbar');
    const heroContent = document.querySelector('.hero-content');
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        } else {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    });

    heroContent.classList.add('in-view');
});
