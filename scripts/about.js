// Team gallery zoom effect
const images = document.querySelectorAll('.gallery img');
let index = 0;

function zoomEffect() {
    images.forEach(img => img.style.transform = 'scale(1)');
    images[index].style.transform = 'scale(1.2)';
    
    index++;
    if (index >= images.length) {
        index = 0;
    }
}

// Start animation every 3 seconds
setInterval(zoomEffect, 3000);

// Initial state
zoomEffect();
