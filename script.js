document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um item (apenas para mobile)
        const navLinks = document.querySelectorAll('.nav-list li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) { // Verifica se é tela pequena
                    navList.classList.remove('active');
                }
            });
        });
    } else {
        console.error('Menu toggle or nav list not found.');
    }
});