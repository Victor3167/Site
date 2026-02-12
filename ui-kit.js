// --- ui-kit.js ---

const HeaderComponent = `
    <nav>
        <div class="logo logo-font">NATTUPAR S.A.</div>
        
        <ul class="nav-center">
            <li><a href="home.html">Home</a></li>
            <li><a href="projetos.html">Projetos</a></li>
            <li><a href="servicos.html">Serviços</a></li>
            <li><a href="sobre.html">Sobre Nós</a></li>
            <li><a href="blog.html">Blog</a></li>
        </ul>

        <div class="nav-right">
            <div class="flags-container">
                <button class="flag-btn active" onclick="setLanguage('pt', this)" title="Português">
                    <img src="https://flagcdn.com/w40/br.png" alt="Brasil">
                </button>
                <button class="flag-btn" onclick="setLanguage('en', this)" title="English">
                    <img src="https://flagcdn.com/w40/us.png" alt="USA">
                </button>
                <button class="flag-btn" onclick="setLanguage('es', this)" title="Español">
                    <img src="https://flagcdn.com/w40/py.png" alt="Paraguay">
                </button>
            </div>
            <a href="#" class="btn-header">Falar com Consultor</a>
        </div>
    </nav>
`;

const FooterComponent = `
    <footer class="nattu-footer">
        <div class="footer-container">
            <div class="footer-col brand-col">
                <h2 class="footer-logo">NATTUPAR S.A.</h2>
                <p class="footer-slogan" id="footer-slogan">Construindo legados na natureza.</p>
            </div>
            <div class="footer-col">
                <h3 class="footer-heading">NAVEGAÇÃO</h3>
                <ul class="footer-links">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="projetos.html">Projetos</a></li>
                    <li><a href="servicos.html">Serviços</a></li>
                    <li><a href="sobre.html">Sobre Nós</a></li>
                    <li><a href="blog.html">Blog</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3 class="footer-heading">CONTATO</h3>
                <ul class="contact-list">
                    <li>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <a href="mailto:contato@nattupar.com.py">contato@nattupar.com.py</a>
                    </li>
                    <li>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <a href="tel:+595983123456">+595 983 123 456</a>
                    </li>
                    <li>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <a href="#">Hernandarias, Paraguay</a>
                    </li>
                </ul>
            </div>
            <div class="footer-col">
                <h3 class="footer-heading">SOCIAL</h3>
                <div class="social-icons">
                    <a href="#" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Instagram</span>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="#" aria-label="WhatsApp">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Nattupar S.A. | Todos os direitos reservados.</p>
            <div class="legal-links">
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos de Uso</a>
            </div>
        </div>
    </footer>
`;

// Função que carrega os componentes na página
function loadUI() {
    document.getElementById('header-app').innerHTML = HeaderComponent;
    document.getElementById('footer-app').innerHTML = FooterComponent;
}

// Executa ao carregar
document.addEventListener("DOMContentLoaded", loadUI);