document.addEventListener('mousemove', (e) => {
    const planets = document.querySelectorAll('.planet');
    const moveX = (e.clientX / window.innerWidth) * 100 - 50;
    const moveY = (e.clientY / window.innerHeight) * 100 - 50;

    planets.forEach((planet) => {
        const depth = planet.getBoundingClientRect().width; // Usa la larghezza come un valore di profondità
        planet.style.transform = `translate3d(${moveX / depth * 10}px, ${moveY / depth * 10}px, ${depth}px)`;
    });
});
