// ------------------------------------------------------------
// Local Data Config (Pre-loaded to prevent browser CORS blocks)
// ------------------------------------------------------------
const BRANDS_DATA = {
    "mario-neto": {
        "brand_name": "Óptica Mário Neto",
        "domain": "www.opticamarioneto.com.br",
        "theme": {
            "body_bg": "#020205",
            "text_color": "#ffffff",
            "primary_color": "#0d1b2a",
            "secondary_color": "#1b263b",
            "accent_color": "#d4af37",
            "glow": "rgba(212, 175, 55, 0.35)",
            
            "card_bg": "rgba(255, 255, 255, 0.03)",
            "card_border": "rgba(255, 255, 255, 0.08)",
            "card_text": "#ffffff",
            "card_text_secondary": "rgba(255, 255, 255, 0.7)",
            
            "navbar_bg": "rgba(2, 2, 5, 0.7)",
            "nav-link-color": "rgba(255, 255, 255, 0.75)",
            "footer_bg": "#020205",
            "title_color": "#ffffff",
            
            "font_family_url": "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap",
            "font_name": "'Montserrat', sans-serif",
            "logo": "mario-neto/logo/logo.png",
            "canvas_style": "gold"
        },
        "history": "Carregamos conosco uma história de parceria que é transmitida de geração para geração com os valores da honestidade, paixão e confiança nos guiando rumo ao futuro. Ajudamos as pessoas a enxergarem melhor desde 1929. São mais de 90 anos buscando sempre o melhor para nossos clientes, entendendo e atendendo suas necessidades.",
        "fundacao": "1929",
        "stats": {
            "modelos": "2.000+",
            "lojas": "5",
            "anos": "90+"
        },
        "unidades": [
            {
                "nome": "Unidade Centro (Matriz)",
                "endereco": "Rua Barão de Parnaíba, 429, Botafogo – Campinas/SP",
                "whatsapp": "5519987061362",
                "telefone": "(19) 3237-6891",
                "gmaps_link": "https://maps.google.com/?q=Rua+Barão+de+Parnaíba+429+Campinas",
                "size": "large"
            },
            {
                "nome": "Unidade Botafogo",
                "endereco": "Rua Dr. Mascarenhas, 264, Botafogo – Campinas/SP",
                "whatsapp": "5519981881302",
                "telefone": "(19) 3235-2279",
                "gmaps_link": "https://maps.google.com/?q=Rua+Dr+Mascarenhas+264+Campinas",
                "size": "medium"
            },
            {
                "nome": "Unidade Nova Campinas",
                "endereco": "Av. Dr. Hermas Braga, 96, Nova Campinas – Campinas/SP",
                "whatsapp": "5519997452138",
                "telefone": "(19) 2042-1576",
                "gmaps_link": "https://maps.google.com/?q=Av+Dr+Hermas+Braga+96+Campinas",
                "size": "medium"
            },
            {
                "nome": "Unidade Swiss Park",
                "endereco": "Av. Antônio Artioli, 570, Bloco B2, Loja 02, Swiss Park Office – Campinas/SP",
                "whatsapp": "5519983728981",
                "telefone": "",
                "gmaps_link": "https://maps.google.com/?q=Av+Antônio+Artioli+570+Campinas",
                "size": "small"
            },
            {
                "nome": "Unidade Shopping Dom Pedro",
                "endereco": "Av. Guilherme Campos, 500, Jardim Santa Genebra – Campinas/SP",
                "whatsapp": "5519989819172",
                "telefone": "",
                "gmaps_link": "https://maps.google.com/?q=Shopping+Dom+Pedro+Campinas",
                "size": "small"
            }
        ]
    },
    "conceicao": {
        "brand_name": "Óptica Conceição",
        "domain": "www.opticaconceicao.com.br",
        "theme": {
            "body_bg": "#ffffff",
            "text_color": "#1e293b",
            "primary_color": "#075691",
            "secondary_color": "#1b70b4",
            "accent_color": "#075691",
            "glow": "rgba(7, 86, 145, 0.15)",
            
            "card_bg": "rgba(7, 86, 145, 0.04)",
            "card_border": "rgba(7, 86, 145, 0.1)",
            "card_text": "#075691",
            "card_text_secondary": "#475569",
            
            "navbar_bg": "rgba(255, 255, 255, 0.85)",
            "nav-link-color": "#334155",
            "footer_bg": "#f8fafc",
            "title_color": "#075691",
            
            "font_family_url": "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap",
            "font_name": "'Montserrat', sans-serif",
            "logo": "conceicao/logo/preto.png",
            "logo_dark_bg": "conceicao/logo/branco.png",
            "canvas_style": "blue-white"
        },
        "history": "Tradição e excelência no cuidado visual. A Óptica Conceição destaca-se pelo compromisso e atendimento próximo de cada cliente, proporcionando as melhores armações e a mais avançada tecnologia em lentes sob medida.",
        "fundacao": "2026",
        "stats": {
            "modelos": "1.500+",
            "lojas": "2",
            "anos": "Premium"
        },
        "unidades": [
            {
                "nome": "Unidade Conceição 1084",
                "endereco": "Rua Exemplo Conceição, 1084 – Campinas/SP",
                "whatsapp": "5519999999999",
                "telefone": "(19) 3333-3333",
                "gmaps_link": "https://maps.google.com/?q=Rua+Exemplo+Conceicao+1084+Campinas",
                "size": "large"
            },
            {
                "nome": "Unidade Conceição 1109",
                "endereco": "Rua Exemplo Conceição, 1109 – Campinas/SP",
                "whatsapp": "5519999999999",
                "telefone": "(19) 3333-3334",
                "gmaps_link": "https://maps.google.com/?q=Rua+Exemplo+Conceicao+1109+Campinas",
                "size": "large"
            }
        ]
    }
};

// ------------------------------------------------------------
// Brand Selection Logic
// ------------------------------------------------------------
function getActiveBrand() {
    const urlParams = new URLSearchParams(window.location.search);
    let brandKey = urlParams.get('brand') || window.location.hash.substring(1);
    
    if (!brandKey) {
        const host = window.location.hostname;
        if (host.includes('conceicao')) {
            brandKey = 'conceicao';
        } else {
            brandKey = 'mario-neto'; // default
        }
    }
    
    if (!BRANDS_DATA[brandKey]) {
        brandKey = 'mario-neto';
    }
    
    return brandKey;
}

function switchBrand(brandKey) {
    const currentQuery = window.location.search;
    window.location.search = `?brand=${brandKey}`;
}

// ------------------------------------------------------------
// Core Initializer
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const brandKey = getActiveBrand();
    const config = BRANDS_DATA[brandKey];
    
    const switcherBtn = document.getElementById(`btn-switch-${brandKey}`);
    if (switcherBtn) switcherBtn.classList.add('active');
    
    applyBrandConfig(config, brandKey);
    
    setupNavbar();
    setupCanvas(config.theme.canvas_style, config.theme.body_bg);
    
    document.body.classList.remove("loading");
});

// ------------------------------------------------------------
// Injetar dados da marca no DOM
// ------------------------------------------------------------
function applyBrandConfig(config, brandKey) {
    document.title = `${config.brand_name} | Tradição e Confiança Óptica`;
    
    // Toggle Light Theme helper class on body
    if (config.theme.body_bg === '#ffffff') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    
    // CSS variables injection
    const root = document.documentElement;
    root.style.setProperty('--body-bg', config.theme.body_bg);
    root.style.setProperty('--text-color', config.theme.text_color);
    root.style.setProperty('--primary-color', config.theme.primary_color);
    root.style.setProperty('--secondary-color', config.theme.secondary_color);
    root.style.setProperty('--accent-color', config.theme.accent_color);
    root.style.setProperty('--glow-color', config.theme.glow);
    
    root.style.setProperty('--card-bg', config.theme.card_bg);
    root.style.setProperty('--card-border', config.theme.card_border);
    root.style.setProperty('--card-text', config.theme.card_text);
    root.style.setProperty('--card-text-secondary', config.theme.card_text_secondary);
    
    root.style.setProperty('--navbar-bg', config.theme.navbar_bg);
    root.style.setProperty('--nav-link-color', config.theme.nav_link_color);
    root.style.setProperty('--footer-bg', config.theme.footer_bg);
    root.style.setProperty('--title-color', config.theme.title_color);
    root.style.setProperty('--font-family', config.theme.font_name);
    
    if (config.theme.font_family_url) {
        const fontLink = document.getElementById("brand-font");
        if (fontLink) {
            fontLink.href = config.theme.font_family_url;
        }
    }
    
    // Logos loading
    const navLogo = document.getElementById("nav-logo");
    const footerLogo = document.getElementById("footer-logo");
    
    if (navLogo) navLogo.src = config.theme.logo;
    if (footerLogo) footerLogo.src = config.theme.logo;
    
    const handleLogoError = (imgEl) => {
        imgEl.style.display = "none";
        if (imgEl.parentNode.querySelector(".text-logo-alt")) return;
        const textLogo = document.createElement("span");
        textLogo.className = "text-logo-alt";
        textLogo.textContent = config.brand_name;
        textLogo.style.fontSize = "20px";
        textLogo.style.fontWeight = "800";
        textLogo.style.letterSpacing = "1px";
        textLogo.style.color = "var(--accent-color)";
        imgEl.parentNode.appendChild(textLogo);
    };
    
    if (navLogo) navLogo.onerror = () => handleLogoError(navLogo);
    if (footerLogo) footerLogo.onerror = () => handleLogoError(footerLogo);
    
    // Texts loading (guarded to avoid errors on pages where they don't exist)
    const footerBrandName = document.getElementById("footer-brand-name");
    const copyrightBrand = document.getElementById("copyright-brand");
    const heroTagline = document.getElementById("hero-tagline");
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const sobreDescription = document.getElementById("sobre-description");
    const statAnos = document.getElementById("stat-anos");
    const badgeYears = document.getElementById("badge-years");
    
    if (footerBrandName) footerBrandName.textContent = config.brand_name;
    if (copyrightBrand) copyrightBrand.textContent = config.brand_name;
    
    if (brandKey === 'conceicao') {
        if (heroTagline) heroTagline.textContent = "Cuidado Visual Completo";
        if (heroTitle) heroTitle.textContent = "Excelência Óptica e Atendimento Familiar";
        if (heroSubtitle) heroSubtitle.textContent = "Sua visão tratada por profissionais altamente experientes com lentes de alta tecnologia.";
        if (badgeYears) badgeYears.textContent = "Premium";
        if (statAnos) statAnos.textContent = "Qualidade";
    } else {
        if (badgeYears) badgeYears.textContent = "90+";
        if (statAnos) statAnos.textContent = "1929";
    }
    
    if (sobreDescription) sobreDescription.textContent = config.history;
    
    // Obrigado.html specific elements rendering
    const btnShareWpp = document.getElementById("btn-share-whatsapp");
    const statModelos = document.getElementById("stat-modelos");
    const statLojas = document.getElementById("stat-lojas");
    const statAnosObrigado = document.getElementById("stat-anos-obrigado");
    
    if (btnShareWpp) {
        const shareText = brandKey === 'conceicao' 
            ? `Oi! Me cadastrei para receber vantagens exclusivas na Óptica Conceição. Dá uma olhada e garanta a sua também no link: https://${config.domain}`
            : `Oi! Acabei de garantir ofertas de descontos na Óptica Mário Neto. Garanta o seu também no link: https://${config.domain}`;
        btnShareWpp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    }
    
    if (statModelos) statModelos.textContent = config.stats.modelos;
    if (statLojas) statLojas.textContent = config.stats.lojas;
    if (statAnosObrigado) statAnosObrigado.textContent = config.stats.anos;
    
    renderUnidades(config.unidades);
}

// ------------------------------------------------------------
// Renderizador de Unidades Bento Grid
// ------------------------------------------------------------
function renderUnidades(unidades) {
    const grid = document.getElementById("unidades-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    unidades.forEach((u) => {
        const sizeClass = u.size === 'large' ? 'bento-size-large' : (u.size === 'medium' ? 'bento-size-medium' : 'bento-size-small');
        
        const card = document.createElement("div");
        card.className = `glass-card bento-card ${sizeClass}`;
        
        const telHtml = u.telefone ? `<a href="tel:${u.telefone.replace(/\D/g, '')}" class="phone-link">📞 Telefone: ${u.telefone}</a>` : '';
        const wppMsg = encodeURIComponent(`Olá! Estou acessando o site e gostaria de falar com o atendimento da ${u.nome}.`);
        
        card.innerHTML = `
            <div>
                <h3>${u.nome}</h3>
                <div class="address-details">
                    <p>${u.endereco}</p>
                    ${telHtml}
                </div>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <a href="https://wa.me/${u.whatsapp}?text=${wppMsg}" target="_blank" class="btn-whatsapp">
                    <span class="icon">💬</span> WhatsApp
                </a>
                <a href="${u.gmaps_link}" target="_blank" class="btn btn-secondary" style="padding: 10px 18px; font-size: 13px; border-radius: 30px;">
                    🗺️ Ver no Mapa
                </a>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ------------------------------------------------------------
// Navbar Mobile Controls
// ------------------------------------------------------------
function setupNavbar() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");
    const links = document.querySelectorAll(".nav-link");
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });
    
    links.forEach(l => {
        l.addEventListener("click", () => {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });
}

// ------------------------------------------------------------
// Canvas Background Particle/Waves Graphics System (60FPS)
// ------------------------------------------------------------
function setupCanvas(style, bodyBg) {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    const particles = [];
    const particleCount = 45;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            speedX: Math.random() * 0.3 - 0.15,
            speedY: Math.random() * 0.4 + 0.1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    let angle = 0;
    
    function animate() {
        ctx.fillStyle = bodyBg;
        ctx.fillRect(0, 0, width, height);
        
        let pColor, wColor;
        if (style === 'blue-white') {
            pColor = 'rgba(7, 86, 145, ';
            wColor = 'rgba(27, 112, 180, 0.04)';
        } else {
            pColor = 'rgba(212, 175, 55, ';
            wColor = 'rgba(212, 175, 55, 0.04)';
            
            const grad = ctx.createRadialGradient(width*0.5, height*0.5, 0, width*0.5, height*0.5, width*0.8);
            grad.addColorStop(0, '#1b263b');
            grad.addColorStop(1, '#020205');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = wColor;
        }
        
        ctx.fillStyle = wColor;
        ctx.beginPath();
        for (let i = 0; i < width; i += 5) {
            const y = Math.sin(i * 0.002 + angle) * 60 + (height * 0.5) + Math.cos(i * 0.005 + angle) * 30;
            ctx.fillRect(i, y, 4, height - y + 100);
        }
        
        ctx.beginPath();
        for (let i = 0; i < width; i += 5) {
            const y = Math.sin(i * 0.003 - angle * 0.8) * 40 + (height * 0.6) + Math.sin(i * 0.001 + angle) * 20;
            ctx.fillRect(i, y, 2, height - y + 100);
        }
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y -= p.speedY;
            
            if (p.y < -10) {
                p.y = height + 10;
                p.x = Math.random() * width;
            }
            if (p.x < -10 || p.x > width + 10) {
                p.x = Math.random() * width;
            }
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = pColor + p.opacity + ')';
            ctx.fill();
        });
        
        angle += 0.004;
        requestAnimationFrame(animate);
    }
    
    animate();
}
