const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const temaSalvato = localStorage.getItem('tema');

if (temaSalvato === 'light') {
    body.setAttribute('data-theme', 'light');
    if (themeToggle) themeToggle.textContent = '🌙';
} else {
    body.removeAttribute('data-theme');
    if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'light') {
            body.removeAttribute('data-theme');
            themeToggle.textContent = '☀️';
            localStorage.setItem('tema', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            themeToggle.textContent = '🌙';
            localStorage.setItem('tema', 'light');
        }
    });
}