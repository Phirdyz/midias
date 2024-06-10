document.addEventListener('DOMContentLoaded', function() {
    const div = document.querySelector('.dois');
    const parent = document.querySelector('.one');

    div.addEventListener('mouseover', function() {
        // Obtendo a largura e altura da seção pai
        const parentWidth = parent.clientWidth;
        const parentHeight = parent.clientHeight;

        // Calculando a nova posição aleatória garantindo que a div não saia dos limites
        const maxX = parentWidth - div.offsetWidth;
        const maxY = parentHeight - div.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Aplicando a nova posição à div
        div.style.left = `${randomX}px`;
        div.style.top = `${randomY}px`;
    });
});