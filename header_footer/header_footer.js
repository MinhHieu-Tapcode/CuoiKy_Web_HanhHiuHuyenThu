document.addEventListener("DOMContentLoaded", () => {

    // ===================== HEADER =====================
    const headerEl = document.querySelector("#main-header");
    const heartIcon = document.querySelector(".icon-heart");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const headerTop = document.querySelector(".header-top");

    // ===================== LOGIN / LOGOUT =====================
    function renderHeaderTop() {
        const user = JSON.parse(localStorage.getItem("user"));
        headerTop.innerHTML = "";

        if (user) {
            const nameSpan = document.createElement("span");
            nameSpan.textContent = `Xin chào, ${user.name}`;
            nameSpan.style.color = "#fff";
            nameSpan.style.marginRight = "15px";

            const logoutLink = document.createElement("a");
            logoutLink.href = "../Trangchu.html";
            logoutLink.textContent = "Đăng Xuất";
            //logoutLink.style.color = "#fff";//
            logoutLink.style.padding = "0 20px";

            logoutLink.addEventListener("click", (e) => {
                e.preventDefault(); // vẫn giữ để tránh reload thừa
                localStorage.removeItem("user");
                window.location.href = "../trangchu.html"; // chuyển trang về home
            });

            headerTop.appendChild(nameSpan);
            headerTop.appendChild(logoutLink);
        } else {
            const login = document.createElement("a");
            login.href = "../pages/dangky.html";
            login.textContent = "Đăng Nhập";

            const register = document.createElement("a");
            register.href = "../pages/dangky.html";
            register.textContent = "Đăng Ký";

            headerTop.appendChild(login);
            headerTop.appendChild(register);
        }
    }

    renderHeaderTop();

    // ===================== SEARCH BAR =====================
    const searchInput = document.getElementById("searchInput");
    const searchSuggest = document.getElementById("searchSuggest");

    if (searchInput && searchSuggest) {

        // GÕ → GỢI Ý
        searchInput.addEventListener("input", () => {
            const keyword = searchInput.value.trim().toLowerCase();
            searchSuggest.innerHTML = "";

            if (keyword === "") {
                searchSuggest.style.display = "none";
                return;
            }

            const results = products.filter(p =>
                p.name.toLowerCase().includes(keyword) ||
                p.description.toLowerCase().includes(keyword)
            );

            if (results.length === 0) {
                searchSuggest.innerHTML =
                    `<div class="no-result">Không tìm thấy sản phẩm</div>`;
            } else {
                results.slice(0, 5).forEach(p => {
                    const item = document.createElement("div");
                    item.textContent = p.name;

                    item.addEventListener("click", () => {
                        window.location.href =
                            `../sanpham/contentDetails.html?id=${p.id}`;
                    });

                    searchSuggest.appendChild(item);
                });
            }

            searchSuggest.style.display = "block";
        });

        // ENTER → TÌM
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const keyword = searchInput.value.trim().toLowerCase();
                if (!keyword) return;

                const match = products.find(p =>
                    p.name.toLowerCase().includes(keyword) ||
                    p.description.toLowerCase().includes(keyword)
                );

                if (match) {
                    window.location.href =
                        `../sanpham/contentDetails.html?id=${match.id}`;
                } else {
                    alert("Không tìm thấy sản phẩm!");
                }
            }
        });

        // CLICK NGOÀI → ẨN GỢI Ý
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".search-bar")) {
                searchSuggest.style.display = "none";
            }
        });
    }

    // ===================== HEART =====================
    if (heartIcon) {
        heartIcon.addEventListener("click", () => {
            heartIcon.classList.toggle("far");
            heartIcon.classList.toggle("fas");
        });
    }

    // ===================== MENU MOBILE =====================
    // Bật/tắt menu mobile
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });

        // Chỉ mobile: click vào dropdown parent để bật/tắt menu con
        const dropdownItems = document.querySelectorAll(".nav-item.dropdown > a");
        dropdownItems.forEach(item => {
            item.addEventListener("click", (e) => {
                if (window.innerWidth < 1024) {
                    e.preventDefault(); // ngăn link chuyển trang
                    const parent = item.parentElement;

                    // Ẩn dropdown khác khi mở dropdown này
                    document.querySelectorAll(".nav-item.dropdown").forEach(drop => {
                        if (drop !== parent) {
                            drop.classList.remove("active");
                        }
                    });

                    parent.classList.toggle("active"); // bật/tắt dropdown hiện tại
                }
            });
        });

        // Click ngoài menu để đóng tất cả dropdown
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".nav-links") && !e.target.closest(".menu-toggle")) {
                navLinks.classList.remove("show");
                document.querySelectorAll(".nav-item.dropdown").forEach(drop => {
                    drop.classList.remove("active");
                });
            }
        });
    }


// ===================== HIDE HEADER WHEN SCROLL =====================
if (headerEl) {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY && window.scrollY > 150) {
            headerEl.classList.add("header-hidden");
        } else {
            headerEl.classList.remove("header-hidden");
        }
        lastScrollY = window.scrollY;
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
