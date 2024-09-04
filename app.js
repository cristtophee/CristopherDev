document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Mostrar mensaje de bienvenida una sola vez
    if (!localStorage.getItem('bienvenidaMostrada')) {
        setTimeout(() => {
            const bienvenidaModal = new bootstrap.Modal(document.getElementById('bienvenidaModal'));
            bienvenidaModal.show();
        }, 500);
        localStorage.setItem('bienvenidaMostrada', 'true');
    }

    // Modo Oscuro/Claro
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('tema') || 'claro';

    if (currentTheme === 'oscuro') {
        document.body.classList.add('tema-oscuro');
        themeToggleBtn.textContent = 'Modo Claro';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('tema-oscuro');
        let theme = 'claro';
        if (document.body.classList.contains('tema-oscuro')) {
            theme = 'oscuro';
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Oscuro';
        }
        localStorage.setItem('tema', theme);
    });

    // Smooth Scrolling para enlaces internos
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
                // Opcional: Cerrar el menú en dispositivos móviles después de hacer clic
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
});

