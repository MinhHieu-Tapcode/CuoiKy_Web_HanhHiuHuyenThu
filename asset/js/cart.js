// ================================
// pages/js/cart.js
// ================================

// Lấy dữ liệu giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Chọn phần tử chứa giỏ hàng
const cartContainer = document.getElementById("cartContainer");
const totalItem = document.getElementById("totalItem");

// Nếu giỏ hàng trống
if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống!</p>";
  totalItem.textContent = "Total Items: 0";
} else {
  // Hiển thị sản phẩm
  renderCart();
}

// ================================
// Hàm hiển thị sản phẩm trong giỏ hàng
// ================================
function renderCart() {
  cartContainer.innerHTML = ""; // Xóa nội dung cũ

  let totalCount = 0;

  cart.forEach((item, index) => {
    totalCount += item.quantity;

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
        <p>Tổng: ${item.total.toLocaleString()}₫</p>
        <button onclick="removeItem(${index})">Xóa</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  totalItem.textContent = `Total Items: ${totalCount}`;
}

// ================================
// Hàm xóa sản phẩm khỏi giỏ hàng
// ================================
function removeItem(index) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}
