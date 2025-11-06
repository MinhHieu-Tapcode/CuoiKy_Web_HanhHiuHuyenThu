/**Tạo hiệu ứng chạy chữ cho những class có [data-animate] khi cuộn đến nó */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

/**tạo hiệu ứng để scroll ngang cho instagram bằng arrow */
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".insta-feed");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  // Độ cuộn mỗi lần nhấn
  const scrollAmount = 200;

  rightArrow.addEventListener("click", () => {
    wrapper.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  leftArrow.addEventListener("click", () => {
    wrapper.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });
});

/**tạo hiệu ứng scroll ngang cho blog bằng slider-progess */
const container = document.querySelector('.blog-items');
const progressBar = document.querySelector('.slider-progress');
container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft;
  const maxScroll = container.scrollWidth - container.clientWidth;
  const scrollPercent = (scrollLeft / maxScroll) * 100;
  progressBar.style.transform = `translateX(${scrollPercent}%)`;
});

/** Tạo form theo 3 form */
// Lấy tất cả các tab và form
  const tabs = document.querySelectorAll('.tab-link');
  const forms = document.querySelectorAll('.contact-form');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      // Xoá class active trên tất cả tab
      tabs.forEach(t => t.classList.remove('active'));

      // Thêm class active cho tab được click
      tab.classList.add('active');

      // Ẩn tất cả form
      forms.forEach(form => {
        form.classList.remove('active-form');
        form.style.display = 'none';
        form.style.opacity = 0;
      });

      // Lấy ID của form tương ứng với tab
      const targetId = tab.getAttribute('data-target');
      const targetForm = document.getElementById(targetId);

      // Hiển thị form tương ứng
      targetForm.style.display = 'block';
      setTimeout(() => targetForm.style.opacity = 1, 10);
      targetForm.classList.add('active-form');
    });
  });