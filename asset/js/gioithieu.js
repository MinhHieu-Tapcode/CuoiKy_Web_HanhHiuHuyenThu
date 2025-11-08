
gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('.precise-overlay-container').forEach(container => {
    const contentBox = container.querySelector('.content-box-fixed');
    
    gsap.from(contentBox, {
        opacity: 0,
        y: 50, // Bắt đầu từ 50px bên dưới vị trí cuối cùng
        scale: 0.95, // Hơi thu nhỏ
        duration: 0.8,
        
        scrollTrigger: {
            trigger: container, // Toàn bộ container kích hoạt
            start: "top 85%",   // Bắt đầu khi container chạm 85% từ đỉnh viewport
            toggleActions: "play none none reverse", // Chạy khi cuộn xuống, đảo ngược khi cuộn lên
        }
    });
    
    gsap.to(container, {
        scale: 0.98, 
        y: -30,      
        
        scrollTrigger: {
            trigger: container,
            start: "top bottom",    
            end: "bottom top",      
            scrub: 1,               
        }
    });
});

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

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('bride-carousel');

    
    if (!slider) return;

    let isDown = false; 
    let startX; 
    let scrollLeft; 

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active-dragging'); 
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    
    slider.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active-dragging');
        }
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
       
        slider.classList.remove('active-dragging');
    });

    
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Chỉ chạy khi chuột đang được giữ
        e.preventDefault(); // Ngăn chặn hành vi mặc định (ví dụ: chọn văn bản)
        
       
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; 
    
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        isDown = true;
        startX = touch.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const touch = e.touches[0];
        const x = touch.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });
});
  const tabs = document.querySelectorAll('.tab-link');
  const forms = document.querySelectorAll('.contact-form');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      
      tabs.forEach(t => t.classList.remove('active'));

      k
      tab.classList.add('active');

      forms.forEach(form => {
        form.classList.remove('active-form');
        form.style.display = 'none';
        form.style.opacity = 0;
      });

      const targetId = tab.getAttribute('data-target');
      const targetForm = document.getElementById(targetId);

      targetForm.style.display = 'block';
      setTimeout(() => targetForm.style.opacity = 1, 10);
      targetForm.classList.add('active-form');
    });
  });
 document.addEventListener('DOMContentLoaded', function() {
    const hiddenClass = 'is-hidden';
    const slideUpClass = 'slide-up'; 
    const visibleClass = 'is-visible'; 

    const elementsToAnimate = document.querySelectorAll(
        '.grid-item, .center-content-section h2, .center-content-section p, .center-content-section a, ' +
        '.precise-overlay-container h2, .precise-overlay-container img, .non-overlay-content-box p, .non-overlay-content-box a, ' +
        '.contact-form-section h2, .form-wrapper'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add(slideUpClass);
    });

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(visibleClass); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            
            document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.contact-form').forEach(f => {
                f.classList.remove('active-form');
                f.classList.add('hidden-form');
            });

            this.classList.add('active');
            const targetForm = document.getElementById(targetId);
            if (targetForm) {
                targetForm.classList.add('active-form');
                targetForm.classList.remove('hidden-form');
            }
        });
    });

    const firstTabLink = document.querySelector('.tab-link:first-child');
    const firstTabForm = document.querySelector('.contact-form:first-of-type');
    if (firstTabLink) firstTabLink.classList.add('active');
    if (firstTabForm) {
         firstTabForm.classList.add('active-form');
         firstTabForm.classList.remove('hidden-form');
    }
}); 
