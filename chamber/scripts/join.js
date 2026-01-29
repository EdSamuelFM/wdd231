document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.querySelector("#timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});

const menuButton = document.querySelector('#menu-button');
const navList = document.querySelector('#nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('show');
    
    if (navList.classList.contains('show')) {
        menuButton.textContent = 'X';
    } else {
        menuButton.textContent = '☰';
    }
});