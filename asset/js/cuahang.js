       const style = document.createElement('style');
    style.innerHTML = `
        /* Lớp CSS cho trạng thái ban đầu (ẩn) */
        .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            /* Thời gian chuyển động (transition-duration) */
            transition: opacity 0.8s ease-out, transform 0.8s ease-out; 
        }
        /* Lớp CSS cho trạng thái hiện (khi cuộn vào viewport) */
        .reveal-element.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    const selectors = [
        '.tieu-de-chinh', 
        '.page-breadcrumbs',
        '.content-box-fixed',
        '.khung-chi-nhanh' 
    ];

    const elementsToObserve = [
        ...document.querySelectorAll(selectors.join(', '))
    ].filter(element => element.closest('main'));

    const delayStep = 0.1; // Bước trễ: 0.1 giây
    let branchCount = 0;

    elementsToObserve.forEach(element => {
        element.classList.add('reveal-element');
        let delay = 0;
        if (element.classList.contains('khung-chi-nhanh')) {
            delay = 0.2 + (branchCount * delayStep);
            branchCount++;
        } else {
            const index = ['tieu-de-chinh', 'page-breadcrumbs'].findIndex(cls => element.classList.contains(cls));
            if (index !== -1) {
                delay = index * 0.1; 
            } else if (element.classList.contains('content-box-fixed')) {
                const allBoxes = Array.from(document.querySelectorAll('.content-box-fixed'));
                const boxIndex = allBoxes.indexOf(element);
                delay = 0.2 + (boxIndex * 0.15); // Trễ 0.2s và tăng 0.15s
            }
        }
        
        element.style.transitionDelay = `${delay}s`;
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -15% 0px', 
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Thêm lớp 'is-visible' để kích hoạt hiệu ứng
                entry.target.classList.add('is-visible');
                // Ngừng quan sát
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
