document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.getElementById('menu-overlay');
    const body = document.body;

    // Logo clicável para voltar ao topo
    const logo = document.querySelector('.logo h1');
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Função para alternar o menu
    function toggleMenu() {
        mobileMenu.classList.toggle('menu-active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

    // Evento de clique no botão do menu
    mobileMenu.addEventListener('click', toggleMenu);

    // Evento de clique no overlay para fechar o menu
    overlay.addEventListener('click', toggleMenu);

    // Rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Fechar o menu mobile se estiver aberto
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para o cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de scroll para o cabeçalho
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.padding = '20px 0';
        }
    });

    // Animação para os cards de serviço
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simulação de envio de formulário
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
});

// Adicionar classe de animação aos elementos quando eles entrarem na viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 50) {
            element.classList.add('animated');
        }
    });
}

// Inicializar animações
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
