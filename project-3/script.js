// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO ANIMATIONS - these work fine!
// ============================================
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

// ============================================
// SCROLL ANIMATIONS - this is the struggle!
// The project cards are supposed to animate
// in one by one when you scroll to them,
// but ScrollTrigger isn't firing correctly.
// ============================================
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