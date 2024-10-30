document.addEventListener('DOMContentLoaded', () => {
    // Get the path length for the background shape
    const bgPath = document.querySelector('.bg-path');
    const pathLength = bgPath.getTotalLength();

    // Set up initial styles
    bgPath.style.strokeDasharray = pathLength;
    bgPath.style.strokeDashoffset = pathLength;

    // Create the animation timeline
    const timeline = anime.timeline({
        easing: 'easeInOutSine',
        duration: 1500
    });

    // Add animations to the timeline
    timeline
        .add({
            targets: '.bg-path',
            strokeDashoffset: [pathLength, 0],
            duration: 2000,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: '.logo-text',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: function() {
                // Show content with staggered timing
                setTimeout(() => {
                    document.querySelector('.content-wrapper').classList.add('visible');
                }, 300);
                
                setTimeout(() => {
                    document.querySelector('.expectations').classList.add('visible');
                }, 600);
                
                setTimeout(() => {
                    document.querySelector('.links').classList.add('visible');
                }, 900);
            }
        }, '-=1000');
});