// === TẢI HEADER ===
fetch("./header_footer/header.html")
  .then(res => {
    if (!res.ok) throw new Error("Không tải được header.html: " + res.status);
    return res.text();
  })
  .then(html => {
    const container = document.getElementById("header");
    container.innerHTML = html;

    // Lấy các phần tử bên trong header vừa chèn
    const headerEl = container.querySelector("#main-header");
    const searchIcon = container.querySelector(".icon-search");
    const searchOverlay = container.querySelector(".search-overlay");
    const closeSearch = container.querySelector(".close-search");
    const heartIcon = container.querySelector(".icon-heart");
    const menuToggle = container.querySelector(".menu-toggle");
    const navLinks = container.querySelector(".nav-links");

    // ⚡️ 0) CHỪA KHOẢNG TRỐNG CHO HEADER CỐ ĐỊNH
    if (headerEl) {
      const headerHeight = headerEl.offsetHeight;
      document.body.style.paddingTop = headerHeight + "px";
    }

    // 1) Search overlay
    if (searchIcon && searchOverlay && closeSearch) {
      searchIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        searchOverlay.classList.add("active");
      });
      closeSearch.addEventListener("click", () => searchOverlay.classList.remove("active"));

      // đóng overlay khi click ngoài input
      searchOverlay.addEventListener("click", (e) => {
        if (e.target === searchOverlay) searchOverlay.classList.remove("active");
      });
    }

    // 2) Heart icon toggle
    if (heartIcon) {
      heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle("far");
        heartIcon.classList.toggle("fas");
        heartIcon.classList.toggle("active");
      });
    }

    // 3) Mobile menu toggle
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
    }

    // 4) Hide/show header khi scroll (ẩn cả header-top + header-bottom)
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
fetch("./header_footer/footer.html")
  .then(res => {
    if (!res.ok) throw new Error("Không tải được footer.html: " + res.status);
    return res.text();
  })
  .then(html => {
    document.getElementById("footer").innerHTML = html;

    // Gắn sự kiện sau khi footer load
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
