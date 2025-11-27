document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('falling-container');
    const button = document.getElementById('pierogi-btn');

    const cliches = ['🥟', '🦅', '🥔', '🎹', '🇵🇱', '🏰'];

    function createFallingItem() {
        const item = document.createElement('div');
        item.classList.add('falling-item');
        item.innerText = cliches[Math.floor(Math.random() * cliches.length)];

        const startLeft = Math.random() * 100;
        const duration = Math.random() * 3 + 2;

        item.style.left = `${startLeft}vw`;
        item.style.animationDuration = `${duration}s`;

        container.appendChild(item);

        setTimeout(() => { item.remove(); }, duration * 1000);
    }

    setInterval(createFallingItem, 400);

    button.addEventListener('click', () => {
        alert("NA ZDROWIE! 🥟 PIEROGI POWER! 🥔");
    });
});
