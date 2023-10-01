const sobraBtn = document.getElementById('sobraBtn');
const hindeBtn = document.getElementById('hindeBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

sobraBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

hindeBtn.addEventListener('click', () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    hindeBtn.style.position = 'absolute';
    hindeBtn.style.left = `${randomX}px`;
    hindeBtn.style.top = `${randomY}px`;
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
