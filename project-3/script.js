// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO ANIMATIONS (index.html)
// ============================================
if (document.querySelector('.hero-title')) {
    gsap.from('.hero-eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
    });
    gsap.from('.hero-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });
    gsap.from('.hero-sub', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out'
    });
    gsap.from('.hero-btn', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out'
    });
}

// ============================================
// WORK PAGE - load projects from JSON
// ============================================
async function loadProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;

    try {
        const response = await fetch('./projects.json');
        const projects = await response.json();

        // Build project cards
        grid.innerHTML = projects.map(function(project) {
            return `
                <article class="project-card" aria-label="${project.title}">
                    <div class="project-card-inner">
                        <span class="project-category">${project.category}</span>
                        <h2 class="project-title">${project.title}</h2>
                        <p class="project-description">${project.description}</p>
                        <span class="project-year">${project.year}</span>
                    </div>
                </article>
            `;
        }).join('');

        // Animate cards in with ScrollTrigger
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '.project-grid',
                start: 'top 85%',
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out'
        });

    } catch (error) {
        grid.innerHTML = '<p>Could not load projects.</p>';
        console.error('Failed to load projects:', error);
    }
}

loadProjects();

// ============================================
// ABOUT PAGE ANIMATIONS
// ============================================
if (document.querySelector('.about-grid')) {
    gsap.from('.about-image-wrap', {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: 'power3.out'
    });
    gsap.from('.about-content', {
        opacity: 0,
        x: 40,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });
}