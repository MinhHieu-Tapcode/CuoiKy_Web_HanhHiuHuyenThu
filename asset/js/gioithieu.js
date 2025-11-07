// BẮT BUỘC: Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Lặp qua TẤT CẢ các khối nội dung chính (.precise-overlay-container)
document.querySelectorAll('.precise-overlay-container').forEach(container => {
    
    // HIỆU ỨNG 1: Khối nội dung xuất hiện (Fade & Slide In)
    // Tìm hộp nội dung cụ thể (content-box-fixed) trong khối hiện tại
    const contentBox = container.querySelector('.content-box-fixed');
    
    // Thiết lập trạng thái ban đầu của hộp nội dung
    gsap.from(contentBox, {
        opacity: 0,
        y: 50, // Bắt đầu từ 50px bên dưới vị trí cuối cùng
        scale: 0.95, // Hơi thu nhỏ
        duration: 0.8,
        
        // Cấu hình kích hoạt cuộn
        scrollTrigger: {
            trigger: container, // Toàn bộ container kích hoạt
            start: "top 85%",   // Bắt đầu khi container chạm 85% từ đỉnh viewport
            toggleActions: "play none none reverse", // Chạy khi cuộn xuống, đảo ngược khi cuộn lên
        }
    });
    
    // HIỆU ỨNG 2: Hiệu ứng Parallax (Scale & Dịch chuyển nhẹ) cho toàn bộ khối 
    // Áp dụng GSAP 'to' (hoạt ảnh chạy trong lúc cuộn) lên toàn bộ container
    gsap.to(container, {
        scale: 0.98, // Thu nhỏ nhẹ 2%
        y: -30,      // Dịch chuyển lên 30px (tạo hiệu ứng parallax)
        
        scrollTrigger: {
            trigger: container,
            start: "top bottom",    // Bắt đầu khi khối xuất hiện
            end: "bottom top",      // Kết thúc khi khối biến mất
            scrub: 1,               // Bắt buộc. Liên kết hoạt ảnh với thao tác cuộn (giá trị càng lớn càng mượt)
            // markers: true, // Chỉ sử dụng khi gỡ lỗi
        }
    });
});
// HIỆU ỨNG 3: Fade In cho khối Logo/Text cuối trang

// Áp dụng hiệu ứng xuất hiện cho khối center-content-section
gsap.from(".center-content-section", {
    opacity: 0,
    y: 70, 
    duration: 1,
    scrollTrigger: {
        trigger: ".center-content-section",
        start: "top 90%",
        toggleActions: "play none none reverse",
    }
});
// Lắng nghe sự kiện khi toàn bộ nội dung HTML đã được tải
document.addEventListener('DOMContentLoaded', () => {
    // Lấy phần tử carousel bằng ID
    const slider = document.getElementById('bride-carousel');

    // Kiểm tra nếu phần tử không tồn tại thì thoát
    if (!slider) return;

    let isDown = false; // Biến cờ kiểm tra chuột có đang được giữ không
    let startX; // Tọa độ X ban đầu khi bấm chuột
    let scrollLeft; // Vị trí cuộn ngang ban đầu của carousel

    // 1. MOUSE DOWN: Bắt đầu kéo
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        // Thêm class để thay đổi con trỏ chuột thành "grabbing"
        slider.classList.add('active-dragging'); 
        
        // Lấy tọa độ chuột trừ đi khoảng cách từ phần tử đến lề trái viewport
        // (Đây là vị trí tương đối của chuột bên trong phần tử)
        startX = e.pageX - slider.offsetLeft;
        
        // Ghi lại vị trí cuộn hiện tại
        scrollLeft = slider.scrollLeft;
    });
    
    // Ngăn chặn cuộn khi chuột rời khỏi phần tử
    slider.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active-dragging');
        }
    });

    // 2. MOUSE UP: Kết thúc kéo
    slider.addEventListener('mouseup', () => {
        isDown = false;
        // Xóa class để khôi phục con trỏ chuột thành "grab"
        slider.classList.remove('active-dragging');
    });

    // 3. MOUSE MOVE: Thực hiện cuộn
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Chỉ chạy khi chuột đang được giữ
        
        e.preventDefault(); // Ngăn chặn hành vi mặc định (ví dụ: chọn văn bản)
        
        // Lấy tọa độ X hiện tại
        const x = e.pageX - slider.offsetLeft;
        
        // Tính toán khoảng cách di chuyển (walk)
        // Nhân với 1.5 để cuộn nhanh hơn (tùy chọn)
        const walk = (x - startX) * 1.5; 
        
        // Cập nhật vị trí cuộn ngang
        // (scrollLeft - walk) để cuộn theo hướng ngược lại với chuyển động chuột
        slider.scrollLeft = scrollLeft - walk;
    });

    // Bổ sung hỗ trợ cảm ứng cho thiết bị di động (Touch Events)
    slider.addEventListener('touchstart', (e) => {
        // Sử dụng touch đầu tiên
        const touch = e.touches[0];
        isDown = true;
        startX = touch.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        // e.preventDefault(); // Comment out để cho phép cuộn trang
        const touch = e.touches[0];
        const x = touch.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });
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