// ===== SUPER RETRO LIBRARY EFFECTS =====

// Falling elements (stars, globes, books)
function createFallingElement() {
    const container = document.getElementById('falling-container');
    if (!container) return;

    const element = document.createElement('div');
    const items = ['⭐', '🌍', '📚', '🎉', '✨', '🌐', '🎊', '💫'];
    element.textContent = items[Math.floor(Math.random() * items.length)];
    element.style.position = 'absolute';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = '-50px';
    element.style.fontSize = (Math.random() * 20 + 15) + 'px';
    element.style.opacity = Math.random() * 0.5 + 0.5;
    element.style.animation = `fall ${Math.random() * 3 + 3}s linear forwards`;
    
    container.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 6000);
}

// Create falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(110vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);

// Start falling elements
setInterval(createFallingElement, 300);

// Add sparkle effect on hover for country cards
document.querySelectorAll('.country-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.2)';
        // Play a sound effect (browser might block)
        // new Audio('data:audio/wav;base64,...').play();
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.filter = 'none';
    });
});

// Update visitor counter with random increment
const counter = document.querySelector('.visitor-counter');
if (counter) {
    let count = parseInt(localStorage.getItem('libraryVisitors') || '1');
    count++;
    localStorage.setItem('libraryVisitors', count);
    counter.textContent = 'VISITEURS: ' + String(count).padStart(6, '0');
}

// Rainbow cursor trail
let lastX = 0, lastY = 0;
document.addEventListener('mousemove', function(e) {
    if (Math.abs(e.clientX - lastX) > 10 || Math.abs(e.clientY - lastY) > 10) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 10px;
            height: 10px;
            background: hsl(${Math.random() * 360}, 100%, 50%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: trail-fade 0.5s forwards;
        `;
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 500);
        
        lastX = e.clientX;
        lastY = e.clientY;
    }
});

// Add trail animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trail-fade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(trailStyle);

console.log('🌍 Bienvenue dans la Bibliothèque Git ! 📚');
console.log('Ce site est optimisé pour Internet Explorer 6.0 😂');
