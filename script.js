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
    const navLinks = navMenu?.querySelectorAll("a") ?? [];
    const copyEmailButton = document.querySelector("[data-copy-email]");
    const emailLink = document.querySelector("[data-email-address]");
    const copyStatus = document.querySelector("[data-copy-status]");

    const translations = {
        tr: {
            "meta.title": "Barış Sürkit | Kişisel Portfolyo",
            "meta.description": "Bilgisayar mühendisliği öğrencisi Barış Sürkit'in ilgi alanları, seçili projeleri ve iletişim bilgileri.",
            "meta.projectsTitle": "Barış Sürkit | Projeler",
            "meta.projectsDescription": "Bilgisayar mühendisliği öğrencisi Barış Sürkit'in geliştirdiği projelerden bir seçki.",
            "meta.ogDescription": "Barış Sürkit'in yazılım, veri analizi ve makine öğrenmesi üzerine çalışmaları.",
            "meta.locale": "tr_TR",
            "meta.alternateLocale": "en_US",
            "meta.imageAlt": "Barış Sürkit portresi",
            "external.newTab": " (yeni sekmede açılır)",
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
            "cv.englishMeta": "PDF · 1 sayfa · 30 KB",
            "cv.turkishMeta": "PDF · 1 sayfa · 31 KB",
            menu: "Menü",
            navLabel: "Ana menü",
            "nav.home": "Ana Sayfa",
            "nav.about": "Hakkımda",
            "nav.skills": "Yetenekler",
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
            "projects.aiSearchDescription": "Canlı web araması, dokümanlardan bilgi getirme, devam soruları ve hibrit RAG'i kaynak gösterimli, akış halinde üretilen yanıtlarla birleştiren yapay zekâ destekli araştırma çalışma alanı.",
            "projects.aiSearchTechLabel": "AI Search Engine teknolojileri",
            "projects.aiSearchActionsLabel": "AI Search Engine proje bağlantıları",
            "projects.aiSearchLiveLabel": "AI Search Engine canlı demosu (yeni sekmede açılır)",
            "projects.aiSearchSourceLabel": "AI Search Engine kaynak kodu (yeni sekmede açılır)",
            "projects.aiSearchImageAlt": "Yanıtı ve kaynaklarını gösteren AI Search Engine araştırma çalışma alanı",
            "projects.budgetDescription": "Gelir ve giderleri daha kolay takip etmek için hazırladığım sade bir bütçe uygulaması.",
            "projects.budgetTechLabel": "BütçeDostum teknolojileri",
            "projects.budgetActionsLabel": "BütçeDostum proje bağlantıları",
            "projects.budgetLiveLabel": "BütçeDostum canlı demosu (yeni sekmede açılır)",
            "projects.budgetSourceLabel": "BütçeDostum kaynak kodu (yeni sekmede açılır)",
            "projects.portfolioTitle": "Kişisel Portfolyo",
            "projects.portfolioDescription": "Projelerimi, öğrendiklerimi ve gelişim sürecimi paylaştığım bu kişisel web sitesi.",
            "projects.portfolioTechLabel": "Portfolyo teknolojileri",
            "projects.portfolioActionsLabel": "Kişisel Portfolyo proje bağlantıları",
            "projects.portfolioLiveLabel": "Kişisel Portfolyo canlı demosu (yeni sekmede açılır)",
            "projects.portfolioHomeLabel": "Kişisel Portfolyo ana sayfası",
            "projects.portfolioSourceLabel": "Kişisel Portfolyo kaynak kodu (yeni sekmede açılır)",
            "projects.pythonTitle": "Mini Python Scriptleri",
            "projects.pythonDescription": "Algoritma pratiği yapmak ve günlük küçük işleri kolaylaştırmak için yazdığım scriptler.",
            "projects.pythonTechLabel": "Python script teknolojileri",
            "projects.statusLabel": "Durum",
            "projects.statusLive": "Yayında",
            "projects.noDedicatedRepository": "Özel bir depo bağlantısı yok",
            "projects.liveDemo": "Canlı demo",
            "projects.sourceCode": "Kaynak kodu",
            "projects.allOnGitHub": "Tüm çalışmalarımı GitHub'da gör",
            "projects.viewPage": "Proje vitrini sayfasına git",
            "projects.budgetImageAlt": "BütçeDostum giriş ekranı",
            "projects.portfolioImageAlt": "Kişisel portfolyo ana sayfası ekran görüntüsü",
            "projectsPage.eyebrow": "Projeler",
            "projectsPage.title": "Projeler",
            "projectsPage.intro": "Yazılım geliştirme, veri ve makine öğrenmesi öğrenirken geliştirdiğim çalışmalardan bir seçki.",
            "projectsPage.featuredTitle": "Öne çıkan projeler",
            "contact.title": "İletişim",
            "contact.intro": "Bir şey sormak veya bir proje üzerine konuşmak istersen bana ulaşabilirsin.",
            "contact.email": "E-posta",
            "contact.copyEmail": "Kopyala",
            "contact.copySuccess": "E-posta adresi kopyalandı.",
            "contact.copyError": "Kopyalanamadı; adresi seçerek kopyalayabilirsin.",
            "contact.linkedinProfile": "LinkedIn profili",
            "footer.backToTop": "Başa dön",
            "footer.backToHome": "Ana sayfaya dön"
        },
        en: {
            "meta.title": "Barış Sürkit | Personal Portfolio",
            "meta.description": "The interests, selected projects, and contact details of computer engineering student Barış Sürkit.",
            "meta.projectsTitle": "Barış Sürkit | Projects",
            "meta.projectsDescription": "A selection of projects by computer engineering student Barış Sürkit.",
            "meta.ogDescription": "Barış Sürkit's work in software development, data analysis, and machine learning.",
            "meta.locale": "en_US",
            "meta.alternateLocale": "tr_TR",
            "meta.imageAlt": "Portrait of Barış Sürkit",
            "external.newTab": " (opens in a new tab)",
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
            "cv.englishMeta": "PDF · 1 page · 30 KB",
            "cv.turkishMeta": "PDF · 1 page · 31 KB",
            menu: "Menu",
            navLabel: "Main navigation",
            "nav.home": "Home",
            "nav.about": "About",
            "nav.skills": "Skills",
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
            "projects.aiSearchDescription": "A citation-aware AI research workspace combining live web search, document retrieval, conversational follow-ups, and hybrid RAG with streamed, source-grounded answers.",
            "projects.aiSearchTechLabel": "AI Search Engine technologies",
            "projects.aiSearchActionsLabel": "AI Search Engine project links",
            "projects.aiSearchLiveLabel": "AI Search Engine live demo (opens in a new tab)",
            "projects.aiSearchSourceLabel": "AI Search Engine source code (opens in a new tab)",
            "projects.aiSearchImageAlt": "AI Search Engine research workspace showing an answer and its sources",
            "projects.budgetDescription": "A simple budget application I built to make tracking income and expenses easier.",
            "projects.budgetTechLabel": "BütçeDostum technologies",
            "projects.budgetActionsLabel": "BütçeDostum project links",
            "projects.budgetLiveLabel": "BütçeDostum live demo (opens in a new tab)",
            "projects.budgetSourceLabel": "BütçeDostum source code (opens in a new tab)",
            "projects.portfolioTitle": "Personal Portfolio",
            "projects.portfolioDescription": "This personal website where I share my projects, what I learn, and my progress.",
            "projects.portfolioTechLabel": "Portfolio technologies",
            "projects.portfolioActionsLabel": "Personal Portfolio project links",
            "projects.portfolioLiveLabel": "Personal Portfolio live demo (opens in a new tab)",
            "projects.portfolioHomeLabel": "Personal Portfolio home page",
            "projects.portfolioSourceLabel": "Personal Portfolio source code (opens in a new tab)",
            "projects.pythonTitle": "Mini Python Scripts",
            "projects.pythonDescription": "Scripts I write to practise algorithms and simplify small everyday tasks.",
            "projects.pythonTechLabel": "Python script technologies",
            "projects.statusLabel": "Status",
            "projects.statusLive": "Live",
            "projects.noDedicatedRepository": "No dedicated repository",
            "projects.liveDemo": "Live demo",
            "projects.sourceCode": "Source code",
            "projects.allOnGitHub": "See all my work on GitHub",
            "projects.viewPage": "View the project showcase",
            "projects.budgetImageAlt": "BütçeDostum login screen",
            "projects.portfolioImageAlt": "Personal portfolio home page screenshot",
            "projectsPage.eyebrow": "Projects",
            "projectsPage.title": "Projects",
            "projectsPage.intro": "A selection of projects I have built while learning and exploring software development, data, and machine learning.",
            "projectsPage.featuredTitle": "Featured Projects",
            "contact.title": "Contact",
            "contact.intro": "Feel free to get in touch if you would like to ask something or discuss a project.",
            "contact.email": "Email",
            "contact.copyEmail": "Copy",
            "contact.copySuccess": "Email address copied.",
            "contact.copyError": "Could not copy; select the address to copy it.",
            "contact.linkedinProfile": "LinkedIn profile",
            "footer.backToTop": "Back to top",
            "footer.backToHome": "Back to home"
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
    let currentLanguage = ["en", "tr"].includes(getStoredValue("portfolio-language"))
        ? getStoredValue("portfolio-language")
        : "en";
    let copyStatusKey = null;
    let copyStatusTimer = null;
    let isCopyingEmail = false;

    const updateThemeControl = () => {
        const isDark = currentTheme === "dark";
        const dictionary = translations[currentLanguage];
        const label = dictionary[isDark ? "theme.toLight" : "theme.toDark"];

        if (themeButton) {
            themeButton.setAttribute("aria-label", label);
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

    const applyLanguage = (language, save = false) => {
        currentLanguage = language === "en" ? "en" : "tr";
        const dictionary = translations[currentLanguage];
        root.lang = currentLanguage;
        const pageTitle = document.querySelector("[data-page-title]");
        document.title = dictionary[pageTitle?.dataset.pageTitle ?? "meta.title"];

        if (save) {
            storeValue("portfolio-language", currentLanguage);
        }

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

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            const value = dictionary[element.dataset.i18nAlt];
            if (value) {
                element.setAttribute("alt", value);
            }
        });

        if (copyStatus && copyStatusKey) {
            copyStatus.textContent = dictionary[copyStatusKey];
        }

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
        applyLanguage(currentLanguage === "tr" ? "en" : "tr", true);
    });

    const showCopyStatus = (key) => {
        if (!copyStatus) {
            return;
        }

        copyStatusKey = key;
        copyStatus.textContent = translations[currentLanguage][key];
        window.clearTimeout(copyStatusTimer);
        copyStatusTimer = window.setTimeout(() => {
            copyStatusKey = null;
            copyStatus.textContent = "";
        }, 3500);
    };

    const copyWithFallback = (value) => {
        const previousFocus = document.activeElement;
        const textArea = document.createElement("textarea");
        textArea.value = value;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.append(textArea);
        textArea.select();
        let copied = false;

        try {
            copied = document.execCommand("copy");
        } finally {
            textArea.remove();
            previousFocus?.focus();
        }

        if (!copied) {
            throw new Error("Copy command was not successful.");
        }
    };

    if (copyEmailButton && emailLink) {
        copyEmailButton.hidden = false;
        copyEmailButton.addEventListener("click", async () => {
            if (isCopyingEmail) {
                return;
            }

            const emailAddress = decodeURIComponent(emailLink.href.replace(/^mailto:/, "").split("?")[0]);
            isCopyingEmail = true;

            try {
                if (navigator.clipboard?.writeText && window.isSecureContext) {
                    try {
                        await navigator.clipboard.writeText(emailAddress);
                    } catch {
                        copyWithFallback(emailAddress);
                    }
                } else {
                    copyWithFallback(emailAddress);
                }
                showCopyStatus("contact.copySuccess");
            } catch {
                showCopyStatus("contact.copyError");
            } finally {
                isCopyingEmail = false;
            }
        });
    }

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

    const navigationTargets = Array.from(navLinks)
        .map((link) => {
            if (!link.hash) {
                return null;
            }

            const section = document.querySelector(link.hash);
            return section ? { link, section } : null;
        })
        .filter(Boolean);

    const setActiveNavigation = (sectionId) => {
        navigationTargets.forEach(({ link, section }) => {
            if (section.id === sectionId) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    if (navigationTargets.length) {
        const syncNavigationWithHash = () => {
            const target = navigationTargets.find(({ link }) => link.hash === window.location.hash);
            if (target) {
                setActiveNavigation(target.section.id);
            }
        };

        const hashTarget = navigationTargets.find(({ link }) => link.hash === window.location.hash);
        setActiveNavigation(hashTarget?.section.id ?? navigationTargets[0].section.id);

        navigationTargets.forEach(({ link, section }) => {
            link.addEventListener("click", () => setActiveNavigation(section.id));
        });

        if ("IntersectionObserver" in window) {
            let sectionObserver = null;
            let observerResizeFrame = null;

            const isAtPageBottom = () => {
                const pageBottom = Math.ceil(window.scrollY + window.innerHeight);
                return pageBottom >= document.documentElement.scrollHeight - 1;
            };

            const setLastSectionAtPageBottom = () => {
                if (isAtPageBottom()) {
                    setActiveNavigation(navigationTargets.at(-1).section.id);
                    return true;
                }
                return false;
            };

            const observeNavigationSections = () => {
                sectionObserver?.disconnect();
                const visibleSections = new Set();
                const markerPosition = Math.min(window.innerHeight * 0.25, 220);
                const bottomMargin = Math.max(0, window.innerHeight - markerPosition - 1);

                sectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            visibleSections.add(entry.target.id);
                        } else {
                            visibleSections.delete(entry.target.id);
                        }
                    });

                    if (setLastSectionAtPageBottom()) {
                        return;
                    }

                    const activeTarget = navigationTargets
                        .filter(({ section }) => visibleSections.has(section.id))[0];

                    if (activeTarget) {
                        setActiveNavigation(activeTarget.section.id);
                    }
                }, {
                    rootMargin: `-${markerPosition}px 0px -${bottomMargin}px 0px`,
                    threshold: 0
                });

                navigationTargets.forEach(({ section }) => sectionObserver.observe(section));
            };

            observeNavigationSections();
            window.addEventListener("scroll", setLastSectionAtPageBottom, { passive: true });
            window.addEventListener("resize", () => {
                window.cancelAnimationFrame(observerResizeFrame);
                observerResizeFrame = window.requestAnimationFrame(observeNavigationSections);
            }, { passive: true });
        }

        window.addEventListener("hashchange", syncNavigationWithHash);
        window.addEventListener("load", () => {
            window.requestAnimationFrame(syncNavigationWithHash);
        }, { once: true });
    }

    applyTheme(currentTheme);
    applyLanguage(currentLanguage);
})();
