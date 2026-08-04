"use strict";

(() => {
    const root = document.documentElement;
    const themeButton = document.querySelector("[data-theme-toggle]");
    const themeIcon = document.querySelector("[data-theme-icon]");
    const languageButton = document.querySelector("[data-language-toggle]");
    const themeColor = document.querySelector("[data-theme-color]");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const desktopQuery = window.matchMedia("(min-width: 641px)");
    const navMenu = document.querySelector("[data-nav-menu]");
    const menuSummary = navMenu?.querySelector("summary");
    const navLinks = navMenu?.querySelectorAll("a[href^='#']") ?? [];

    const translations = {
        tr: {
            "meta.title": "Barış Sürkit | Kişisel Portfolyo",
            "meta.description": "Bilgisayar mühendisliği öğrencisi Barış Sürkit'in ilgi alanları, seçili projeleri ve iletişim bilgileri.",
            "meta.ogDescription": "Barış Sürkit'in yazılım, veri analizi ve makine öğrenmesi üzerine çalışmaları.",
            "meta.locale": "tr_TR",
            skipLink: "Ana içeriğe geç",
            brandLabel: "Barış Sürkit ana sayfa",
            preferencesLabel: "Görünüm ve dil ayarları",
            "theme.toDark": "Koyu temaya geç",
            "theme.toLight": "Açık temaya geç",
            "language.toEnglish": "İngilizceye geç",
            "language.toTurkish": "Türkçeye geç",
            "cv.groupLabel": "CV indirme seçenekleri",
            "cv.english": "İngilizce CV",
            "cv.turkish": "Türkçe CV",
            "cv.englishLabel": "İngilizce CV'yi indir",
            "cv.turkishLabel": "Türkçe CV'yi indir",
            "cv.englishMeta": "PDF · 1 sayfa · 49 KB",
            "cv.turkishMeta": "PDF · 1 sayfa · 51 KB",
            menu: "Menü",
            navLabel: "Ana menü",
            "nav.home": "Ana Sayfa",
            "nav.about": "Hakkımda",
            "nav.projects": "Projeler",
            "nav.contact": "İletişim",
            "hero.eyebrow": "Bilgisayar Mühendisliği Öğrencisi",
            "hero.copy": "Veri bilimi, makine öğrenmesi, yapay zekâ ve yazılım geliştirmeyle ilgileniyorum. Öğrendiklerimi küçük projeler geliştirerek pekiştiriyor, çalışmalarımı bu sitede paylaşıyorum.",
            "hero.linksLabel": "Hızlı bağlantılar",
            "about.title": "Hakkımda",
            "about.copy": "Ben Barış. Bilgisayar mühendisliği öğrencisiyim. Python, veri analizi ve makine öğrenmesi üzerine çalışıyorum. Öğrendiklerimi küçük projeler geliştirerek pekiştiriyorum. Bu sitede çalışmalarımı ve gelişim sürecimi paylaşıyorum.",
            "about.educationLabel": "Eğitim",
            "about.education": "Bilgisayar Mühendisliği öğrencisi",
            "about.locationLabel": "Konum",
            "about.location": "Edirne, Türkiye",
            "about.interestsLabel": "İlgi alanları",
            "about.interests": "Veri Bilimi, Makine Öğrenmesi, Yapay Zekâ ve Yazılım Geliştirme",
            "skills.title": "Teknolojiler ve yetenekler",
            "skills.intro": "Kullandığım ve üzerine çalıştığım temel konular:",
            "skills.listLabel": "Teknolojiler ve yetenekler",
            "skills.dataAnalysis": "Veri Analizi",
            "skills.machineLearning": "Makine Öğrenmesi",
            "skills.algorithm": "Algoritma",
            "projects.title": "Seçili projeler",
            "projects.intro": "Öğrendiklerimi uygulamak için geliştirdiğim çalışmalardan bazıları.",
            "projects.budgetDescription": "Gelir ve giderleri daha kolay takip etmek için hazırladığım sade bir bütçe uygulaması.",
            "projects.budgetTechLabel": "BütçeDostum teknolojileri",
            "projects.portfolioTitle": "Kişisel Portfolyo",
            "projects.portfolioDescription": "Projelerimi, öğrendiklerimi ve gelişim sürecimi paylaştığım bu kişisel web sitesi.",
            "projects.portfolioTechLabel": "Portfolyo teknolojileri",
            "projects.viewOnGitHub": "GitHub'da görüntüle",
            "projects.pythonTitle": "Mini Python Scriptleri",
            "projects.pythonDescription": "Algoritma pratiği yapmak ve günlük küçük işleri kolaylaştırmak için yazdığım scriptler.",
            "projects.pythonTechLabel": "Python script teknolojileri",
            "projects.allOnGitHub": "Tüm çalışmalarımı GitHub'da gör",
            "contact.title": "İletişim",
            "contact.intro": "Bir şey sormak veya bir proje üzerine konuşmak istersen bana ulaşabilirsin.",
            "contact.email": "E-posta",
            "contact.linkedinProfile": "LinkedIn profili",
            "footer.backToTop": "Başa dön"
        },
        en: {
            "meta.title": "Barış Sürkit | Personal Portfolio",
            "meta.description": "The interests, selected projects, and contact details of computer engineering student Barış Sürkit.",
            "meta.ogDescription": "Barış Sürkit's work in software development, data analysis, and machine learning.",
            "meta.locale": "en_US",
            skipLink: "Skip to main content",
            brandLabel: "Barış Sürkit home page",
            preferencesLabel: "Appearance and language settings",
            "theme.toDark": "Switch to dark theme",
            "theme.toLight": "Switch to light theme",
            "language.toEnglish": "Switch to English",
            "language.toTurkish": "Switch to Turkish",
            "cv.groupLabel": "Resume download options",
            "cv.english": "English CV",
            "cv.turkish": "Turkish CV",
            "cv.englishLabel": "Download the English CV",
            "cv.turkishLabel": "Download the Turkish CV",
            "cv.englishMeta": "PDF · 1 page · 49 KB",
            "cv.turkishMeta": "PDF · 1 page · 51 KB",
            menu: "Menu",
            navLabel: "Main navigation",
            "nav.home": "Home",
            "nav.about": "About",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "hero.eyebrow": "Computer Engineering Student",
            "hero.copy": "I’m interested in data science, machine learning, artificial intelligence, and software development. I reinforce what I learn by building small projects and share my work on this site.",
            "hero.linksLabel": "Quick links",
            "about.title": "About me",
            "about.copy": "I’m Barış, a computer engineering student. I work on Python, data analysis, and machine learning. I reinforce what I learn by building small projects. I share my work and learning progress on this site.",
            "about.educationLabel": "Education",
            "about.education": "Computer Engineering student",
            "about.locationLabel": "Location",
            "about.location": "Edirne, Türkiye",
            "about.interestsLabel": "Interests",
            "about.interests": "Data Science, Machine Learning, Artificial Intelligence, and Software Development",
            "skills.title": "Technologies and skills",
            "skills.intro": "The fundamentals I use and study:",
            "skills.listLabel": "Technologies and skills",
            "skills.dataAnalysis": "Data Analysis",
            "skills.machineLearning": "Machine Learning",
            "skills.algorithm": "Algorithms",
            "projects.title": "Selected projects",
            "projects.intro": "A few projects I have built to apply what I learn.",
            "projects.budgetDescription": "A simple budget application I built to make tracking income and expenses easier.",
            "projects.budgetTechLabel": "BütçeDostum technologies",
            "projects.portfolioTitle": "Personal Portfolio",
            "projects.portfolioDescription": "This personal website where I share my projects, what I learn, and my progress.",
            "projects.portfolioTechLabel": "Portfolio technologies",
            "projects.viewOnGitHub": "View on GitHub",
            "projects.pythonTitle": "Mini Python Scripts",
            "projects.pythonDescription": "Scripts I write to practise algorithms and simplify small everyday tasks.",
            "projects.pythonTechLabel": "Python script technologies",
            "projects.allOnGitHub": "See all my work on GitHub",
            "contact.title": "Contact",
            "contact.intro": "Feel free to get in touch if you would like to ask something or discuss a project.",
            "contact.email": "Email",
            "contact.linkedinProfile": "LinkedIn profile",
            "footer.backToTop": "Back to top"
        }
    };

    const getStoredValue = (key) => {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    };

    const storeValue = (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch {
            // The controls still work when storage is unavailable.
        }
    };

    let hasSavedTheme = ["light", "dark"].includes(getStoredValue("portfolio-theme"));
    let currentTheme = ["light", "dark"].includes(root.dataset.theme)
        ? root.dataset.theme
        : systemTheme.matches ? "dark" : "light";
    let currentLanguage = "en";

    const updateThemeControl = () => {
        const isDark = currentTheme === "dark";
        const dictionary = translations[currentLanguage];
        const label = dictionary[isDark ? "theme.toLight" : "theme.toDark"];

        if (themeButton) {
            themeButton.setAttribute("aria-label", label);
            themeButton.setAttribute("aria-pressed", String(isDark));
            themeButton.title = label;
        }

        if (themeIcon) {
            themeIcon.textContent = isDark ? "☼" : "☾";
        }

        if (themeColor) {
            themeColor.content = isDark ? "#222728" : "#f5f3ee";
        }
    };

    const applyTheme = (theme, save = false) => {
        currentTheme = theme === "dark" ? "dark" : "light";
        root.dataset.theme = currentTheme;

        if (save) {
            hasSavedTheme = true;
            storeValue("portfolio-theme", currentTheme);
        }

        updateThemeControl();
    };

    const applyLanguage = (language) => {
        currentLanguage = language === "en" ? "en" : "tr";
        const dictionary = translations[currentLanguage];
        root.lang = currentLanguage;
        document.title = dictionary["meta.title"];

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const value = dictionary[element.dataset.i18n];
            if (value) {
                element.textContent = value;
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
            const value = dictionary[element.dataset.i18nAriaLabel];
            if (value) {
                element.setAttribute("aria-label", value);
            }
        });

        document.querySelectorAll("[data-i18n-content]").forEach((element) => {
            const value = dictionary[element.dataset.i18nContent];
            if (value) {
                element.setAttribute("content", value);
            }
        });

        if (languageButton) {
            const targetLanguage = currentLanguage === "tr" ? "en" : "tr";
            const label = dictionary[currentLanguage === "tr" ? "language.toEnglish" : "language.toTurkish"];
            languageButton.textContent = targetLanguage.toUpperCase();
            languageButton.lang = targetLanguage;
            languageButton.setAttribute("aria-label", label);
            languageButton.title = label;
        }

        updateThemeControl();
    };

    themeButton?.addEventListener("click", () => {
        applyTheme(currentTheme === "dark" ? "light" : "dark", true);
    });

    languageButton?.addEventListener("click", () => {
        applyLanguage(currentLanguage === "tr" ? "en" : "tr");
    });

    const handleSystemThemeChange = (event) => {
        if (!hasSavedTheme) {
            applyTheme(event.matches ? "dark" : "light");
        }
    };

    if (typeof systemTheme.addEventListener === "function") {
        systemTheme.addEventListener("change", handleSystemThemeChange);
    } else {
        systemTheme.addListener(handleSystemThemeChange);
    }

    if (navMenu) {
        const closeMobileMenu = () => {
            if (!desktopQuery.matches) {
                navMenu.open = false;
            }
        };

        navLinks.forEach((link) => {
            link.addEventListener("click", closeMobileMenu);
        });

        document.addEventListener("pointerdown", (event) => {
            if (!desktopQuery.matches && navMenu.open && !navMenu.contains(event.target)) {
                closeMobileMenu();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !desktopQuery.matches && navMenu.open) {
                closeMobileMenu();
                menuSummary?.focus();
            }
        });

        desktopQuery.addEventListener("change", (event) => {
            navMenu.open = event.matches;
        });

        navMenu.open = desktopQuery.matches;
    }

    applyTheme(currentTheme);
    applyLanguage(currentLanguage);
})();
