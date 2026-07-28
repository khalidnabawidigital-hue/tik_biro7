/* =========================================================================
   APP.JS — Roadmap Informatika Kelas VII
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ once: true, duration: 800, easing: "ease-out-cubic" });

  renderTimeline();
  renderSemesterLists();
  renderTargets();
  initParticles();
  initScrollProgress();
  initProgressBar();
  openDetail(1, { silent: true });
});

/* ---------------------------- TIMELINE CARDS ---------------------------- */

function renderTimeline() {
  const row = document.getElementById("timelineRow");
  row.innerHTML = CHAPTERS.map((ch, i) => `
    <button type="button"
       class="chapter-card"
       id="card-${ch.num}"
       data-num="${ch.num}"
       style="--accent:${ch.color}; --accent-soft:${ch.colorSoft};"
       data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <span class="chapter-card__progress">${String(ch.num).padStart(2,"0")}<span class="chapter-card__progress-total">/09</span></span>
      <span class="chapter-card__icon"><i class="fa-solid ${ch.icon}"></i></span>
      <span class="chapter-card__eyebrow">BAB ${ch.num}</span>
      <span class="chapter-card__title">${ch.title}</span>
      <span class="chapter-card__badge">${ch.badge}</span>
      <span class="chapter-card__hint"><i class="fa-solid fa-hand-pointer"></i> Klik untuk lihat detail</span>
    </button>
  `).join("");

  row.querySelectorAll(".chapter-card").forEach(card => {
    card.addEventListener("click", () => openDetail(parseInt(card.dataset.num, 10)));
  });
}

/* ---------------------------- DETAIL PANEL ---------------------------- */

function openDetail(num, opts = {}) {
  const ch = CHAPTERS.find(c => c.num === num);
  if (!ch) return;

  document.querySelectorAll(".chapter-card").forEach(c => {
    c.classList.toggle("is-active", parseInt(c.dataset.num, 10) === num);
  });

  const panel = document.getElementById("detailPanel");
  panel.style.setProperty("--accent", ch.color);
  panel.style.setProperty("--accent-soft", ch.colorSoft);

  panel.classList.remove("is-visible");

  const progressPct = Math.round((ch.num / CHAPTERS.length) * 100);

  panel.innerHTML = `
    <div class="detail-panel__head">
      <div class="detail-panel__icon"><i class="fa-solid ${ch.icon}"></i></div>
      <div class="detail-panel__headtext">
        <span class="detail-panel__eyebrow">BAB ${ch.num} DARI 9 &middot; SEMESTER ${ch.semester}</span>
        <h3>${ch.title}</h3>
        <p class="detail-panel__tagline">${ch.shortTitle}</p>
      </div>
      <div class="detail-panel__meta">
        <span class="pill"><i class="fa-solid fa-layer-group"></i> ${ch.badge}</span>
        <span class="pill"><i class="fa-solid fa-calendar-days"></i> ${ch.meetings}</span>
      </div>
    </div>

    <div class="detail-panel__body">
      <div class="detail-block" data-aos="fade-up">
        <h4><i class="fa-solid fa-bullseye"></i> 1. Capaian Pembelajaran</h4>
        <p>${ch.cp}</p>
      </div>

      <div class="detail-block" data-aos="fade-up">
        <h4><i class="fa-solid fa-list-check"></i> 2. Apa yang Akan Dipelajari?</h4>
        <ul class="detail-list">
          ${ch.points.map(p => `<li><i class="fa-solid fa-caret-right"></i>${p}</li>`).join("")}
        </ul>
      </div>

      <div class="detail-block" data-aos="fade-up">
        <h4><i class="fa-solid fa-circle-question"></i> 3. Kenapa Harus Belajar Ini?</h4>
        <p class="detail-block__quote">"${ch.why}"</p>
      </div>

      <div class="detail-block" data-aos="fade-up">
        <h4><i class="fa-solid fa-hammer"></i> 4. Proyek yang Akan Dibuat</h4>
        <div class="chip-row">
          ${ch.projects.map(p => `<span class="chip"><i class="fa-solid fa-check"></i>${p}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="detail-panel__progress">
      <div class="detail-panel__progress-track">
        <div class="detail-panel__progress-fill" style="width:${progressPct}%"></div>
      </div>
      <span>${progressPct}% dari perjalanan Kelas VII</span>
    </div>

    <div class="detail-panel__actions">
      <a href="${ch.slug}.html" class="btn-glow btn-glow--full">
        <i class="fa-solid fa-rocket"></i> Masuk ke Materi Bab ${ch.num}
      </a>
      <a href="#" class="btn-ghost">
        <i class="fa-solid fa-book-open"></i> Lihat Materi
      </a>
    </div>

    <div class="detail-panel__nav">
      <button type="button" class="detail-panel__nav-btn" id="prevChapterBtn" ${ch.num === 1 ? "disabled" : ""}>
        <i class="fa-solid fa-arrow-left"></i> Bab Sebelumnya
      </button>
      <button type="button" class="detail-panel__nav-btn" id="nextChapterBtn" ${ch.num === CHAPTERS.length ? "disabled" : ""}>
        Bab Selanjutnya <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `;

  requestAnimationFrame(() => panel.classList.add("is-visible"));

  const prevBtn = document.getElementById("prevChapterBtn");
  const nextBtn = document.getElementById("nextChapterBtn");
  if (prevBtn) prevBtn.addEventListener("click", () => openDetail(ch.num - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => openDetail(ch.num + 1));

  if (!opts.silent) {
    document.getElementById("detailSection").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ---------------------------- SEMESTER LISTS ---------------------------- */

function renderSemesterLists() {
  const s1 = document.getElementById("semester1List");
  const s2 = document.getElementById("semester2List");

  const itemHtml = ch => `
    <li style="--accent:${ch.color}">
      <span class="semester-card__list-num">${String(ch.num).padStart(2,"0")}</span>
      <span class="semester-card__list-icon"><i class="fa-solid ${ch.icon}"></i></span>
      <span class="semester-card__list-text">${ch.title}</span>
      <a href="#card-${ch.num}" class="semester-card__list-go" onclick="openDetail(${ch.num})"><i class="fa-solid fa-arrow-right"></i></a>
    </li>`;

  s1.innerHTML = CHAPTERS.filter(c => c.semester === 1).map(itemHtml).join("");
  s2.innerHTML = CHAPTERS.filter(c => c.semester === 2).map(itemHtml).join("");
}

/* ---------------------------- TARGET GRID ---------------------------- */

function renderTargets() {
  const grid = document.getElementById("targetGrid");
  grid.innerHTML = TARGETS.map((t, i) => `
    <div class="target-item" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="target-item__icon"><i class="fa-solid ${t.icon}"></i></div>
      <p>${t.text}</p>
    </div>
  `).join("");
}

/* ---------------------------- SCROLL PROGRESS BAR (TOP) ---------------------------- */

function initScrollProgress() {
  const bar = document.getElementById("scrollProgressBar");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + "%";
  }, { passive: true });
}

/* ---------------------------- PROGRESS BAR (TARGET SECTION) ---------------------------- */

function initProgressBar() {
  const track = document.getElementById("progressTrack");
  const fill = document.getElementById("progressFill");
  const marker = document.getElementById("progressMarker");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        fill.style.width = "100%";
        marker.style.left = "100%";
      }
    });
  }, { threshold: 0.4 });

  observer.observe(track);
}

/* ---------------------------- PARTICLE CANVAS BACKGROUND ---------------------------- */

function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, particles;

  const COLORS = ["#00E5FF", "#7C4DFF", "#FF2E92", "#2EE6A8"];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = Math.max(window.innerHeight, document.body.scrollHeight * 0);
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.min(70, Math.floor((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = 0.6;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = "rgba(120,150,255," + (1 - dist / 130) * 0.15 + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(tick);
  }

  resize();
  createParticles();
  tick();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); createParticles(); }, 200);
  });
}
