// ===================== DOM =====================
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const signUpForm = document.getElementById('signup-form');
const signInForm = document.getElementById('signin-form');
const forgotLink = document.getElementById('forgot-password');

const signupName = document.getElementById('signup-name');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupConfirmPassword = document.getElementById('signup-confirm-password');

const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');

const strengthText = document.getElementById('password-strength-text');
const signupTitle = document.getElementById('signup-title');

// ===================== PASSWORD CRITERIA =====================
const criteriaContainer = document.createElement('div');
criteriaContainer.style.marginTop = '5px';

const criteriaLength = document.createElement('p');
criteriaLength.textContent = '• Ít nhất 6 ký tự';
criteriaLength.style.color = 'red';
criteriaLength.style.margin = '2px 0';

const criteriaSpecial = document.createElement('p');
criteriaSpecial.textContent = '• Có ít nhất 1 ký tự đặc biệt';
criteriaSpecial.style.color = 'red';
criteriaSpecial.style.margin = '2px 0';

criteriaContainer.appendChild(criteriaLength);
criteriaContainer.appendChild(criteriaSpecial);
signupPassword.insertAdjacentElement('afterend', criteriaContainer);

// ===================== TOGGLE FORM =====================
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// ===================== PASSWORD VALIDATION =====================
function checkPasswordStrength(password) {
    const hasLength = password.length >= 6;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    criteriaLength.style.color = hasLength ? 'green' : 'red';
    criteriaSpecial.style.color = hasSpecial ? 'green' : 'red';

    return hasLength && hasSpecial;
}

signupPassword.addEventListener('input', () => {
    const password = signupPassword.value;

    if (!password) {
        strengthText.textContent = '';
        return;
    }

    if (checkPasswordStrength(password)) {
        strengthText.textContent = 'Mật khẩu hợp lệ';
        strengthText.style.color = 'green';
    } else {
        strengthText.textContent = 'Mật khẩu chưa đáp ứng đủ yêu cầu';
        strengthText.style.color = 'red';
    }
});

// ===================== CONFIRM PASSWORD =====================
signupConfirmPassword.addEventListener('input', () => {
    if (!signupConfirmPassword.value) return;

    if (signupConfirmPassword.value !== signupPassword.value) {
        strengthText.textContent = 'Mật khẩu nhập lại không khớp';
        strengthText.style.color = 'red';
    } else {
        strengthText.textContent = 'Mật khẩu trùng khớp';
        strengthText.style.color = 'green';
    }
});

// ===================== SIGN UP / UPDATE ACCOUNT =====================
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = signupName.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();
    const confirmPassword = signupConfirmPassword.value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    if (!checkPasswordStrength(password)) {
        alert('Mật khẩu chưa đáp ứng đủ yêu cầu!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu nhập lại không khớp!');
        return;
    }

    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Tài khoản đã được tạo / cập nhật thành công!');

    signUpForm.reset();
    signupConfirmPassword.value = '';
    strengthText.textContent = '';
    signupTitle.textContent = 'Tạo Tài Khoản';

    criteriaLength.style.color = 'red';
    criteriaSpecial.style.color = 'red';

    container.classList.remove('active');
});

// ===================== SIGN IN =====================
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signinEmail.value.trim();
    const password = signinPassword.value.trim();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        alert('Chưa có tài khoản, vui lòng đăng ký!');
        container.classList.add('active');
        return;
    }

    if (email === user.email && password === user.password) {
        window.location.href = 'Trangchu.html';
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});

// ===================== FORGOT PASSWORD =====================
forgotLink.addEventListener('click', (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    container.classList.add('active');

    signupPassword.value = '';
    signupConfirmPassword.value = '';
    strengthText.textContent = '';

    criteriaLength.style.color = 'red';
    criteriaSpecial.style.color = 'red';

    if (!user) {
        alert('Chưa có tài khoản, hãy tạo tài khoản mới!');
        signupName.value = '';
        signupEmail.value = '';
        signupTitle.textContent = 'Tạo Tài Khoản';
    } else {
        signupName.value = user.name;
        signupEmail.value = user.email;
        signupTitle.textContent = 'Chỉnh sửa tài khoản';
        alert('Vui lòng nhập mật khẩu mới!');
    }
});
