(function () {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Утилита безопасного создания элементов без сырого HTML
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (typeof text === "string") node.textContent = text;
    return node;
  }

  // Привязка простых текстовых полей по data-bind
  function bindTextFields() {
    document.title = data.meta.pageTitle || document.title;

    const merged = Object.assign({}, data.meta, data.sections);
    document.querySelectorAll("[data-bind]").forEach((node) => {
      const key = node.getAttribute("data-bind");
      if (merged[key]) {
        node.textContent = merged[key];
      }
    });

    // Подстановка реальных фото, если заданы URL
    applyPhoto("hero-photo-frame", data.meta.heroPhotoUrl, "Главное фото креатора");
    applyPhoto("about-photo-frame", data.meta.aboutPhotoUrl, "Фото блока Обо мне");
    applyPhoto("contact-photo-frame", data.meta.contactPhotoUrl, "Фото блока Контакты");
  }

  function applyPhoto(containerId, url, altText) {
    if (!url) return;
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    const img = el("img");
    img.src = url;
    img.alt = altText;
    img.loading = "lazy";
    container.appendChild(img);
  }

  // Блок «Обо мне» и статистика
  function renderAbout() {
    const pWrap = document.getElementById("about-paragraphs");
    if (pWrap) {
      pWrap.innerHTML = "";
      data.aboutParagraphs.forEach((text) => {
        pWrap.appendChild(el("p", "", text));
      });
    }

    const statsGrid = document.getElementById("stats-grid");
    if (statsGrid) {
      statsGrid.innerHTML = "";
      data.stats.forEach((item) => {
        const toneClass =
          item.tone === "wine"
            ? " stat-card--wine"
            : item.tone === "blue"
              ? " stat-card--blue"
              : "";
        const card = el("div", `stat-card${toneClass}`);
        card.appendChild(el("span", "stat-value", item.value));
        card.appendChild(el("span", "stat-label", item.label));
        statsGrid.appendChild(card);
      });
    }
  }

  // Фильтры и сетка видео (#videos)
  let activeVideoCategory = "Все";

  function renderVideoFilters() {
    const wrap = document.getElementById("video-filters");
    if (!wrap) return;
    wrap.innerHTML = "";

    data.videoCategories.forEach((cat) => {
      const btn = el(
        "button",
        `filter-pill${cat === activeVideoCategory ? " is-active" : ""}`,
        cat
      );
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(cat === activeVideoCategory));
      btn.addEventListener("click", () => {
        activeVideoCategory = cat;
        renderVideoFilters();
        renderVideosGrid();
      });
      wrap.appendChild(btn);
    });
  }

  function renderVideosGrid() {
    const grid = document.getElementById("videos-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const items =
      activeVideoCategory === "Все"
        ? data.videos
        : data.videos.filter((v) => v.category === activeVideoCategory);

    items.forEach((video) => {
      const card = el("button", "video-card");
      card.type = "button";
      card.addEventListener("click", () => openVideoModal(video));

      const thumb = el("div", "video-thumb");
      if (video.coverUrl) {
        const img = el("img");
        img.src = video.coverUrl;
        img.alt = video.title;
        img.loading = "lazy";
        thumb.appendChild(img);
      } else {
        const ph = el("div", "video-thumb-placeholder");
        const topMeta = el("div", "video-top-meta");
        topMeta.appendChild(el("span", "video-tag", video.category));
        topMeta.appendChild(el("span", "video-duration", video.duration));
        ph.appendChild(topMeta);
        ph.appendChild(
          el("span", "video-thumb-caption", "Нажмите для просмотра превью 9:16")
        );
        thumb.appendChild(ph);
      }

      const play = el("span", "play-badge", "▶");
      thumb.appendChild(play);
      card.appendChild(thumb);

      const info = el("div", "video-info");
      info.appendChild(el("div", "video-brand", video.brand));
      info.appendChild(el("h3", "video-title", video.title));
      info.appendChild(el("p", "video-goal", video.goal));
      card.appendChild(info);

      grid.appendChild(card);
    });
  }

  // Модальное окно видео
  function openVideoModal(video) {
    const modal = document.getElementById("video-modal");
    const playerWrap = document.getElementById("modal-player-wrap");
    const catEl = document.getElementById("modal-video-category");
    const titleEl = document.getElementById("modal-video-title");
    const brandEl = document.getElementById("modal-video-brand");
    const descEl = document.getElementById("modal-video-desc");
    const extLink = document.getElementById("modal-external-link");
    const inquireBtn = document.getElementById("modal-inquire-btn");

    if (!modal || !playerWrap) return;

    playerWrap.innerHTML = "";
    if (video.videoUrl) {
      const vid = el("video");
      vid.src = video.videoUrl;
      vid.controls = true;
      vid.playsInline = true;
      vid.autoplay = true;
      playerWrap.appendChild(vid);
    } else {
      const ph = el("div", "media-placeholder");
      ph.appendChild(el("span", "placeholder-tag", `9:16 • ${video.duration}`));
      ph.appendChild(el("p", "placeholder-title", video.title));
      ph.appendChild(
        el(
          "p",
          "placeholder-hint",
          "Добавьте videoUrl в data.js для встроенного MP4-плеера или укажите externalUrl для перехода в Reels/TikTok."
        )
      );
      playerWrap.appendChild(ph);
    }

    catEl.textContent = video.category;
    titleEl.textContent = video.title;
    brandEl.textContent = video.brand;
    descEl.textContent = video.goal;

    if (video.externalUrl && video.externalUrl !== "#") {
      extLink.href = video.externalUrl;
      extLink.style.display = "inline-flex";
    } else {
      extLink.href = "#";
      extLink.style.display = "none";
    }

    inquireBtn.onclick = () => {
      setSelectedService(`Видео-формат: ${video.title}`);
      closeVideoModal();
    };

    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeVideoModal() {
    const modal = document.getElementById("video-modal");
    const playerWrap = document.getElementById("modal-player-wrap");
    if (!modal) return;
    modal.hidden = true;
    if (playerWrap) playerWrap.innerHTML = "";
    document.body.style.overflow = "";
  }

  function setupModalEvents() {
    const modal = document.getElementById("video-modal");
    const closeBtn = document.getElementById("modal-close");
    if (!modal) return;

    closeBtn?.addEventListener("click", closeVideoModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeVideoModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) closeVideoModal();
    });
  }

  // Результаты и аналитика (#results)
  let activeResultTab = "reels";

  function renderResults() {
    const track = document.getElementById("results-track");
    if (!track) return;
    track.innerHTML = "";

    const items = data.results[activeResultTab] || [];
    items.forEach((item, idx) => {
      const card = el("article", "result-card");
      const slot = el("div", "result-screenshot-slot");

      if (item.screenshotUrl) {
        const img = el("img");
        img.src = item.screenshotUrl;
        img.alt = `${item.metric} ${item.label}`;
        img.loading = "lazy";
        slot.appendChild(img);
      } else {
        slot.appendChild(el("span", "eyebrow", `Скриншот #${idx + 1}`));
        slot.appendChild(el("div", "result-metric-num", item.metric));
        slot.appendChild(el("div", "result-metric-label", item.label));
      }

      card.appendChild(slot);
      card.appendChild(el("div", "result-note", item.note));
      track.appendChild(card);
    });
  }

  function setupResultsControls() {
    const tabs = document.querySelectorAll("[data-result-tab]");
    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeResultTab = btn.getAttribute("data-result-tab");
        tabs.forEach((t) => t.classList.toggle("is-active", t === btn));
        renderResults();
      });
    });

    const track = document.getElementById("results-track");
    const prevBtn = document.getElementById("results-prev");
    const nextBtn = document.getElementById("results-next");

    prevBtn?.addEventListener("click", () => {
      track?.scrollBy({ left: -360, behavior: "smooth" });
    });
    nextBtn?.addEventListener("click", () => {
      track?.scrollBy({ left: 360, behavior: "smooth" });
    });
  }

  // Фото-кейсы со слайдерами (#photo)
  function renderPhotoCases() {
    const grid = document.getElementById("photo-cases-grid");
    if (!grid) return;
    grid.innerHTML = "";

    data.photoCases.forEach((postCase) => {
      let currentSlide = 0;
      const total = postCase.slides.length;

      const card = el("article", "photo-case-card");
      const slider = el("div", "photo-slider");
      const slideHost = el("div", "photo-slide");
      const counter = el("span", "slider-counter");
      const dotsWrap = el("div", "slider-dots");

      const prevBtn = el("button", "slider-nav-btn slider-prev", "←");
      prevBtn.type = "button";
      prevBtn.setAttribute("aria-label", "Предыдущий слайд");

      const nextBtn = el("button", "slider-nav-btn slider-next", "→");
      nextBtn.type = "button";
      nextBtn.setAttribute("aria-label", "Следующий слайд");

      function updateSlide() {
        const slide = postCase.slides[currentSlide];
        slideHost.innerHTML = "";

        if (slide.imageUrl) {
          const img = el("img");
          img.src = slide.imageUrl;
          img.alt = slide.label;
          img.loading = "lazy";
          slideHost.style.padding = "0";
          slideHost.appendChild(img);
        } else {
          slideHost.style.padding = "28px";
          slideHost.appendChild(el("span", "placeholder-tag", `SLIDE ${currentSlide + 1} / ${total}`));
          slideHost.appendChild(el("p", "placeholder-title", slide.label));
          slideHost.appendChild(
            el("p", "placeholder-hint", "Укажите imageUrl в data.js для показа фото")
          );
        }

        counter.textContent = `${currentSlide + 1} / ${total}`;
        dotsWrap.querySelectorAll(".slider-dot").forEach((dot, idx) => {
          dot.classList.toggle("is-active", idx === currentSlide);
        });
      }

      prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + total) % total;
        updateSlide();
      });

      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % total;
        updateSlide();
      });

      postCase.slides.forEach((_, idx) => {
        const dot = el("button", "slider-dot");
        dot.type = "button";
        dot.setAttribute("aria-label", `Слайд ${idx + 1}`);
        dot.addEventListener("click", () => {
          currentSlide = idx;
          updateSlide();
        });
        dotsWrap.appendChild(dot);
      });

      slider.appendChild(slideHost);
      slider.appendChild(counter);
      slider.appendChild(prevBtn);
      slider.appendChild(nextBtn);
      card.appendChild(slider);
      card.appendChild(dotsWrap);

      const meta = el("div", "photo-case-meta");
      const metaLeft = el("div");
      metaLeft.appendChild(el("h3", "", postCase.title));
      metaLeft.appendChild(el("p", "", postCase.subtitle));
      meta.appendChild(metaLeft);

      const link = el("a", "text-link", "Открыть пост →");
      link.href = postCase.externalUrl || "#";
      if (postCase.externalUrl && postCase.externalUrl !== "#") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      meta.appendChild(link);

      card.appendChild(meta);
      grid.appendChild(card);
      updateSlide();
    });
  }

  // 12 форматов + принципы + этапы (#formats)
  function renderFormatsAndApproach() {
    const formatsGrid = document.getElementById("formats-grid");
    if (formatsGrid) {
      formatsGrid.innerHTML = "";
      data.formats.forEach((f) => {
        const card = el("article", "format-card reveal");
        card.appendChild(el("span", "format-num", f.num));
        card.appendChild(el("h3", "", f.title));
        card.appendChild(el("p", "", f.desc));
        formatsGrid.appendChild(card);
      });
    }

    const approachGrid = document.getElementById("approach-grid");
    if (approachGrid) {
      approachGrid.innerHTML = "";
      data.approachItems.forEach((item) => {
        const cell = el("div", "bento-cell");
        cell.appendChild(el("strong", "", item.title));
        cell.appendChild(el("span", "", item.desc));
        approachGrid.appendChild(cell);
      });
    }

    const workflowList = document.getElementById("workflow-list");
    if (workflowList) {
      workflowList.innerHTML = "";
      data.workflowSteps.forEach((st) => {
        const row = el("div", "workflow-item");
        row.appendChild(el("span", "workflow-step-badge", st.step));
        const body = el("div");
        body.appendChild(el("strong", "", st.title));
        body.appendChild(el("p", "", st.desc));
        row.appendChild(body);
        workflowList.appendChild(row);
      });
    }
  }

  // Услуги и прайс (#services)
  function renderServices() {
    const grid = document.getElementById("services-grid");
    if (!grid) return;
    grid.innerHTML = "";

    data.services.forEach((srv) => {
      const card = el("article", "service-card reveal");

      const top = el("div");
      top.appendChild(el("div", "service-num", srv.num));
      top.appendChild(el("h3", "", srv.title));
      top.appendChild(el("p", "service-desc", srv.desc));

      const ul = el("ul", "service-bullets");
      srv.bullets.forEach((b) => ul.appendChild(el("li", "", b)));
      top.appendChild(ul);
      card.appendChild(top);

      const bottom = el("div");
      const prices = el("div", "price-rows");
      srv.prices.forEach((p) => {
        const row = el("div", "price-row");
        row.appendChild(el("span", "price-row-label", p.label));
        row.appendChild(el("span", "price-row-dots"));
        row.appendChild(el("span", "price-row-value", p.value));
        prices.appendChild(row);
      });
      bottom.appendChild(prices);

      const cta = el("a", "btn btn-outline service-select-btn", srv.ctaLabel);
      cta.href = "#contact";
      cta.style.marginTop = "16px";
      cta.addEventListener("click", () => {
        setSelectedService(srv.title);
      });
      bottom.appendChild(cta);

      card.appendChild(bottom);
      grid.appendChild(card);
    });
  }

  // Индикатор выбранной услуги в блоке контактов
  function setSelectedService(label) {
    const note = document.getElementById("selected-service-note");
    const labelEl = document.getElementById("selected-service-label");
    if (!note || !labelEl) return;
    labelEl.textContent = label;
    note.hidden = false;
  }

  function setupServiceSelectionClear() {
    const clearBtn = document.getElementById("clear-service-btn");
    const note = document.getElementById("selected-service-note");
    clearBtn?.addEventListener("click", () => {
      if (note) note.hidden = true;
    });
  }

  // Контакты и копирование хендла
  function renderContacts() {
    const wrap = document.getElementById("contact-buttons");
    if (!wrap) return;
    wrap.innerHTML = "";

    data.contacts.forEach((c) => {
      const a = el("a", "contact-btn");
      a.href = c.url || "#";
      if (c.url && c.url.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.appendChild(el("span", "", c.label));
      a.appendChild(el("span", "", c.value));
      wrap.appendChild(a);
    });

    const copyBtn = document.getElementById("copy-handle-btn");
    const feedback = document.getElementById("copy-feedback");
    copyBtn?.addEventListener("click", async () => {
      const handle = data.meta.primaryHandle || "@username_ugc";
      try {
        await navigator.clipboard.writeText(handle);
        if (feedback) feedback.textContent = `Скопировано: ${handle}`;
      } catch {
        if (feedback) feedback.textContent = `Контакт: ${handle}`;
      }
      setTimeout(() => {
        if (feedback) feedback.textContent = "";
      }, 2600);
    });
  }

  // Мобильное меню
  function setupMobileMenu() {
    const burger = document.getElementById("burger-btn");
    const nav = document.getElementById("mobile-nav");
    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      const isOpen = !nav.hidden;
      nav.hidden = isOpen;
      burger.setAttribute("aria-expanded", String(!isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.hidden = true;
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Плавное появление элементов при скролле
  function setupRevealAnimations() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((n) => observer.observe(n));
  }

  // Инициализация страницы
  bindTextFields();
  renderAbout();
  renderVideoFilters();
  renderVideosGrid();
  renderResults();
  setupResultsControls();
  renderPhotoCases();
  renderFormatsAndApproach();
  renderServices();
  setupServiceSelectionClear();
  renderContacts();
  setupModalEvents();
  setupMobileMenu();
  setupRevealAnimations();
})();
