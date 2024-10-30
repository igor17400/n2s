document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    Animations.initializeCardAnimations();
    Animations.initializeHoverEffects();
    
    // Handle responsive behavior
    const handleResize = Utils.debounce(() => {
        // Responsive logic
    }, 250);
    
    window.addEventListener('resize', handleResize);
}); 