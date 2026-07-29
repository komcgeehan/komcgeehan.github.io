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
  
    setTimeout(function() {
    new Typed('#typed-text', {
        strings: ['Writer. Researcher. Oxford Comma Enthusiast.'],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: false,
        onComplete: function() {
            gsap.to('.hero-btn', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }
    });
}, 1200);
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

        // Group projects by client
        const clients = {};
        projects.forEach(function(project) {
            if (!clients[project.client]) {
                clients[project.client] = [];
            }
            clients[project.client].push(project);
        });

        // Build HTML grouped by client
        grid.innerHTML = Object.entries(clients).map(function([clientName, clientProjects]) {
            const cards = clientProjects.map(function(project) {
                return `
                    <a href="${project.link}" class="project-card-link">
                        <div class="project-card" aria-label="${project.title}">
                            <div class="project-card-bg" style="background-image: url('${project.image}')"></div>
                            <div class="project-card-overlay">
                                <span class="project-card-title">${project.title}</span>
                            </div>
                        </div>
                    </a>
                `;
            }).join('');

            return `
                <div class="client-section">
                    <h2 class="client-name">${clientName}</h2>
                    <div class="client-grid">${cards}</div>
                </div>
            `;
        }).join('');

        gsap.from('.client-section', {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power3.out',
            delay: 0.3
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