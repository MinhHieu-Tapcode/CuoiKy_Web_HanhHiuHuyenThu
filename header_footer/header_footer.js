document.addEventListener("DOMContentLoaded", () => {
  // Hiệu ứng header
  const headerEl = document.querySelector("#main-header");
  const searchIcon = document.querySelector(".icon-search");
  const searchOverlay = document.querySelector(".search-overlay");
  const closeSearch = document.querySelector(".close-search");
  const heartIcon = document.querySelector(".icon-heart");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (searchIcon && searchOverlay && closeSearch) {
    searchIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      searchOverlay.classList.add("active");
    });
    closeSearch.addEventListener("click", () =>
      searchOverlay.classList.remove("active")
    );
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
    menuToggle.addEventListener("click", () =>
      navLinks.classList.toggle("show")
    );
  }

  if (headerEl) {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      const cur = window.scrollY;
      if (cur > lastScrollY && cur > 150) {
        headerEl.classList.add("header-hidden");
      } else {
        headerEl.classList.remove("header-hidden");
      }
      lastScrollY = cur;
    });
  }

  // Hiệu ứng footer
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
});
