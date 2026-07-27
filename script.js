// ------------------------------------------------------------
// Local Data Config (Pre-loaded to prevent browser CORS blocks)
// ------------------------------------------------------------
const BRANDS_DATA = {
    "mario-neto": {
        "brand_name": "Óptica Mário Neto",
        "domain": "www.opticamarioneto.com.br",
        "hero_image": "mario-neto/glasses_luxury.jpg",
        "theme": {
            "body_bg": "#091326", // Deep Sapphire Blue of Logo
            "text_color": "#ffffff",
            "primary_color": "#0b1a36", // Deep blue
            "secondary_color": "#192e62", // Medium-dark blue
            "accent_color": "#213567", // Sapphire Blue of the Logo
            "glow": "rgba(33, 53, 103, 0.55)",
            
            "card_bg": "rgba(255, 255, 255, 0.02)",
            "card_border": "rgba(255, 255, 255, 0.06)",
            "card_text": "#ffffff",
            "card_text_secondary": "rgba(255, 255, 255, 0.65)",
            
            "navbar_bg": "rgba(9, 19, 38, 0.85)",
            "nav-link-color": "rgba(255, 255, 255, 0.75)",
            "footer_bg": "#050a14",
            "title_color": "#ffffff",
            
            "font_family_url": "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
            "font_name": "'Montserrat', sans-serif",
            "logo": "mario-neto/logo/Mario Neto.jpeg",
            "canvas_style": "sapphire"
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
        "hero_image": "conceicao/glasses_clean.jpg",
        "theme": {
            "body_bg": "#ffffff", // Light Theme (White background)
            "text_color": "#1e293b", // Slate-800 for body readability
            "primary_color": "#075691", // Official blue 2 (Darker blue)
            "secondary_color": "#1b70b4", // Official blue 1 (Lighter blue)
            "accent_color": "#213567", // Shared Sapphire Blue
            "glow": "rgba(33, 53, 103, 0.15)",
            
            "card_bg": "rgba(7, 86, 145, 0.04)", // Soft light blue-tinted card
            "card_border": "rgba(7, 86, 145, 0.1)",
            "card_text": "#075691", // Blue headers inside cards
            "card_text_secondary": "#475569", // Gray-600 paragraphs inside cards
            
            "navbar_bg": "rgba(255, 255, 255, 0.85)", // Glass light navbar
            "nav-link-color": "#334155", // Slate-700 links
            "footer_bg": "#f8fafc", // Very clean gray-blue light footer
            "title_color": "#075691", // Blue page titles
            
            "font_family_url": "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
            "font_name": "'Montserrat', sans-serif",
            "logo": "conceicao/logo/preto.png", // Black logo on light backgrounds
            "logo_dark_bg": "conceicao/logo/branco.png",
            "canvas_style": "sapphire-light"
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
    setupBentoGlow();
    setupScrollAnimations();
    setupCustomCursor();
    setup3DTilt();
    setupSpotlightBackground();
    
    document.body.classList.remove("loading");
});

// ------------------------------------------------------------
// Injetar dados da marca no DOM
// ------------------------------------------------------------
function applyBrandConfig(config, brandKey) {
    document.title = `${config.brand_name} | Tradição e Confiança Óptica`;
    
    // Toggle Brand class and Light Theme helper class on body
    document.body.classList.remove('mario-neto-theme', 'conceicao-theme');
    document.body.classList.add(`${brandKey}-theme`);
    
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
        textLogo.style.fontWeight = "900";
        textLogo.style.letterSpacing = "1.5px";
        textLogo.style.color = "var(--accent-color)";
        textLogo.style.fontFamily = "var(--font-family)";
        imgEl.parentNode.appendChild(textLogo);
    };
    
    if (navLogo) navLogo.onerror = () => handleLogoError(navLogo);
    if (footerLogo) footerLogo.onerror = () => handleLogoError(footerLogo);
    
    // Hero image loading
    const heroImage = document.getElementById("hero-image");
    if (heroImage) heroImage.src = config.hero_image;
    
    // Texts loading
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
        card.className = `glass-card bento-card reveal-on-scroll ${sizeClass}`;
        
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
    
    // Re-initialize animations observer and 3D Tilt for dynamically generated elements
    setupScrollAnimations();
    setup3DTilt();
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
// Bento Card Mouse Light Tracker
// ------------------------------------------------------------
function setupBentoGlow() {
    document.addEventListener("mousemove", (e) => {
        const cards = document.querySelectorAll(".bento-card, .glass-card");
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

// ------------------------------------------------------------
// Scroll Animation Trigger (UX/UI Smooth Entrance)
// ------------------------------------------------------------
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);
    
    document.querySelectorAll(".reveal-on-scroll").forEach(el => {
        observer.observe(el);
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
    
    // Mouse object for lens physical interaction
    const mouse = {
        x: null,
        y: null
    };
    
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Click Shockwave Physics
    const shockwaves = [];
    window.addEventListener("click", (e) => {
        shockwaves.push({
            x: e.clientX,
            y: e.clientY,
            radius: 0,
            maxRadius: 280,
            force: 24
        });
    });
    
    const isSapphire = style === 'sapphire';
    const particles = [];
    const particleCount = isSapphire ? 35 : 60;
    const maxDistance = 110;
    const lensRadius = 160;
    
    for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * (isSapphire ? 0.35 : 0.7);
        const vy = (Math.random() - 0.5) * (isSapphire ? 0.35 : 0.7);
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: vx,
            vy: vy,
            baseVx: vx,
            baseVy: vy,
            radius: isSapphire ? Math.random() * 4 + 2 : Math.random() * 2 + 1
        });
    }
    
    function animate() {
        ctx.fillStyle = bodyBg;
        ctx.fillRect(0, 0, width, height);
        
        let nodeColor, lineColor;
        if (style === 'sapphire-light') {
            nodeColor = 'rgba(7, 86, 145, 0.4)';
            lineColor = 'rgba(27, 112, 180, 0.08)';
        } else { // sapphire
            nodeColor = 'rgba(33, 53, 103, 0.4)';
            lineColor = 'rgba(33, 53, 103, 0.15)';
            
            // Fundo gradiente profundo para a Mário Neto
            const grad = ctx.createRadialGradient(width*0.5, height*0.5, 0, width*0.5, height*0.5, width*0.8);
            grad.addColorStop(0, '#0c1527');
            grad.addColorStop(1, '#05070f');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);
        }
        
        // 1. Atualizar raio das ondas de choque
        shockwaves.forEach((sw, idx) => {
            sw.radius += 6.5; // velocidade de expansão
            if (sw.radius > sw.maxRadius) {
                shockwaves.splice(idx, 1);
            }
        });
        
        // 2. Atualizar partículas e calcular refração do mouse + ondas de choque
        const drawPositions = particles.map(p => {
            // Aplicar força da onda de choque
            shockwaves.forEach(sw => {
                const dx = p.x - sw.x;
                const dy = p.y - sw.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > 0 && Math.abs(dist - sw.radius) < 30) {
                    // Quanto mais próximo da frente da onda, maior o impulso
                    const pushFactor = (1 - (Math.abs(dist - sw.radius) / 30)) * sw.force;
                    p.vx += (dx / dist) * pushFactor * 0.12;
                    p.vy += (dy / dist) * pushFactor * 0.12;
                }
            });
            
            // Amortecimento físico para retornar à velocidade básica
            p.vx += (p.baseVx - p.vx) * 0.04;
            p.vy += (p.baseVy - p.vy) * 0.04;
            
            // Atualizar posições básicas
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;
            
            let dx_draw = p.x;
            let dy_draw = p.y;
            
            // Lente de aumento virtual no mouse
            if (mouse.x !== null) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < lensRadius) {
                    const force = (lensRadius - dist) / lensRadius;
                    const distortion = Math.sin(force * Math.PI / 2) * 25;
                    dx_draw += (dx / dist) * distortion;
                    dy_draw += (dy / dist) * distortion;
                }
            }
            
            return { x: dx_draw, y: dy_draw, p: p };
        });
        
        // 3. Desenhar as linhas de conexão (APENAS para a Conceição - Estilo Técnico)
        if (!isSapphire) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            
            for (let i = 0; i < drawPositions.length; i++) {
                for (let j = i + 1; j < drawPositions.length; j++) {
                    const p1 = drawPositions[i];
                    const p2 = drawPositions[j];
                    
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < maxDistance) {
                        const alpha = (maxDistance - dist) / maxDistance;
                        ctx.strokeStyle = lineColor.replace(/[^,]+(?=\))/, alpha * 0.2);
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        // 4. Desenhar os nós de partículas
        drawPositions.forEach(dp => {
            if (isSapphire) {
                const radGrad = ctx.createRadialGradient(dp.x, dp.y, 0, dp.x, dp.y, dp.p.radius * 3.5);
                radGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
                radGrad.addColorStop(0.2, 'rgba(33, 53, 103, 0.35)');
                radGrad.addColorStop(1, 'rgba(33, 53, 103, 0)');
                ctx.fillStyle = radGrad;
                ctx.beginPath();
                ctx.arc(dp.x, dp.y, dp.p.radius * 3.5, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.arc(dp.x, dp.y, dp.p.radius, 0, Math.PI * 2);
                ctx.fillStyle = nodeColor;
                ctx.fill();
            }
        });
        
        // 5. Desenhar ondas de choque visuais
        shockwaves.forEach(sw => {
            ctx.beginPath();
            ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
            const opacity = (sw.maxRadius - sw.radius) / sw.maxRadius;
            ctx.strokeStyle = isSapphire 
                ? `rgba(59, 130, 246, ${opacity * 0.18})` 
                : `rgba(27, 112, 180, ${opacity * 0.22})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ------------------------------------------------------------
// Custom Magnetic Cursor (Spring Physics)
// ------------------------------------------------------------
function setupCustomCursor() {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorRing = document.querySelector(".cursor-ring");
    const cursorContainer = document.getElementById("custom-cursor");
    if (!cursorDot || !cursorRing) return;
    
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });
    
    function updateRing() {
        // Interpolação linear para física de mola (lag fluido e elegante)
        const easeFactor = 0.16;
        ringX += (mouseX - ringX) * easeFactor;
        ringY += (mouseY - ringY) * easeFactor;
        
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        
        requestAnimationFrame(updateRing);
    }
    updateRing();
    
    // Hovering states
    const clickables = "a, button, select, input, textarea, .marca-item, .bento-card, .btn";
    document.body.addEventListener("mouseover", (e) => {
        if (e.target.closest(clickables)) {
            cursorContainer.classList.add("hovering");
        }
    });
    document.body.addEventListener("mouseout", (e) => {
        if (e.target.closest(clickables)) {
            cursorContainer.classList.remove("hovering");
        }
    });
}

// ------------------------------------------------------------
// True 3D Card Hover Tilt
// ------------------------------------------------------------
function setup3DTilt() {
    const cards = document.querySelectorAll(".glass-card, .marca-item, .bento-card");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const cardWidth = rect.width;
            const cardHeight = rect.height;
            
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const xPercent = (mouseX / cardWidth) - 0.5;
            const yPercent = (mouseY / cardHeight) - 0.5;
            
            const maxRotation = 10; // Rotação suave tridimensional
            
            const rotateX = -yPercent * maxRotation;
            const rotateY = xPercent * maxRotation;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    });
}

// ------------------------------------------------------------
// Spotlight Background Coordinator
// ------------------------------------------------------------
function setupSpotlightBackground() {
    window.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    });
}


