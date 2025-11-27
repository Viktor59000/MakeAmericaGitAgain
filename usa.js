document.addEventListener('DOMContentLoaded', () => {
    // Annoying welcome message
    // setTimeout(() => alert("WELCOME TO THE LAND OF THE FREE !!!"), 500);

    const container = document.getElementById('falling-container');
    const button = document.getElementById('freedom-btn');

    // List of USA clichés (emojis)
    const cliches = ['🍔', '🌭', '🦅', '🇺🇸', '🗽', '🏈', '⚾', '🤠', '💸', '🔫', '🥤'];

    function createFallingItem() {
        const item = document.createElement('div');
        item.classList.add('falling-item');
        item.innerText = cliches[Math.floor(Math.random() * cliches.length)];

        // Randomize position and animation properties
        const startLeft = Math.random() * 100;
        const duration = Math.random() * 3 + 2; // 2 to 5 seconds

        item.style.left = `${startLeft}vw`;
        item.style.animationDuration = `${duration}s`;

        container.appendChild(item);

        // Remove element after animation finishes
        setTimeout(() => {
            item.remove();
        }, duration * 1000);
    }

    // Create a falling item every 400ms
    setInterval(createFallingItem, 400);

    // Button interaction
    button.addEventListener('click', () => {
        alert("CAW CAW !!! FREEDOM !!! 🦅🦅🦅");
        // Burst of items
        for (let i = 0; i < 50; i++) {
            setTimeout(createFallingItem, i * 20);
        }
    });

    // Cursor Trail Effect
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.innerText = '🦅';
        trail.style.left = `${e.pageX}px`;
        trail.style.top = `${e.pageY}px`;
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 800);
    });
});
