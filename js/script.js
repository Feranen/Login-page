document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    for (let i = 0; i < 7; i++) { // Generate 5 circles
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Set random size
        const size = Math.random() * 100 + 200; // Between 100px and 300px
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        // Set random position and CSS variable for animation
        const randomX = Math.random() * 200 - 100; // Random X offset
        const randomY = Math.random() * 200 - 100; // Random Y offset
        circle.style.setProperty('--x', `${randomX}px`);
        circle.style.setProperty('--y', `${randomY}px`);
        
        // Random initial position
        circle.style.top = `${Math.random() * 100}vh`;
        circle.style.left = `${Math.random() * 100}vw`;

        body.appendChild(circle);
    }
});
