// ================================
// pages/js/contentDetails.js
// ================================

// Lấy ID sản phẩm từ URL (VD: contentDetails.html?id=1)
const params = new URLSearchParams(location.search);
const id = params.get("id") || "1"; // mặc định "1" nếu không có query

// Kiểm tra xem biến products đã được nạp từ data.js chưa
const product = (typeof products !== "undefined") ? products.find(p => p.id === id) : null;

if (product) {
  renderProduct(product);
} else {
  document.getElementById("containerProduct").innerHTML =
    "<p style='color:red;text-align:center;'>Không tìm thấy sản phẩm!</p>";
}

// ================================
// Hàm render chi tiết sản phẩm
// ================================
function renderProduct(p) {
  const container = document.getElementById("containerProduct");

  container.innerHTML = `
    <div id="containerD">
      <div id="imageSection">
        <img id="imgDetails" src="${p.preview}" alt="${p.name}">
        <div id="productPreview">
          ${p.photos.map(photo => `<img src="${photo}" onclick="document.getElementById('imgDetails').src='${photo}'">`).join("")}
        </div>
      </div>

      <div id="productDetails">
        <h1>${p.name}</h1>

        <h3>Giá: ${p.price.toLocaleString()}₫</h3>
        <h3 id="totalPrice">Tổng tiền: ${p.price.toLocaleString()}₫</h3>

        <h3>Mô tả sản phẩm</h3>
        <p>${p.description}</p>

        <label>Màu sắc:</label>
        <div id="colorSelect" class="option-buttons">
          ${p.colors.map(color => `<button type="button" class="option-btn" data-value="${color}">${color}</button>`).join("")}
        </div>

        <label>Kích cỡ:</label>
        <div id="sizeSelect" class="option-buttons">
          ${p.sizes.map(size => `<button type="button" class="option-btn" data-value="${size}">${size}</button>`).join("")}
        </div>

        <label>Lựa chọn:</label>
        <div id="optionSelect" class="option-buttons">
          ${p.options.map(opt => `<button type="button" class="option-btn" data-value="${opt}">${opt}</button>`).join("")}
        </div>

        <label>Số lượng:</label>
        <input type="number" id="quantity" value="1" min="1" style="width:60px;margin-left:10px;">

        <button id="addCartBtn">Thêm vào giỏ hàng</button>
      </div>
    </div>
  `;

  // ================================
  // Cập nhật tổng tiền khi thay đổi số lượng
  // ================================
  const qtyInput = document.getElementById("quantity");
  const totalPrice = document.getElementById("totalPrice");

  qtyInput.addEventListener("input", function () {
    const qty = parseInt(this.value) || 1;
    totalPrice.textContent = "Tổng tiền: " + (p.price * qty).toLocaleString() + "₫";
  });

  // ================================
  // Thiết lập button chọn 1 giá trị
  // ================================
  function setupOptionButtons(containerId) {
    const container = document.getElementById(containerId);
    const buttons = container.querySelectorAll('.option-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }

  setupOptionButtons('colorSelect');
  setupOptionButtons('sizeSelect');
  setupOptionButtons('optionSelect');

  // ================================
  // Nút thêm vào giỏ hàng
  // ================================
  document.getElementById("addCartBtn").addEventListener("click", () => addToCart(p));
}

// ================================
// Hàm lấy giá trị button đã chọn
// ================================
function getSelectedValue(containerId) {
  const selected = document.querySelector(`#${containerId} .option-btn.selected`);
  return selected ? selected.dataset.value : '';
}

// ================================
// Hàm thêm vào giỏ hàng
// ================================
function addToCart(p) {
  const color = getSelectedValue('colorSelect');
  const size = getSelectedValue('sizeSelect');
  const option = getSelectedValue('optionSelect');
  let quantity = parseInt(document.getElementById("quantity").value) || 0;

  // Kiểm tra điều kiện
  if (!color || !size || !option) {
    alert("Vui lòng chọn đủ Màu sắc, Kích cỡ và Lựa chọn trước khi thêm vào giỏ hàng!");
    return;
  }
  if (quantity < 1) {
    alert("Số lượng phải lớn hơn hoặc bằng 1!");
    return;
  }

  // Lấy giỏ hàng hiện tại từ localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa (cùng id, color, size, option)
  let existingItem = cart.find(item => 
    item.id === p.id &&
    item.color === color &&
    item.size === size &&
    item.option === option
  );

  if (existingItem) {
    // Cộng dồn số lượng và cập nhật tổng tiền
    existingItem.quantity += quantity;
    existingItem.total = existingItem.quantity * p.price;
    alert(`${p.name} đã được cập nhật trong giỏ hàng!
Số lượng mới: ${existingItem.quantity}
👉 Tổng tiền: ${existingItem.total.toLocaleString()}₫`);
  } else {
    // Thêm mới sản phẩm vào giỏ hàng
    cart.push({
      id: p.id,
      name: p.name,
      preview: p.preview,
      color,
      size,
      option,
      quantity,
      price: p.price,
      total: p.price * quantity
    });
    alert(`${p.name} đã được thêm vào giỏ hàng!
Màu: ${color}
Kích cỡ: ${size}
Lựa chọn: ${option}
Số lượng: ${quantity}
👉 Tổng tiền sản phẩm: ${(p.price * quantity).toLocaleString()}₫`);
  }

  // Lưu lại giỏ hàng
  localStorage.setItem("cart", JSON.stringify(cart));

  // Reset giao diện chọn
  document.getElementById("quantity").value = 1;
  ['colorSelect', 'sizeSelect', 'optionSelect'].forEach(id => {
    const buttons = document.querySelectorAll(`#${id} .option-btn`);
    buttons.forEach(btn => btn.classList.remove('selected'));
  });

  // Cập nhật lại tổng tiền hiển thị
  document.getElementById("totalPrice").textContent = "Tổng tiền: " + p.price.toLocaleString() + "₫";
}