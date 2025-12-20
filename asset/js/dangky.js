const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const signUpForm = document.getElementById('signup-form');
const signInForm = document.getElementById('signin-form');
const forgotLink = document.getElementById('forgot-password');

const signupPassword = document.getElementById('signup-password');
const strengthText = document.getElementById('password-strength-text');

// Tạo phần tử hiển thị tiêu chí mật khẩu
const criteriaContainer = document.createElement('div');
criteriaContainer.style.marginTop = '5px';
const criteriaLength = document.createElement('p');
criteriaLength.style.color = 'red';
criteriaLength.style.margin = '2px 0';
criteriaLength.textContent = '• Ít nhất 6 ký tự';
const criteriaSpecial = document.createElement('p');
criteriaSpecial.style.color = 'red';
criteriaSpecial.style.margin = '2px 0';
criteriaSpecial.textContent = '• Có ít nhất 1 ký tự đặc biệt';
criteriaContainer.appendChild(criteriaLength);
criteriaContainer.appendChild(criteriaSpecial);
signupPassword.insertAdjacentElement('afterend', criteriaContainer);

// --- Toggle form ---
registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));

// --- Kiểm tra mật khẩu theo tiêu chí ---
signupPassword.addEventListener('input', () => {
    const password = signupPassword.value;

    const hasLength = password.length >= 6;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    criteriaLength.style.color = hasLength ? "green" : "red";
    criteriaSpecial.style.color = hasSpecial ? "green" : "red";

    if (!hasLength || !hasSpecial) {
        strengthText.textContent = "Mật khẩu chưa đáp ứng đủ yêu cầu";
        strengthText.style.color = "red";
    } else {
        strengthText.textContent = "Mật khẩu hợp lệ";
        strengthText.style.color = "green";
    }
});

// --- Tạo / Chỉnh sửa tài khoản ---
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = signupPassword.value.trim();

    const hasLength = password.length >= 6;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!name || !email || !password) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    if (!hasLength || !hasSpecial) {
        alert("Mật khẩu chưa đáp ứng đủ yêu cầu!");
        return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Tài khoản đã được tạo / cập nhật thành công!');
    signUpForm.reset();
    container.classList.remove("active");

    // Reset tiêu chí mật khẩu
    criteriaLength.style.color = 'red';
    criteriaSpecial.style.color = 'red';
    strengthText.textContent = '';
});

// --- Đăng nhập ---
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value.trim();

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        alert('Chưa có tài khoản, hãy tạo tài khoản!');
        container.classList.add("active");
        return;
    }

    if (email === user.email && password === user.password) {
        window.location.href = 'Trangchu.html';
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});

// --- Quên mật khẩu ---
forgotLink.addEventListener('click', (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    container.classList.add("active");

    if (!user) {
        alert("Chưa có tài khoản, hãy tạo tài khoản trước!");
        document.getElementById('signup-name').value = "";
        document.getElementById('signup-email').value = "";
        signupPassword.value = "";
    } else {
        document.getElementById('signup-name').value = user.name;
        document.getElementById('signup-email').value = user.email;
        signupPassword.value = "";
        document.getElementById('signup-title').textContent = "Chỉnh sửa tài khoản";
        alert("Nhập mật khẩu mới để cập nhật tài khoản!");
    }

    // Reset tiêu chí mật khẩu khi mở form
    criteriaLength.style.color = 'red';
    criteriaSpecial.style.color = 'red';
    strengthText.textContent = '';
});
