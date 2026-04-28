gsap.registerPlugin(ScrollTrigger);


gsap.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.to('.hero-sub', {
    opacity: 1,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
});

gsap.to('.hero-btn', {
    opacity: 1,
    duration: 1,
    delay: 0.7,
    ease: 'power3.out'
});


gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 80%',
    },
    opacity: 0,
    y: 60,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power3.out'
});