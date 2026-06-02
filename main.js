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
logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
navbar.appendChild(logo);

// ===== Nav Menu =====
const navMenu = document.createElement("ul");
navMenu.className = "nav-menu";

const navItems = [{
        name: "Home",
        link: "#home"
    },
    {
        name: "About",
        dropdown: [{
                name: "Sejarah",
                link: "sejarah.html"
            }, // halaman terpisah
            {
                name: "Visi & Misi",
                link: "VisiMisi.html"
            } // smooth scroll
        ]
    },
    {
        name: "Services",
        link: "#services"
    },
    {
        name: "Portfolio",
        link: "#portfolio"
    },
    {
        name: "Blog",
        link: "#blog"
    },
    {
        name: "Contact",
        link: "#contact"
    }
];

// Tinggi navbar untuk offset
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
                // smooth scroll
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
            // Jika bukan anchor (#), biarkan link normal (halaman lain)
            dropdownMenu.appendChild(a);
        });

        li.appendChild(dropdownMenu);

        // Toggle dropdown on click
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

        if (item.link.startsWith("#")) {
            // smooth scroll
            a.addEventListener("click", e => {
                e.preventDefault();
                const target = document.querySelector(item.link);
                if (target) {
                    const y = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    window.scrollTo({
                        top: y,
                        behavior: "smooth"
                    });
                }
            });
        }

        li.appendChild(a);
    }

    navMenu.appendChild(li);
});

navbar.appendChild(navMenu);

// ===== Join Discord Button dengan Icon =====
const joinBtn = document.createElement("a");
joinBtn.href = "https://discord.gg/3SBS68MGvN";
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
//  HERO SECTION
// =======================
const hero = document.createElement("section");
hero.className = "hero";
hero.id = "home";

// === Hero Left (Text) ===
const heroText = document.createElement("div");
heroText.className = "hero-text";

const heroTitle = document.createElement("h1");
heroTitle.innerHTML = `Buka Potensi <br><span>Digital Anda</span>`;
heroText.appendChild(heroTitle);

const heroDesc = document.createElement("p");
heroDesc.textContent =
    "Mulai Partnership & Bangun Karir Bersama Kami. Tingkatkan performa bisnis Anda melalui channel digital seperti Website, Google, Facebook, Instagram, YouTube, dan lainnya.";
heroText.appendChild(heroDesc);

const heroBtn = document.createElement("a");
heroBtn.href = "ourteam.html";
heroBtn.className = "cta-btn";
heroBtn.textContent = "Our Team";
heroText.appendChild(heroBtn);

// === Hero Social Media Icons (Lingkaran Neon) ===
const socialContainer = document.createElement("div");
socialContainer.className = "social-icons";

const socialLinks = [{
        icon: "fab fa-instagram",
        url: "https://www.instagram.com/san_global_digital/"
    },
    {
        icon: "fab fa-github",
        url: "https://github.com/SansDev-Comunity"
    },
    {
        icon: "fab fa-whatsapp",
        url: "https://wa.me/6282113683120"
    },
    {
        icon: "fab fa-youtube",
        url: "https://www.youtube.com/"
    }
];

socialLinks.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.className = "social-link";
    a.innerHTML = `<i class="${item.icon}"></i>`;
    socialContainer.appendChild(a);
});
heroText.appendChild(socialContainer);

// === Hero Right (Image) ===
const heroImage = document.createElement("img");
heroImage.src = "img/trafik.png";
heroImage.alt = "Grafik Pertumbuhan";
heroImage.className = "hero-img";

hero.appendChild(heroText);
hero.appendChild(heroImage);
document.body.appendChild(hero);


// ===== ABOUT =====
const about = document.createElement("section");
about.className = "about";
about.id = "about";
about.innerHTML = `
  <div class="about-left">
    <img src="img/RenataFounder.png" alt="Founder">
  </div>
  <div class="about-right">
    <h2>San Digital Agency</h2>
    <p>Kami adalah perusahaan digital yang membantu meningkatkan performa bisnis Anda melalui branding, desain, dan teknologi terkini.</p>
    <p>Web Agency merupakan jasa pembuatan Desain, website profesional untuk keperluan bisnis seperti company profile maupun portofolio pribadi kamu,

Mulai dari SEO, Marketing, etc</p>
    <button class="cta-btn">Layanan Kami</button>
  </div>
`;
document.body.appendChild(about);


// ===== SERVICES =====
const services = document.createElement("section");
services.className = "services";
services.id = "services";
services.innerHTML = `
  <h2>Jasa Services San Digital Agency</h2>
  <div class="service-cards">
  
    <div class="card">
   <svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"/></svg>
        <h3>Portofolio</h3>
        <p>Pamerkan hasil karya terbaik Anda.</p>
    </div>
    <div class="card">
    <svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM304 416L336 416C353.7 416 368 430.3 368 448L368 528L272 528L272 448C272 430.3 286.3 416 304 416zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z"/></svg>
      <h3>Company Profile</h3>
      <p>Tingkatkan kredibilitas bisnis Anda.</p>
    </div>
    <div class="card">
     <svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128C78.3 128 64 142.3 64 160C64 177.7 78.3 192 96 192L182.7 192C195 220.3 223.2 240 256 240C288.8 240 317 220.3 329.3 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L329.3 128C317 99.7 288.8 80 256 80C223.2 80 195 99.7 182.7 128L96 128zM96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L342.7 352C355 380.3 383.2 400 416 400C448.8 400 477 380.3 489.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L489.3 288C477 259.7 448.8 240 416 240C383.2 240 355 259.7 342.7 288L96 288zM96 448C78.3 448 64 462.3 64 480C64 497.7 78.3 512 96 512L150.7 512C163 540.3 191.2 560 224 560C256.8 560 285 540.3 297.3 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L297.3 448C285 419.7 256.8 400 224 400C191.2 400 163 419.7 150.7 448L96 448z"/></svg>
      <h3>Website Layanan</h3>
      <p>Bangun website profesional.</p>
    </div>
  </div>
`;
document.body.appendChild(services);

// ===== PORTFOLIO =====
const portfolioData = [{
        img: "img/programmer.svg",
        link: "https://febrianyrenata02.github.io/web-portofolio-saya/portofolio",
        title: "Portofolio",
    },
    {
        img: "/img/online-resume-animate.svg",
        link: "https://febrianyrenata.vercel.app/",
        title: "Portofolio Update",
    },
    {
        img: "https://media.istockphoto.com/id/1219544511/pt/vetorial/picture-gallery-icon-logo-vector-illustrattion-photo-gallery-icon-design-vector-template.jpg?s=170x170&k=20&c=KLoDvpV4g9968PC4b0qChIcFNPzGYgFDnKPCknVtgH8=",
        // link: "https://specialteam.vercel.app/",
        // title: "Special Team",
        link: "index.html",
        title: "Lorem",
    },
    {
        img: "img/Sunset Brew.png",
        link: "https://sunset-brew.vercel.app/",
        title: "Sunset Brew Coffee ☕",
    },
    {
      img: "/img/Sunset_Tech_Bootcamp.png",
        link: "#",
        title: "Sunset Tech Bootcamp 👨‍💻",
    },
    {
        img: "https://raw.githubusercontent.com/FebrianyRenata02/San-Digital-Academy/refs/heads/main/img/Kota%20Mati.png",
        link: "https://kota-mati.vercel.app/",
        title: "Kota Mati",
    },
];

const portfolio = document.createElement("section");
portfolio.className = "portfolio";
portfolio.id = "portfolio";

// Judul
const portfolioTitle = document.createElement("h2");
portfolioTitle.textContent = "Portofolio";
portfolioTitle.style.textAlign = "center";
portfolioTitle.style.fontWeight = "700";
portfolioTitle.style.margin = "50px 0 40px";
portfolioTitle.style.fontSize = "28px";
portfolio.appendChild(portfolioTitle);

// Grid container
const portfolioGrid = document.createElement("div");
portfolioGrid.className = "portfolio-grid";

// Generate item
portfolioData.forEach((item) => {
    const box = document.createElement("div");
    box.className = "portfolio-item";

    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    const title = document.createElement("p");
    title.textContent = item.title;

    a.appendChild(img);
    a.appendChild(title);
    box.appendChild(a);
    portfolioGrid.appendChild(box);
});

// Tambahkan ke section
portfolio.appendChild(portfolioGrid);
document.body.appendChild(portfolio);

// ===== BLOG =====
const blogData = [{
        img: "img/UI : UX.png",
        link: "UI-UX.html"
    },
    {
        img: "img/Development.png",
        link: "Developer.html"
    },
    {
        img: "img/Engineer.png",
        link: "Engineer.html"
    },
];

const blog = document.createElement("section");
blog.className = "blog";
blog.id = "blog";

const blogTitle = document.createElement("h2");
blogTitle.textContent = "Blog";
blog.appendChild(blogTitle);

const blogGrid = document.createElement("div");
blogGrid.className = "grid";

blogData.forEach((item) => {
    const box = document.createElement("div");
    box.className = "box";

    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "Blog Image";
    img.style.width = "100%";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.display = "block";

    a.appendChild(img);
    box.appendChild(a);
    blogGrid.appendChild(box);
});

blog.appendChild(blogGrid);
document.body.appendChild(blog);

// ===== MITRA / PARTNERSHIP =====
const mitraData = [{
        img: "https://skolla.online/wp-content/uploads/2023/11/logo-kampus-merdeka-1024x393.png",
        //link: "https://kemdiktisaintek.go.id/",
        link: "https://lldikti5.kemdiktisaintek.go.id/home/detailpost/program-merdeka-belajar-kampus-merdeka-tetap-berjalan",
        // link: "index.html",
        title: "Kampus Merdeka",
    },
    {
        img: "img/skynet.png",
        // link: "https://www.webskynet.my.id",
        // link: "https://myskynet.com/",
        link: "https://myskynetid.com/",
        title: "Skynet",
    },
    {
        img: "https://github.com/FebrianyRenata02/Bootcamp_Spesial_Team/blob/main/img/Spesial_team.png?raw=true",
        link: "index.html",
        //link: "https://discord.com/invite/EQZHmPfJHS",
        title: "Special Team",
    },
    {
        img: "img/fedora.png",
        link: "https://fedoraweb.site/",
        // link: "index.html",
        title: "Fedora Aliansi Digital",
    },
    {
        img: "https://files.startupranking.com/startup/thumb/24471_74eecacf22614aefb17dfd382b55f7744cdb3e2e_codepolitan_m.png",
        link: "https://www.codepolitan.com/",
        title: "Codepolitan",
    },
    {
        img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/PRE-70111-06e9aaf7-eb16-45d3-998b-d0fa5f50d608.jpg",
         link:  "https://progate.com/",
        // link: "index.html",
        title: "Progate",
    },
    {
        img: "https://brandlogos.net/wp-content/uploads/2022/05/udemy-logo_brandlogos.net_xwww7-512x512.png",
         link:  "https://www.udemy.com/",
        // link: "index.html",
        title: "Udemy",
    },
];

const mitraSection = document.createElement("section");
mitraSection.className = "mitra";
mitraSection.id = "mitra";
mitraSection.innerHTML = `<h2>Mitra</h2>`;

const mitraGrid = document.createElement("div");
mitraGrid.className = "mitra-grid";

mitraData.forEach((item) => {
    const box = document.createElement("div");
    box.className = "mitra-box";

    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    a.appendChild(img);
    box.appendChild(a);
    mitraGrid.appendChild(box);
});

mitraSection.appendChild(mitraGrid);
document.body.appendChild(mitraSection);

// ===== CONTACT =====
const contact = document.createElement("section");
contact.className = "contact";
contact.id = "contact";
contact.innerHTML = `
  <h2>Hubungi Kami</h2>
  <form id="contactForm">
    <input type="text" id="name" placeholder="Name" required />
    <input type="email" id="email" placeholder="Email" required />
    <input type="text" id="phone" placeholder="Phone Number" required />
    <input type="text" id="city" placeholder="Your City" required />
    <textarea id="message" placeholder="Message" required></textarea>
    <button type="submit">Kirim</button>
  </form>
  <p id="response"></p>

  <!-- 🌍 Tambahkan MAP di bawah form -->
  <div class="map-container">
    <iframe
    src="https://maps.google.com/maps?q=Bandung&t=&z=13&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="500"
      style="border:0;"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
`;
document.body.appendChild(contact);

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
footer.innerHTML = `<p>© 2026 San Digital Agency. All Rights Reserved.</p>`;
document.body.appendChild(footer);

// =======================
//  WHATSAPP FLOAT BUTTON
// =======================
const waButton = document.createElement("a");
waButton.href = "https://wa.me/6282113683120"; // Ganti nomor di sini
waButton.target = "_blank";
waButton.className = "whatsapp-float";
waButton.innerHTML = `<i class="fab fa-whatsapp"></i>`;
document.body.appendChild(waButton);

// Animasi muncul halus
document.addEventListener("DOMContentLoaded", () => {
    waButton.style.opacity = "0";
    waButton.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
        waButton.style.opacity = "1";
    }, 600);
});

// ===== SMOOTH SCROLL MENU =====
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

// ===== SCROLL KE ATAS SAAT LOGO PRE-FOOTER DIKLIK =====
const preFooterLogo = document.querySelector(".footer-logo"); // ganti sesuai class logomu

if (preFooterLogo) {
    preFooterLogo.addEventListener("click", (e) => {
        e.preventDefault(); // cegah link reload kalau pakai <a>
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        history.pushState(null, "", "#home"); // ubah URL hash ke #home
    });
}

// ===== FORM HANDLER =====
document.getElementById("contactForm").addEventListener("submit", async(e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,
        message: document.getElementById("message").value,
    };

    try {
        const res = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (result.success) {
            document.getElementById("response").textContent = "✅ Pesan berhasil dikirim!";

            // 🔁 Tambahkan jeda 1.5 detik sebelum reload
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            document.getElementById("response").textContent = "❌ Gagal mengirim pesan.";
        }
    } catch (err) {
        document.getElementById("response").textContent =
            "⚠️ Terjadi kesalahan, Silahkan hubungi Whatsapp Kami";
    }
});
