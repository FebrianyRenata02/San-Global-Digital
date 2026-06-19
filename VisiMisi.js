// =======================
// TOP BAR
// =======================
const topBar = document.createElement("div");
topBar.className = "top-bar";
topBar.textContent =
  "kami adalah Perusahaan San Digital profesional, mari bekerja sama hubungi kami";
document.body.appendChild(topBar);

// =======================
// NAVBAR
// =======================
const navbar = document.createElement("nav");
navbar.className = "navbar";

// ===== Logo =====
const logo = document.createElement("div");
logo.className = "logo";
logo.innerHTML = `<img src="img/Agency Logo Transparant.png" alt="San Digital Logo">`;
// klik logo → arahkan ke halaman beranda (index.html)
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});
navbar.appendChild(logo);

// ===== Nav Menu =====
const navMenu = document.createElement("ul");
navMenu.className = "nav-menu";

const navItems = [{
    name: "Home",
    link: "index.html#home"
  },
  {
    name: "About",
    dropdown: [{
        name: "Sejarah",
        link: "sejarah.html"
      },
      {
        name: "Visi & Misi",
        link: "VisiMisi.html"
      }
    ]
  },
  {
    name: "Services",
    link: "Home",
    link: "index.html#services"
  },
  {
    name: "Portfolio",
    link: "Home",
    link: "index.html#portfolio"
  },
  {
    name: "Blog",
    link: "Home",
    link: "index.html#blog"
  },
  {
    name: "Contact",
    link: "Home",
    link: "index.html#contact"
  }
];

// Tinggi navbar untuk offset smooth scroll
const navbarHeight = 115;

navItems.forEach(item => {
  const li = document.createElement("li");

  if (item.dropdown) {
    const btn = document.createElement("button");
    btn.className = "dropdown-btn";
    btn.innerHTML = `${item.name} <span class="arrow">▼</span>`;
    li.appendChild(btn);

    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = "dropdown-menu";

    item.dropdown.forEach(sub => {
      const a = document.createElement("a");
      a.href = sub.link;
      a.textContent = sub.name;

      if (sub.link.startsWith("#")) {
        // smooth scroll di halaman sama
        a.addEventListener("click", e => {
          e.preventDefault();
          const target = document.querySelector(sub.link);
          if (target) {
            const y = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({
              top: y,
              behavior: "smooth"
            });
          }
          dropdownMenu.classList.remove("show");
          btn.querySelector(".arrow").classList.remove("rotate");
        });
      }
      dropdownMenu.appendChild(a);
    });

    li.appendChild(dropdownMenu);

    // Toggle dropdown
    btn.addEventListener("click", e => {
      e.stopPropagation();
      dropdownMenu.classList.toggle("show");
      btn.querySelector(".arrow").classList.toggle("rotate");
    });

    // Tutup dropdown jika klik di luar
    document.addEventListener("click", e => {
      if (!li.contains(e.target)) {
        dropdownMenu.classList.remove("show");
        btn.querySelector(".arrow").classList.remove("rotate");
      }
    });

  } else {
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.name;

    a.addEventListener("click", e => {
      // smooth scroll jika anchor
      if (item.link.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(item.link);
        if (target) {
          const y = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: y,
            behavior: "smooth"
          });
        }
      } else if (item.link.startsWith("#") === false && window.location.pathname !== "/index.html") {
        // berada di halaman lain → arahkan ke index.html + anchor
        if (item.link === "#services" || item.link === "#portfolio") {
          a.href = `index.html${item.link}`;
          return;
        }
      }
    });

    li.appendChild(a);
  }

  navMenu.appendChild(li);
});

navbar.appendChild(navMenu);

// ===== Join Discord Button =====
const joinBtn = document.createElement("a");
joinBtn.href = "https://discord.gg/VHscdktb24";
joinBtn.target = "_blank";
joinBtn.className = "join-btn";
joinBtn.innerHTML = `<i class="fa-brands fa-discord"></i> Join Discord`;
navbar.appendChild(joinBtn);

// ===== Hamburger =====
const hamburger = document.createElement("div");
hamburger.className = "hamburger";
hamburger.innerHTML = `<span></span><span></span><span></span>`;
navbar.appendChild(hamburger);

document.body.appendChild(navbar);

// Toggle Menu Mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// =======================
// VISI & MISI SECTION
// =======================
const visiMisiSection = document.createElement("section");
visiMisiSection.className = "visi-misi";

visiMisiSection.innerHTML = `
  <h3 class="section-subtitle">Visi & Misi</h3>
  <h1 class="section-title">San Digital <br> Agency</h1>

  <div class="decor-line">
    <span class="line-yellow"></span>
    <span class="line-blue"></span>
  </div>

  <div class="content">
    <h3>Visi:</h3>
    <p>
      Menjadi comunity digital terpercaya yang berkontribisi dan berperan aktif dalam pengembangan serta berkomitmen dalam dunia pendidikan
      melalui inovasi teknologi, kreativitas, dan solusi digital yang berdampak positif bagi masyarakat.
    </p>

    <h3>Misi:</h3>
    <ol>
      <li>Menyediakan layanan digital yang berkualitas tinggi untuk mendukung lembaga pendidikan, pelajar, dan tenaga pengajar dalam menghadapi era transformasi digital.</li>
      <li>Mengembangkan solusi kreatif dan edukatif berbasis teknologi yang relevan dengan kebutuhan pembelajaran modern.</li>
      <li>Mendorong kolaborasi antara dunia pendidikan dan industri digital, menciptakan ekosistem pembelajaran yang adaptif dan berkelanjutan.</li>
      <li>Meningkatkan literasi digital masyarakat melalui pelatihan, konten edukatif, dan program berbasis teknologi.</li>
      <li>Menjaga profesionalisme, integritas, dan inovasi sebagai landasan utama dalam memberikan layanan kepada setiap mitra dan klien.</li>
    </ol>
  </div>
`;
document.body.appendChild(visiMisiSection);

// ===== PRE-FOOTER =====
const preFooter = document.createElement("section");
preFooter.className = "pre-footer";
preFooter.innerHTML = `
  <div class="pre-footer-container">
    <div class="footer-column">
      <img src="img/Agency Logo Transparant.png" alt="San Logo" class="footer-logo scroll-top" />
    </div>

    <div class="footer-column">
      <h3>Profil Kami</h3>
      <ul>
        <li>Tentang Perusahaan</li>
        <li>Komunitas</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Layanan Kami</h3>
      <ul>
        <li>UI/UX Design</li>
        <li>Desain Grafis</li>
        <li>Web Designer</li>
        <li>Web Development</li>
        <li>Digital Marketing</li>
        <li>Partnership</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Insight</h3>
      <ul>
        <li>Blog</li>
        <li>E-book</li>
        <li>Karir</li>
        <li>Portofolio Web Development</li>
        <li>Portofolio Digital Marketing</li>
      </ul>
    </div>
  </div>
`;
document.body.appendChild(preFooter);

// ===== FOOTER =====
const footer = document.createElement("footer");
footer.innerHTML = `<p>© 2025 San Digital Agency. All Rights Reserved.</p>`;
document.body.appendChild(footer);

// =======================
//  INTERACTIONS
// =======================

// Smooth Scroll Menu
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 120,
        behavior: "smooth",
      });
    }
  });
});

// Scroll ke atas saat logo di footer diklik
const preFooterLogo = document.querySelector(".footer-logo");
if (preFooterLogo) {
  preFooterLogo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    history.pushState(null, "", "#home");
  });
}

// 🔹 Tambahkan event klik untuk logo navbar
logo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  history.pushState(null, "", "#home");
});
