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

document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.querySelector("#timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    const openButtons = document.querySelectorAll(".open-modal");
    const closeButtons = document.querySelectorAll(".close-modal");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.querySelector(modalId);
            if (modal) modal.showModal();
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            if (modal) modal.close();
        });
    });
});
