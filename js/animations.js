class Animations {
    static initializeCardAnimations() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach((card, index) => {
            anime({
                targets: card,
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: index * 200,
                easing: 'easeOutExpo'
            });
        });
    }
} 