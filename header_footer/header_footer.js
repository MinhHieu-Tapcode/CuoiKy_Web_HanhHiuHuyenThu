// === XÁC ĐỊNH ĐƯỜNG DẪN CHUNG ===
let basePath = "";
const origin = window.location.origin;
const pathname = window.location.pathname;

// Kiểm tra đang chạy local (Live Server hoặc mở file trực tiếp)
const isLocal = origin.includes("127.0.0.1") || origin.includes("localhost") || origin === "null" || origin === "";

// Nếu chạy local
if (isLocal) {
  // Lấy vị trí của file hiện tại (VD: /BTL/pages/home.html)
  // => tách các cấp thư mục để tính đường dẫn tương đối về "header_footer"
  const pathParts = pathname.split("/");
  const idx = pathParts.indexOf("header_footer");
  if (idx === -1) {
    // Tính xem file hiện tại nằm sâu mấy cấp → quay về bấy nhiêu lần
    const depth = pathParts.length - 2;
    basePath = "../".repeat(depth) + "header_footer/";
  } else {
    basePath = "./";
  }
} else {
  // Nếu chạy trên GitHub Pages (đường dẫn tuyệt đối)
  basePath = "/CuoiKy_Web_HanhHiuHuyenThu/header_footer/";
}

console.log("Base path:", basePath);
// === TẢI HEADER ===
fetch(basePath + "header.html")
  .then(res => {
    if (!res.ok) throw new Error("Không tải được header.html: " + res.status);
    return res.text();
  })
  .then(html => {
    const container = document.getElementById("header");
    container.innerHTML = html;

    const headerEl = container.querySelector("#main-header");
    const searchIcon = container.querySelector(".icon-search");
    const searchOverlay = container.querySelector(".search-overlay");
    const closeSearch = container.querySelector(".close-search");
    const heartIcon = container.querySelector(".icon-heart");
    const menuToggle = container.querySelector(".menu-toggle");
    const navLinks = container.querySelector(".nav-links");

    if (headerEl) document.body.style.paddingTop = headerEl.offsetHeight + "px";

    if (searchIcon && searchOverlay && closeSearch) {
      searchIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        searchOverlay.classList.add("active");
      });
      closeSearch.addEventListener("click", () => searchOverlay.classList.remove("active"));
      searchOverlay.addEventListener("click", (e) => {
        if (e.target === searchOverlay) searchOverlay.classList.remove("active");
      });
    }

    if (heartIcon) {
      heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle("far");
        heartIcon.classList.toggle("fas");
        heartIcon.classList.toggle("active");
      });
    }

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
    }

    if (headerEl) {
      let lastScrollY = window.scrollY;
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
          const cur = window.scrollY;
          if (cur > lastScrollY && cur > 150) {
            headerEl.classList.add("header-hidden");
          } else {
            headerEl.classList.remove("header-hidden");
          }
          lastScrollY = cur;
          ticking = false;
        });
      });
    }
  })
  .catch(err => console.error(err));

// === TẢI FOOTER ===
fetch(basePath + "footer.html")
  .then(res => {
    if (!res.ok) throw new Error("Không tải được footer.html: " + res.status);
    return res.text();
  })
  .then(html => {
    document.getElementById("footer").innerHTML = html;

    const subscribeBtn = document.querySelector(".footer-col button");
    const emailInput = document.querySelector(".footer-col input[type='email']");

    if (subscribeBtn && emailInput) {
      subscribeBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
          alert("Vui lòng nhập email của bạn!");
        } else if (!emailPattern.test(email)) {
          alert("Email không hợp lệ. Vui lòng nhập đúng định dạng (ví dụ: ten@gmail.com)");
        } else {
          alert("🎉 Bạn đã đăng ký thành công!");
          emailInput.value = "";
        }
      });
    }
  })
  .catch(err => console.error(err));
