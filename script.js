(() => {
  "use strict";
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const languageButton = document.querySelector("[data-language-toggle]");
  const menuButton = document.querySelector("[data-menu]");
  const nav = document.querySelector(".nav");
  const themeColor = document.querySelector("[data-theme-color]");
  const tr = {
    "meta.homeTitle":"Barış Sürkit — Yazılım, Yapay Zekâ ve Veri", "meta.homeDescription":"Barış Sürkit, yapay zekâ, veri ve modern web teknolojileriyle yazılım geliştiriyor.",
    "meta.projectsTitle":"Projeler — Barış Sürkit", "meta.projectsDescription":"Barış Sürkit'in seçili yazılım projeleri.", "meta.caseTitle":"AI Search Engine — Vaka Çalışması", "meta.caseDescription":"AI Search Engine: kaynak farkındalığı olan araştırma çalışma alanı vaka çalışması.", "meta.404Title":"Sayfa bulunamadı — Barış Sürkit",
    "nav.about":"Hakkımda", "nav.journey":"Yolculuk", "nav.projects":"Projeler", "nav.stack":"Teknolojiler", "nav.allProjects":"Tüm işler", "nav.contact":"İletişim", "nav.home":"Ana sayfa",
    "hero.kicker":"YAZILIM MÜHENDİSLİĞİ · YAPAY ZEKÂ · VERİ", "hero.copy":"Ben Barış Sürkit. Yapay zekâ araştırması, veri ve modern web alanlarında pratik projeler geliştiren bir bilgisayar mühendisliği öğrencisiyim.", "hero.projects":"Projeleri incele ↓",
    "focus.label":"GÜNCEL ODAK", "focus.title":"Kanıtı görünür kılan araştırma araçları.", "focus.copy":"Getirim sistemlerini, kaynaklı yanıtları ve özenli ürün arayüzlerini araştırıyorum.", "focus.link":"AI Search Engine’i incele →",
    "featured.label":"01 / ÖNE ÇIKAN ÇALIŞMA", "featured.intro":"Canlı web ve seçili belgeler üzerinde soruları araştırmak için kaynak farkındalığı olan bir çalışma alanı.", "featured.description":"Akış halinde yanıtlar, devam soruları ve Web, Dosyalar veya Hibrit araştırma modlarıyla bir yanıtın arkasındaki kanıtı incelenebilir kılmak için geliştirildi.", "featured.case":"Vaka çalışmasını oku →", "featured.demo":"Canlı demo ↗", "ai.one":"Canlı web ve seçili belge retrieval", "ai.two":"Mesaj bazlı kaynaklar ve özel kaynak çalışma alanı", "ai.three":"Tarayıcıda yerel geçmişle SSE streaming yanıtlar",
    "other.label":"02 / DİĞER ÇALIŞMALAR", "other.title":"Geliştirdiğim birkaç çalışma daha.", "other.link":"Tüm projeleri gör →", "budget.copy":"Gelir ve giderleri düzenlemek için geliştirilmiş full-stack kişisel bütçe takip uygulaması.", "portfolio.title":"Kişisel Portfolyo", "portfolio.copy":"Seçili çalışmaları paylaşmak için erişilebilir, çift dilli bir alan.",
    "about.label":"03 / HAKKIMDA", "about.title":"Geliştirerek öğreniyorum.", "about.copy":"Trakya Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Veri keşfinden full-stack uygulamalara ve yapay zekâ destekli araştırma araçlarına kadar teknik fikirleri kullanışlı deneyimlere dönüştürmeyi seviyorum.", "about.cv":"CV indir (EN) ↓", "journey.label":"04 / YOLCULUK", "journey.title":"Üzerine inşa ettiğim temel.", "journey.eduTitle":"Bilgisayar Mühendisliği Lisans", "journey.eduCopy":"Trakya Üniversitesi · Devam ediyor", "journey.gdgTitle":"Organizasyon Ekip Lideri", "journey.gdgCopy":"GDG on Campus Trakya University · Topluluk etkinlikleri ve teknik buluşmalar", "stack.label":"05 / ARAÇ SETİ", "stack.title":"Pratik bir teknik temel.", "stack.lang":"Diller", "stack.ai":"Yapay Zekâ ve Veri", "stack.web":"Web ve API'ler", "stack.tools":"Araçlar ve Altyapı", "contact.label":"06 / İLETİŞİM", "contact.title":"Birlikte faydalı bir şey üretelim.", "contact.copy":"Yazılım, yapay zekâ ve gerçek işler üzerinden öğrenme fırsatları hakkında konuşmaya açığım.", "contact.email":"E-posta gönder ↗", "footer.role":"Yazılım · Yapay Zekâ · Veri", "footer.top":"Başa dön ↑",
    "projects.kicker":"SEÇİLİ ÇALIŞMALAR", "projects.title":"Gerçek amaçla\ngeliştirilen <em>projeler.</em>", "projects.intro":"Yapay zekâ araştırması, full-stack geliştirme ve web alanlarında odaklı bir çalışma seçkisi.", "projects.featured":"ÖNE ÇIKAN / YAPAY ZEKÂ ARAŞTIRMASI", "projects.description":"Canlı web araması, seçili belge retrieval ve hibrit RAG'i bir araya getiren kaynak farkındalığı olan araştırma çalışma alanı.", "projects.case":"Vaka çalışması →", "projects.live":"Canlı demo ↗", "projects.source":"Kaynak kodu ↗", "projects.budgetLabel":"WEB UYGULAMASI", "projects.budgetDescription":"Next.js, TypeScript, Prisma ve SQLite ile geliştirilmiş full-stack kişisel bütçe takip uygulaması.", "projects.portfolioLabel":"WEB TASARIMI VE GELİŞTİRME", "projects.portfolioDescription":"Projeleri ve mühendislik çalışmalarını öne çıkaran erişilebilir, çift dilli portfolyo.", "footer.home":"Ana sayfaya dön ↑",
    "case.kicker":"VAKA ÇALIŞMASI / YAPAY ZEKÂ ARAŞTIRMASI", "case.lede":"Canlı web ve seçili belgelerde arama yapıp her yanıtın arkasındaki kanıtı incelemek için kaynak farkındalığı olan araştırma çalışma alanı.", "case.overview":"GENEL BAKIŞ", "case.overviewTitle":"Kaynaklarını yanında tutan araştırma.", "case.overviewCopy":"AI Search Engine, canlı Tavily retrieval ile seçili PDF, TXT, Markdown veya DOCX belgelerini tek bir konuşmada buluşturur. Yanıtlar aşamalı olarak stream edilir; kaynaklar zaman içinde incelenebilir kalır.", "case.arch":"MİMARİ", "case.archTitle":"Tek yanıt modeli, ayrı kanıt yaşam döngüleri.", "case.frontend":"Frontend", "case.frontendCopy":"React/Vite çalışma alanını, yerel IndexedDB geçmişini, deep linkleri ve streaming render'ı sağlar.", "case.backend":"Backend", "case.backendCopy":"Arama, yanıt, streaming, yükleme, belge silme ve orkestrasyonu FastAPI yönetir.", "case.web":"Web kanıtı", "case.webCopy":"Tavily arama → fetch/extract → chunk → istek kapsamlı Qdrant retrieval → cleanup.", "case.file":"Dosya kanıtı", "case.fileCopy":"Seçili konuşma belgeleri çıkarılır, kalıcı olarak indekslenir ve kapsamına göre retrieve edilir.", "case.generation":"Üretim", "case.generationCopy":"Kaynak farkındalığı olan context bir Ollama sağlayıcısına aktarılır; kaynaklar yanıtla birlikte döner.", "case.sources":"Kaynak çalışma alanı", "case.sourcesCopy":"Mesaj bazlı Web ve Dosya kaynakları masaüstünde panel, mobilde drawer olarak sunulur.", "case.decisions":"TEKNİK KARARLAR", "case.scoped":"Kapsamlı retrieval", "case.scopedCopy":"Web kanıtı istek başına geçicidir; dosya chunk'ları cleanup'a kadar seçili konuşmaya bağlı kalır.", "case.citations":"Ürün arayüzü olarak kaynaklar", "case.citationsCopy":"Satır içi kaynak işaretleri korunmuş kaynak listelerine bağlanarak kanıtı incelemeyi kolaylaştırır.", "case.streaming":"Varsayılan olarak streaming", "case.streamingCopy":"POST + fetch ve ReadableStream SSE parsing, ilerleme ile yanıt parçalarını gelir gelmez render eder.", "case.evaluation":"Dürüst değerlendirme", "case.evaluationCopy":"Deterministik offline quality gate 29/29 PASS raporlar; citation metrikleri olgusal doğruluk iddiası değil, yapısal regresyon kontrolüdür.", "case.try":"DENEYİN", "case.tryTitle":"Çalışma alanını keşfedin.", "case.tryCopy":"Production, Vercel frontend ve Render üzerindeki FastAPI backend ile çalışır. Ücretsiz backend, hareketsizlikten sonra geç açılabilir.", "case.open":"Canlı demoyu aç ↗", "case.all":"Tüm projeler ↑",
    "notfound.kicker":"404 / BULUNAMADI", "notfound.title":"Bu sayfa\nyolunu kaybetti.", "notfound.copy":"Aradığınız sayfa mevcut değil veya taşınmış olabilir.", "notfound.back":"Ana sayfaya dön →", "alt.ai":"Kaynaklar ve citation'lar içeren AI Search Engine araştırma çalışma alanı", "alt.budget":"BütçeDostum bütçe uygulaması", "alt.portfolio":"Kişisel portfolyo web sitesi"
  };
  Object.assign(tr, {
    "hero.kicker":"BİLGİSAYAR MÜHENDİSLİĞİ · YAPAY ZEKÂ · VERİ", "hero.title":"Yapay zekâ, veri ve web alanlarında yazılım geliştiriyorum.",
    "other.title":"Diğer seçili projeler.", "about.title":"Hakkımda", "about.cvEn":"CV (EN) ↓", "about.cvTr":"CV (TR) ↓",
    "journey.title":"Deneyim ve eğitim", "journey.internDate":"Ağustos 2026", "journey.internTitle":"Yazılım Stajyeri",
    "stack.label":"05 / TEKNOLOJİLER", "stack.title":"Kullandığım teknolojiler", "stack.frontend":"Frontend", "stack.backend":"Backend ve API'ler", "stack.retrieval":"Veri / Retrieval", "stack.tools":"Araçlar ve Deployment",
    "contact.title":"İletişime geçelim.", "contact.email":"E-posta ↗", "projects.title":"Projeler", "projects.intro":"Seçili yazılım, yapay zekâ ve veri projeleri."
  });
  Object.assign(tr, {
    "hero.role":"BİLGİSAYAR MÜHENDİSLİĞİ ÖĞRENCİSİ",
    "hero.intro":"Trakya Üniversitesi'nde Bilgisayar Mühendisliği okurken yapay zekâ, veri ve modern web teknolojileri üzerine projeler geliştiriyorum.",
    "featured.intro":"Canlı web ve seçili belgeler üzerinde araştırma yapmayı sağlayan, kaynak odaklı bir çalışma alanı.",
    "featured.description":"Yanıtların dayandığı kaynakları incelemeyi kolaylaştıran bu proje; streaming yanıtları, devam sorularını ve Web, Dosyalar ile Hibrit araştırma modlarını bir araya getiriyor.",
    "ai.one":"Canlı web ve seçili belgelerde retrieval",
    "ai.two":"Her mesaja ait kaynaklar ve ayrı bir kaynak paneli",
    "ai.three":"Tarayıcıda saklanan geçmiş ve SSE ile streaming yanıtlar",
    "other.title":"Diğer projeler",
    "budget.copy":"Gelir ve giderleri kategorilere ayırarak takip etmeyi sağlayan full-stack kişisel bütçe uygulaması.",
    "portfolio.copy":"Projelerimi ve mühendislik çalışmalarımı paylaştığım erişilebilir, iki dilli portfolyo sitesi.",
    "about.copy":"Trakya Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Veri analizinden full-stack uygulamalara ve yapay zekâ destekli araştırma araçlarına kadar farklı alanlarda projeler geliştirerek öğreniyorum.",
    "journey.title":"Deneyim ve eğitim",
    "journey.eduCopy":"Trakya Üniversitesi · Eğitim devam ediyor",
    "stack.title":"Kullandığım teknolojiler",
    "contact.title":"İletişime geçelim.",
    "contact.copy":"Yazılım, yapay zekâ ve birlikte üretme fırsatları hakkında konuşmak için bana ulaşabilirsiniz.",
    "projects.kicker":"PROJELER",
    "projects.intro":"Yazılım, yapay zekâ ve veri alanlarından seçili projeler.",
    "projects.featured":"ÖNE ÇIKAN / YAPAY ZEKÂ",
    "projects.description":"Canlı web aramasını, seçili belgelerde retrieval'ı ve hibrit RAG yaklaşımını bir araya getiren kaynak odaklı araştırma uygulaması.",
    "projects.case":"Vaka çalışması →",
    "projects.live":"Canlı demo ↗",
    "projects.source":"Kaynak kodu ↗",
    "projects.budgetDescription":"Next.js, TypeScript, Prisma ve SQLite ile geliştirilen full-stack kişisel bütçe takip uygulaması.",
    "projects.portfolioDescription":"Projeleri ve mühendislik çalışmalarını öne çıkaran erişilebilir, iki dilli portfolyo.",
    "case.lede":"Canlı web ve seçili belgelerde araştırma yapmayı, ardından her yanıtın dayandığı kaynakları incelemeyi sağlayan kaynak odaklı bir çalışma alanı.",
    "case.overviewTitle":"Araştırma ve kaynaklar aynı yerde.",
    "case.overviewCopy":"AI Search Engine, Tavily üzerinden canlı web retrieval ile seçili PDF, TXT, Markdown ve DOCX belgelerini tek bir konuşmada birleştiriyor. Yanıtlar aşamalı olarak stream edilirken her mesajın kaynak listesi korunuyor.",
    "case.archTitle":"Tek yanıt modeli, iki farklı kanıt yaşam döngüsü.",
    "case.frontendCopy":"React/Vite; çalışma alanını, IndexedDB'de tutulan yerel geçmişi, deep linkleri ve streaming render sürecini yönetiyor.",
    "case.backendCopy":"FastAPI; arama, yanıt üretimi, streaming, belge yükleme, silme ve orkestrasyon işlemlerini yönetiyor.",
    "case.webCopy":"Tavily araması → fetch/extract → chunk → istek kapsamlı Qdrant retrieval → cleanup.",
    "case.fileCopy":"Seçili konuşma belgeleri çıkarılır, kalıcı olarak indekslenir ve yalnızca ilgili kapsam içinde retrieve edilir.",
    "case.generationCopy":"Kaynakları içeren context, Ollama sağlayıcısına aktarılır; yanıt ve kaynaklar birlikte döner.",
    "case.sourcesCopy":"Her mesaja ait Web ve Dosya kaynakları masaüstünde panel, mobilde drawer üzerinden incelenebilir.",
    "case.scoped":"Kapsam kontrollü retrieval",
    "case.scopedCopy":"Web kaynakları her istek için geçicidir; belge chunk'ları ise cleanup yapılana kadar seçili konuşmaya bağlı kalır.",
    "case.citations":"Arayüzün parçası olan citation'lar",
    "case.citationsCopy":"Metin içindeki citation işaretleri korunmuş kaynak listelerine bağlanarak dayanakları incelemeyi kolaylaştırır.",
    "case.streamingCopy":"POST + fetch ve ReadableStream üzerinden SSE parsing kullanılarak ilerleme bilgisi ve yanıt parçaları geldikçe render edilir.",
    "case.evaluationCopy":"Deterministik offline quality gate 29/29 PASS sonucunu veriyor. Citation metrikleri olgusal doğruluk iddiası değil, yapısal regresyon kontrolüdür.",
    "case.try":"CANLI SÜRÜM",
    "case.tryTitle":"Uygulamayı inceleyin.",
    "case.tryCopy":"Production ortamında frontend Vercel'de, FastAPI backend ise Render'da çalışıyor. Ücretsiz backend, bir süre kullanılmadığında geç açılabilir.",
    "case.open":"Canlı demoyu aç ↗",
    "notfound.title":"Bu sayfa bulunamadı.",
    "notfound.copy":"Aradığınız sayfa kaldırılmış veya başka bir adrese taşınmış olabilir.",
    "alt.ai":"Yanıtı, citation'ları ve kaynakları gösteren AI Search Engine çalışma alanı",
    "alt.budget":"BütçeDostum kişisel bütçe uygulaması ekranı",
    "alt.portfolio":"Barış Sürkit kişisel portfolyo sitesi"
  });
  const lang = localStorage.getItem("portfolio-language") || "en";
  const applyLanguage = () => {
    root.lang = lang;
    const brand = document.querySelector(".brand"); if (brand) brand.innerHTML = "Barış Sürkit<span>.</span>";
    if (lang === "tr") document.querySelectorAll("[data-i18n]").forEach((el) => { const value = tr[el.dataset.i18n]; if (value) el.innerHTML = value; });
    if (lang === "tr") document.querySelectorAll("[data-i18n-content]").forEach((el) => { const value = tr[el.dataset.i18nContent]; if (value) el.content = value; });
    if (lang === "tr") document.querySelectorAll("[data-i18n-alt]").forEach((el) => { const value = tr[el.dataset.i18nAlt]; if (value) el.alt = value; });
    if (lang === "tr") { const alts = { "ai.alt":"Kaynaklar ve citation'lar içeren AI Search Engine araştırma çalışma alanı", "budget.alt":"BütçeDostum bütçe uygulaması", "portfolio.alt":"Kişisel portfolyo web sitesi" }; document.querySelectorAll("[data-i18n-alt]").forEach((el) => { if (alts[el.dataset.i18nAlt]) el.alt = alts[el.dataset.i18nAlt]; }); }
    const title = document.querySelector("title[data-i18n]"); if (lang === "tr" && title && tr[title.dataset.i18n]) document.title = tr[title.dataset.i18n];
    if (lang === "tr" && document.querySelector("[data-page-title='meta.title']")) document.title = tr["meta.homeTitle"];
    if (lang === "tr") document.querySelectorAll("[data-i18n-content='meta.description']").forEach((el) => { el.content = tr["meta.homeDescription"]; });
    if (lang === "tr") { document.querySelector(".skip-link")?.replaceChildren("İçeriğe geç"); if (menuButton) menuButton.textContent = "Menü"; }
    if (nav) nav.setAttribute("aria-label", lang === "tr" ? "Ana navigasyon" : "Main navigation");
    const socialNav = document.querySelector(".social-links"); if (socialNav) socialNav.setAttribute("aria-label", lang === "tr" ? "Profesyonel bağlantılar" : "Professional profiles");
    const caseLink = document.querySelector(".shot[aria-label]"); if (caseLink) caseLink.setAttribute("aria-label", lang === "tr" ? "AI Search Engine vaka çalışması" : "AI Search Engine case study");
    const isDark = root.dataset.theme === "dark";
    if (themeButton) themeButton.setAttribute("aria-label", lang === "tr" ? (isDark ? "Açık temaya geç" : "Koyu temaya geç") : (isDark ? "Switch to light theme" : "Switch to dark theme"));
    const themeIcon = document.querySelector("[data-theme-icon]"); if (themeIcon) themeIcon.textContent = isDark ? "☀" : "☾"; else if (themeButton) themeButton.textContent = isDark ? "☀" : "☾";
    if (languageButton) { languageButton.textContent = lang === "en" ? "TR" : "EN"; languageButton.lang = lang === "en" ? "tr" : "en"; languageButton.setAttribute("aria-label", lang === "en" ? "Türkçeye geç" : "Switch to English"); }
  };
  themeButton?.addEventListener("click", () => { const theme = root.dataset.theme === "dark" ? "light" : "dark"; root.dataset.theme = theme; localStorage.setItem("portfolio-theme", theme); if (themeColor) themeColor.content = theme === "dark" ? "#101419" : "#f7f8f9"; applyLanguage(); });
  languageButton?.addEventListener("click", () => { localStorage.setItem("portfolio-language", lang === "en" ? "tr" : "en"); location.reload(); });
  menuButton?.addEventListener("click", () => { const open = nav?.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton?.setAttribute("aria-expanded", "false"); }));
  applyLanguage();
})();
