document.addEventListener("DOMContentLoaded", () => {
    // ===================== HEADER =====================
    const headerEl = document.querySelector("#main-header");
    const searchIcon = document.querySelector(".icon-search");
    const searchOverlay = document.querySelector(".search-overlay");
    const closeSearch = document.querySelector(".close-search");
    const heartIcon = document.querySelector(".icon-heart");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const headerTop = document.querySelector(".header-top");

    

    // Hàm render header-top dựa vào trạng thái đăng nhập
    function renderHeaderTop() {
        const user = JSON.parse(localStorage.getItem("user"));
        headerTop.innerHTML = "";

        if (user) {
            // Tạo tên người dùng
            const nameSpan = document.createElement("span");
            nameSpan.textContent = `Xin chào, ${user.name}`;
            nameSpan.style.color = "#fff";
            nameSpan.style.fontWeight = "500";
            nameSpan.style.marginRight = "15px";

            // Tạo link Đăng Xuất giống a
            const logoutLink = document.createElement("a");
            logoutLink.href = "#";
            logoutLink.textContent = "Đăng Xuất";
            logoutLink.style.padding = "0 20px";
            logoutLink.style.lineHeight = "50px"; // cao bằng header-top
            logoutLink.style.color = "#fff";
            logoutLink.style.textDecoration = "none";
            logoutLink.style.fontWeight = "500";
            logoutLink.addEventListener("mouseenter", () => {
                logoutLink.style.background = "#fff";
                logoutLink.style.color = "#000";
            });
            logoutLink.addEventListener("mouseleave", () => {
                logoutLink.style.background = "transparent";
                logoutLink.style.color = "#fff";
            });

            logoutLink.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("user");
                renderHeaderTop(); // quay về trạng thái chưa đăng nhập
            });

            headerTop.appendChild(nameSpan);
            headerTop.appendChild(logoutLink);
        } else {
            // Chưa đăng nhập -> hiển thị 2 link
            const loginLink = document.createElement("a");
            loginLink.href = "/dangky.html";
            loginLink.textContent = "Đăng Nhập";

            const registerLink = document.createElement("a");
            registerLink.href = "/dangky.html";
            registerLink.textContent = "Đăng Ký";

            headerTop.appendChild(loginLink);
            headerTop.appendChild(registerLink);
        }
    }

    renderHeaderTop();

    // ===================== SEARCH =====================
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

    // ===================== HEART ICON =====================
    if (heartIcon) {
        heartIcon.addEventListener("click", () => {
            heartIcon.classList.toggle("far");
            heartIcon.classList.toggle("fas");
            heartIcon.classList.toggle("active");
        });
    }

    // ===================== MENU RESPONSIVE =====================
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () =>
            navLinks.classList.toggle("show")
        );
    }

    // ===================== HEADER HIDDEN WHEN SCROLL =====================
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

    // ===================== FOOTER SUBSCRIBE =====================
    const subscribeBtn = document.querySelector(".footer-col button");
    const emailInput = document.querySelector(".footer-col input[type='email']");
    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener("click", function () {
            const email = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                alert("Vui lòng nhập email của bạn!");
            } else if (!emailPattern.test(email)) {
                alert(
                    "Email không hợp lệ. Vui lòng nhập đúng định dạng (ví dụ: ten@gmail.com)"
                );
            } else {
                alert("🎉 Bạn đã đăng ký thành công!");
                emailInput.value = "";
            }
        });
    }
});
