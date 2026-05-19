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
//  SECTION: SEJARAH
// =======================
const section = document.createElement("section");
section.className = "timeline-section";

// Judul
const titleContainer = document.createElement("div");
titleContainer.className = "title-container";
titleContainer.innerHTML = `
  <h3 class="sub-title">Sejarah Pendirian</h3>
  <h1>San Digital Agency</h1>
  <img src="/img/Sunset Brew.png" alt="Sunset Brew" class="header-img">
`;
section.appendChild(titleContainer);

// Timeline container
const timeline = document.createElement("div");
timeline.className = "timeline";

// 1️⃣ Item 1
const item1 = document.createElement("div");
item1.className = "timeline-item left";
item1.innerHTML = `
  <p>Dengan adanya perkembangan zaman di dunia Teknologi,<br> maka di bangunlah suatu usaha Bisnis<br>Bernama San Digital Agency.</p>
`;

// 2️⃣ Item 2
const item2 = document.createElement("div");
item2.className = "timeline-item right";
item2.innerHTML = `
  <img src="/img/rena.png" alt="CEO">
  <p><strong>San Digital Agency</strong> di Dirikan oleh seorang CEO asal Bandung Bernama Febriany Renata<br><br>
  San di ambil dari kata <strong>Sunset</strong> dalam bahasa inggris yang artinya <strong>Matahari Terbenam.</strong> Yang rencana ke depan akan di buat Bisnis atau Usaha Coffee Shop</p>
`;

// 3️⃣ Item 3
const item3 = document.createElement("div");
item3.className = "timeline-item left";
item3.innerHTML = `
  <h4>Agustus 2025</h4>
   <img src="/img/lingkaran 1.png">
  <p>Pada tanggal 23 Agustus di bangunya Komunitas dan server Discord <strong>Sunset Brew</strong></p>
`;

// 4️⃣ Item 4
const item4 = document.createElement("div");
item4.className = "timeline-item right";
item4.innerHTML = `
  <h4>Sep - Oct 2025</h4>
  <p>Di bulan September sampai Oktober membangun desain hingga pembentukan Website Coffee Shop & Agency</p>
`;

// 5️⃣ Item Oktober 2026
const item5 = document.createElement("div");
item5.className = "timeline-item left";
item5.innerHTML = `
  <h4>October 2026</h4>
  <p>
    Komunitas Kami Update dari nama
    <strong>Sunset</strong> menjadi <strong>Sunrise</strong>
  </p>

  <img src="https://raw.githubusercontent.com/FebrianyRenata02/San-Digital-Academy/refs/heads/main/img/sunrise%20brew.png" alt="Sunrise Brew" class="timeline-img">
`;

// 6️⃣ Item Oktober 2026
const item6 = document.createElement("div");
item6.className = "timeline-item right";
item6.innerHTML = `
  <h4>Oktober 2026 - Febuari 2027</h4>

  <strong>Bulan Mei</strong> sampai <strong>Agustus</strong> 
    Kami mendirikan sebuah kelas & bootcamp.<br>
  <img src="https://raw.githubusercontent.com/FebrianyRenata02/San-Digital-Academy/refs/heads/main/img/sunset%20tech.png" alt="Sunset Tech" class="timeline-img small">

  <p>
    Mengubah nama <strong>Sunset</strong> menjadi 
    <strong>Sunrise</strong> yang berarti <em>Terbenam menjadi Terbit</em>.
  </p>

  <img src="https://raw.githubusercontent.com/FebrianyRenata02/San-Global-Digital/refs/heads/main/img/Sunrise%20Tech%20Bootcamp.png" alt="Sunrise Tech" class="timeline-img small">

  <p>
    Yang artinya membangun.
  </p>
`;

timeline.append(item1, item2, item3, item4, item5, item6);
section.appendChild(timeline);
document.body.appendChild(section);

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
