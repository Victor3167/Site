// --- script.js ---

// Inicializa a biblioteca de animações (AOS)
AOS.init({ duration: 1000, once: true });

// --- SISTEMA DE TRADUÇÃO COMPLETO ---
const dictionary = {
    pt: {
        navHome: "Home", navProj: "Projetos", navServ: "Serviços", navAbout: "Sobre Nós", navBlog: "Blog", navContact: "Falar com Consultor",
        heroTitle: "NATTUPAR<br>CHALÉS",
        heroDesc: "Arquitetura de refúgio. Onde o luxo da madeira nobre encontra a tecnologia construtiva.",
        statLabel1: "Projetos Entregues", statLabel2: "Valor em Obras",
        exclusiveTitle: "Nattu Exclusive",
        ben1: "Gestão de obra 100% remota via app", ben2: "Madeira de Lei Certificada", ben3: "Engenharia Climática (Isolamento Térmico)", ben4: "Entrega 'Chave na Mão'", ben5: "Garantia estrutural de 20 anos",
        btnExclusive: "BAIXAR APRESENTAÇÃO",
        proj1: "Refúgio Araucária", proj2: "Lodge Andino", proj3: "Interiores Premium", proj4: "Glass House", proj5: "Estilo Alpino", proj6: "Sunset Villa",
        footerSlogan: "Construindo legados na natureza."
    },
    en: {
        navHome: "Home", navProj: "Projects", navServ: "Services", navAbout: "About Us", navBlog: "Blog", navContact: "Talk to Expert",
        heroTitle: "NATTUPAR<br>CHALETS",
        heroDesc: "Refuge architecture. Where the luxury of noble wood meets construction technology.",
        statLabel1: "Delivered Projects", statLabel2: "Project Value",
        exclusiveTitle: "Nattu Exclusive",
        ben1: "100% remote construction management via app", ben2: "Certified Hardwood", ben3: "Climate Engineering (Thermal Insulation)", ben4: "Turnkey Delivery", ben5: "20-year structural warranty",
        btnExclusive: "DOWNLOAD BROCHURE",
        proj1: "Araucaria Refuge", proj2: "Andean Lodge", proj3: "Premium Interiors", proj4: "Glass House", proj5: "Alpine Style", proj6: "Sunset Villa",
        footerSlogan: "Building legacies in nature."
    },
    es: {
        navHome: "Inicio", navProj: "Proyectos", navServ: "Servicios", navAbout: "Nosotros", navBlog: "Blog", navContact: "Hablar con Consultor",
        heroTitle: "NATTUPAR<br>CHALETS",
        heroDesc: "Arquitectura de refugio. Donde el lujo de la madera noble encuentra la tecnología constructiva.",
        statLabel1: "Proyectos Entregados", statLabel2: "Valor en Obras",
        exclusiveTitle: "Nattu Exclusive",
        ben1: "Gestión de obra 100% remota vía app", ben2: "Madera Noble Certificada", ben3: "Ingeniería Climática (Aislamiento Térmico)", ben4: "Entrega 'Llave en Mano'", ben5: "Garantía estructural de 20 años",
        btnExclusive: "DESCARGAR PRESENTACIÓN",
        proj1: "Refugio Araucaria", proj2: "Lodge Andino", proj3: "Interiores Premium", proj4: "Glass House", proj5: "Estilo Alpino", proj6: "Sunset Villa",
        footerSlogan: "Construyendo legados en la naturaleza."
    }
};

function setLanguage(lang, element) {
    // Remove classe ativa de todos os botões de bandeira
    document.querySelectorAll('.flag-btn').forEach(el => el.classList.remove('active'));
    // Adiciona classe ativa ao botão clicado
    element.classList.add('active');

    const t = dictionary[lang];
    const replaceText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = text;
    };

    // Atualiza os textos
    replaceText('nav-home', t.navHome);
    replaceText('nav-proj', t.navProj);
    replaceText('nav-serv', t.navServ);
    replaceText('nav-about', t.navAbout);
    replaceText('nav-blog', t.navBlog);
    replaceText('nav-contact', t.navContact);
    replaceText('hero-title', t.heroTitle);
    replaceText('hero-desc', t.heroDesc);
    replaceText('stat-label-1', t.statLabel1);
    replaceText('stat-label-2', t.statLabel2);
    replaceText('exclusive-title', t.exclusiveTitle);
    replaceText('ben-1', t.ben1);
    replaceText('ben-2', t.ben2);
    replaceText('ben-3', t.ben3);
    replaceText('ben-4', t.ben4);
    replaceText('ben-5', t.ben5);
    replaceText('btn-exclusive', t.btnExclusive);
    replaceText('proj-1', t.proj1);
    replaceText('proj-2', t.proj2);
    replaceText('proj-3', t.proj3);
    replaceText('proj-4', t.proj4);
    replaceText('proj-5', t.proj5);
    replaceText('proj-6', t.proj6);
    replaceText('footer-slogan', t.footerSlogan);
}