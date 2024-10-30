document.addEventListener('DOMContentLoaded', () => {
    // Create particles for each card
    document.querySelectorAll('.card').forEach(card => {
        const particles = card.querySelector('.card-particles');
        // Create 20 particle elements
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particles.appendChild(particle);
        }

        // Hover animation
        card.addEventListener('mouseenter', () => {
            // Scale up card slightly
            anime({
                targets: card,
                scale: 1.03,
                duration: 800,
                easing: 'easeOutElastic(1, .5)'
            });

            // Animate particles
            anime({
                targets: card.querySelectorAll('.particle'),
                translateX: () => anime.random(-50, 50),
                translateY: () => anime.random(-50, 50),
                opacity: [0, 1],
                scale: [0, 1],
                delay: anime.stagger(50),
                duration: 1000,
                easing: 'easeOutElastic(1, .5)',
                loop: true
            });

            // Glow effect
            anime({
                targets: card.querySelector('.card-glow'),
                opacity: [0, 0.3],
                scale: [1, 1.2],
                duration: 800,
                easing: 'easeOutExpo'
            });
        });

        // Mouse leave animation
        card.addEventListener('mouseleave', () => {
            // Scale back
            anime({
                targets: card,
                scale: 1,
                duration: 600,
                easing: 'easeOutElastic(1, .5)'
            });

            // Reset particles
            anime({
                targets: card.querySelectorAll('.particle'),
                translateX: 0,
                translateY: 0,
                opacity: 0,
                scale: 0,
                duration: 600,
                easing: 'easeOutExpo'
            });

            // Reset glow
            anime({
                targets: card.querySelector('.card-glow'),
                opacity: 0,
                scale: 1,
                duration: 600,
                easing: 'easeOutExpo'
            });
        });
    });
}); 