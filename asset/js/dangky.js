const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const signUpForm = document.getElementById('signup-form');
const signInForm = document.getElementById('signin-form');
const forgotLink = document.getElementById('forgot-password');

const signupPassword = document.getElementById('signup-password');
const strengthText = document.getElementById('password-strength-text');

// Toggle form
registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));

// --- Tạo / Chỉnh sửa tài khoản ---
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (!name || !email || !password) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Tài khoản đã được tạo / cập nhật thành công!');
    signUpForm.reset();
    container.classList.remove("active"); // quay về đăng nhập
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
        // Đăng nhập thành công => chuyển trang
        window.location.href = 'Trangchu.html';
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});

// --- Quên mật khẩu ---
forgotLink.addEventListener('click', (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    container.classList.add("active"); // chuyển sang form tạo/cập nhật

    if (!user) {
        alert("Chưa có tài khoản, hãy tạo tài khoản trước!");
        document.getElementById('signup-name').value = "";
        document.getElementById('signup-email').value = "";
        document.getElementById('signup-password').value = "";
    } else {
        document.getElementById('signup-name').value = user.name;
        document.getElementById('signup-email').value = user.email;
        document.getElementById('signup-password').value = ""; // nhập mật khẩu mới
        document.getElementById('signup-title').textContent = "Chỉnh sửa tài khoản";
        alert("Nhập mật khẩu mới để cập nhật tài khoản!");
    }
});

 //  kiểm tra độ mạnh mật khẩu
signupPassword.addEventListener('input', () => {
    const password = signupPassword.value;

    // Nếu chưa nhập gì thì không hiển thị thông báo
    if (password.length === 0) {
        strengthText.textContent = "";
        return;
    }

    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);

    if (password.length < 6) {
        strengthText.textContent = "Mật khẩu yếu";
        strengthText.style.color = "red";
    } else if (hasNumber && hasLetter) {
        strengthText.textContent = "Mật khẩu mạnh";
        strengthText.style.color = "green";
    } else {
        strengthText.textContent = "Mật khẩu trung bình";
        strengthText.style.color = "orange";
    }
});