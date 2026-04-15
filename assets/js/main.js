document.addEventListener('DOMContentLoaded', () => {
    // Setup marked options
    if (window.marked) {
        marked.setOptions({
            gfm: true,
            breaks: true,
            headerIds: true
        });
    }

    const contentDiv = document.getElementById('markdown-content');
    const loader = document.getElementById('loader');
    const tocList = document.getElementById('toc-list');
    const navItems = document.querySelectorAll('.nav-item');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const languageSelect = document.getElementById('languageSelect');

    let currentLang = localStorage.getItem('velvra_lang') || 'en';
    
    // Translations Dictionary for Sidebar
    const i18n = {
        en: { gs: 'Getting Started', intro: 'Introduction', legal: 'Legal Documents', privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookie Policy', toc: 'On this page' },
        ar: { gs: 'البداية', intro: 'مقدمة', legal: 'المستندات القانونية', privacy: 'سياسة الخصوصية', terms: 'شروط الخدمة', cookies: 'سياسة ملفات تعريف الارتباط', toc: 'في هذه الصفحة' },
        ja: { gs: 'はじめに', intro: '序章', legal: '法的文書', privacy: 'プライバシーポリシー', terms: '利用規約', cookies: 'クッキーポリシー', toc: '目次' },
        ru: { gs: 'Начало работы', intro: 'Введение', legal: 'Правовые документы', privacy: 'Политика Конфиденциальности', terms: 'Условия обслуживания', cookies: 'Политика использования файлов cookie', toc: 'На этой странице' },
        de: { gs: 'Erste Schritte', intro: 'Einführung', legal: 'Rechtsdokumente', privacy: 'Datenschutzrichtlinie', terms: 'Nutzungsbedingungen', cookies: 'Cookie-Richtlinie', toc: 'Auf dieser Seite' },
        sv: { gs: 'Komma igång', intro: 'Introduktion', legal: 'Juridiska dokument', privacy: 'Integritetspolicy', terms: 'Användarvillkor', cookies: 'Cookiepolicy', toc: 'På den här sidan' }
    };

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('velvra_lang', lang);
        languageSelect.value = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update UI Text
        document.getElementById('nav-getting-started').textContent = i18n[lang].gs;
        document.getElementById('nav-intro').textContent = i18n[lang].intro;
        document.getElementById('nav-legal').textContent = i18n[lang].legal;
        document.getElementById('nav-privacy').textContent = i18n[lang].privacy;
        document.getElementById('nav-terms').textContent = i18n[lang].terms;
        document.getElementById('nav-cookies').textContent = i18n[lang].cookies;
        
        const tocTitleLabel = document.querySelector('.toc-title');
        if (tocTitleLabel) tocTitleLabel.textContent = i18n[lang].toc;
    }

    setLanguage(currentLang);

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
        loadContent(); // reload currently active markdown on lang switch
    });

    // Handle Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Helper: Map hash to correct markdown file
    function getFileForHash(hash) {
        const route = hash.replace('#', '') || 'home';
        // Allow valid routes to be requested, default to home
        const validRoutes = ['home', 'privacy', 'terms', 'cookies'];
        const file = validRoutes.includes(route) ? route : 'home';
        return `docs/${currentLang}/${file}.md`;
    }

    // Helper: Update Navigation state
    function updateNavState(hash) {
        const route = hash.replace('#', '') || 'home';
        navItems.forEach(item => {
            if (item.getAttribute('data-target') === route) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Generate Table of Contents (Outline) from parsed HTML
    function updateTableOfContents() {
        tocList.innerHTML = '';
        const headings = contentDiv.querySelectorAll('h2, h3');
        
        if (headings.length === 0) {
            tocList.innerHTML = '<li><a href="#">No headings</a></li>';
            return;
        }

        headings.forEach(heading => {
            // Ensure ID exists
            if (!heading.id) {
                heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            }
            
            const li = document.createElement('li');
            li.classList.add(heading.tagName.toLowerCase() === 'h3' ? 'level-3' : 'level-2');
            
            const a = document.createElement('a');
            a.href = `#${heading.id}`;
            a.textContent = heading.textContent;
            
            // Allow smooth scrolling bypass for TOC links
            a.addEventListener('click', (e) => {
                e.preventDefault();
                heading.scrollIntoView({ behavior: 'smooth' });
                // Make active manually
                document.querySelectorAll('#toc-list li').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                history.pushState(null, null, `#${heading.id}`);
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });

        setupScrollSpy();
    }

    // Setup active state on TOC while scrolling
    function setupScrollSpy() {
        const headings = contentDiv.querySelectorAll('h2, h3');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const tocItem = document.querySelector(`#toc-list a[href="#${id}"]`);
                    if (tocItem) {
                        document.querySelectorAll('#toc-list li').forEach(el => el.classList.remove('active'));
                        tocItem.parentElement.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '0px 0px -80% 0px' });

        headings.forEach(heading => observer.observe(heading));
    }

    // Load and Render Markdown
    async function loadContent() {
        // Find if page corresponds
        let hash = window.location.hash;
        
        // Exclude header targeting links like #data-we-collect from reloading the page
        // Wait, if it's a deep link, we extract the page name.
        // For simplicity, we assume main pages don't have hyphens. Otherwise, we ignore sub-hashes
        
        // Actually, let's keep it simple. If we're already on a page and just scrolling, we don't reload.
        
        contentDiv.style.display = 'none';
        loader.style.display = 'flex';
        
        const targetFile = getFileForHash(hash);
        updateNavState(hash);

        try {
            const response = await fetch(targetFile);
            if (!response.ok) throw new Error('Failed to load content');
            
            const markdown = await response.text();
            contentDiv.innerHTML = marked.parse(markdown);
            
            updateTableOfContents();
            
            loader.style.display = 'none';
            contentDiv.style.display = 'block';
            
            window.scrollTo(0, 0);

            // Close sidebar automatically on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
            
        } catch (error) {
            console.error('Error loading markdown:', error);
            contentDiv.innerHTML = `<div style="text-align:center; padding: 2rem;">
                <h2><i class="fa-solid fa-triangle-exclamation" style="color:#fbbf24; margin-right: 8px;"></i> Error loading page</h2>
                <p>Could not load the documentation file. Make sure you are viewing this via a local server (e.g. VSCode Live Server).</p>
            </div>`;
            loader.style.display = 'none';
            contentDiv.style.display = 'block';
        }
    }

    // Trigger on hash change, but only if it's a top-level route navigation
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        const topLevelRoutes = ['#home', '#privacy', '#terms', '#cookies', ''];
        
        // Only fetch new page if it's a top level route update
        if (topLevelRoutes.includes(hash)) {
            loadContent();
        }
        // If it's something like #1-1-user-data, we just scroll down, and don't fetch.
    });

    // In-app links handling (to properly update hash and fetch)
    contentDiv.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#/')) {
            const route = e.target.getAttribute('href').replace('#/', '#');
            window.location.hash = route;
            e.preventDefault();
        }
    });

    // Initial load
    loadContent();
});
