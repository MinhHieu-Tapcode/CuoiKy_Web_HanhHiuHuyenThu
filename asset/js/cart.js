// === KHỞI TẠO EMAILJS ===
emailjs.init("jyEtAUcgjqpxB9Mar"); // 🔑 Dùng PUBLIC_KEY của bạn
// ================================
// pages/js/cart.js
// ================================

// Lấy dữ liệu giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Lấy các phần tử DOM
const boxContainer = document.getElementById("boxContainer");
const totalItem = document.getElementById("totalItem");
const totalAmount = document.getElementById("totalAmount");
const checkoutBtn = document.getElementById("checkoutBtn");

// Kiểm tra giỏ hàng trống
if (cart.length === 0) {
  boxContainer.innerHTML = "<p>🛒 Giỏ hàng của bạn đang trống!</p>";
  totalItem.textContent = "Sản phẩm: 0";
  totalAmount.textContent = "Tổng tiền: 0₫";
  checkoutBtn.style.display = "none";
} else {
  renderCart();
}

// ================================
// Hàm hiển thị sản phẩm trong giỏ hàng
// ================================
function renderCart() {
  boxContainer.innerHTML = ""; // chỉ xóa phần danh sách sản phẩm

  let totalCount = 0;
  let grandTotal = 0;

  cart.forEach((item, index) => {
    totalCount += item.quantity;
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.preview}" alt="${item.name}" class="cart-img">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>Màu: ${item.color}</p>
        <p>Kích cỡ: ${item.size}</p>
        <p>Lựa chọn: ${item.option}</p>
        <p>Giá: ${item.price.toLocaleString()}₫</p>
        <p>Số lượng: ${item.quantity}</p>
        <p>Tổng: ${itemTotal.toLocaleString()}₫</p>
        <button onclick="removeItem(${index})">Xóa</button>
      </div>
    `;

    boxContainer.appendChild(div);
  });

  totalItem.textContent = `Sản phẩm: ${totalCount}`;
  totalAmount.textContent = `Tổng tiền: ${grandTotal.toLocaleString()}₫`;
  checkoutBtn.style.display = "inline-block";
}

// ================================
// Xóa sản phẩm
// ================================
function removeItem(index) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

// ================================
// Thanh toán - reset giỏ hàng
// ================================
checkoutBtn.addEventListener("click", async () => {
  if (cart.length === 0) return alert("Giỏ hàng trống!");

  const confirmCheckout = confirm("Xác nhận thanh toán và gửi hóa đơn về email của bạn?");
  if (!confirmCheckout) return;

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.email) {
    alert("Bạn cần đăng nhập để thanh toán!");
    return;
  }

  // 🧾 Chuẩn bị nội dung hóa đơn
  let itemsList = cart.map(
    (item) =>
      `- ${item.name} (${item.color}, ${item.size}) x${item.quantity}: ${item.price.toLocaleString()}₫`
  ).join("\n");

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const emailData = {
    from_name: user.name || "Khách hàng",
    to_email: user.email,
    message: `Cảm ơn bạn đã mua hàng tại cửa hàng chúng tôi!\n\nDanh sách sản phẩm:\n${itemsList}\n\nTổng cộng: ${total.toLocaleString()}₫\n\nChúng tôi sẽ liên hệ để xác nhận sớm nhất!`,
  };

  try {
    // Gửi email qua EmailJS
    await emailjs.send("service_agcqc5a", "template_hrgoacw", emailData);
    alert("✅ Đã gửi hóa đơn qua email và thanh toán thành công!");

    // Reset giỏ hàng
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
  } catch (err) {
    alert("❌ Lỗi khi gửi email: " + err.text);
  }
});
