// ================================
// pages/js/contentDetails.js
// ================================

// Lấy ID sản phẩm từ URL (VD: contentDetails.html?1)
const id = location.search.split("?")[1] || "1"; // mặc định "1" nếu không có query

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
          ${p.photos.map(photo => `
            <img src="${photo}" onclick="document.getElementById('imgDetails').src='${photo}'">
          `).join("")}
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
    const total = p.price * qty;
    totalPrice.textContent = "Tổng tiền: " + total.toLocaleString() + "₫";
  });

  // ================================
  // Thiết lập button chọn 1 giá trị
  // ================================
  function setupOptionButtons(containerId) {
    const container = document.getElementById(containerId);
    const buttons = container.querySelectorAll('.option-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('selected')) {
          // Click lần 2 → hủy chọn
          btn.classList.remove('selected');
        } else {
          // Click lần 1 → chọn nút này, bỏ chọn nút khác
          buttons.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        }
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

  // Tính tổng tiền
  const total = p.price * quantity;

  // Lưu vào giỏ hàng trong localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    id: p.id,
    name: p.name,
    color,
    size,
    option,
    quantity,
    total
  });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${p.name} đã được thêm vào giỏ hàng!
Màu: ${color}
Kích cỡ: ${size}
Lựa chọn: ${option}
Số lượng: ${quantity}
👉 Tổng tiền: ${total.toLocaleString()}₫`);

  // Reset giao diện chọn
  document.getElementById("quantity").value = 1;
  ['colorSelect', 'sizeSelect', 'optionSelect'].forEach(id => {
    const buttons = document.querySelectorAll(`#${id} .option-btn`);
    buttons.forEach(btn => btn.classList.remove('selected'));
  });

  // Cập nhật lại tổng tiền hiển thị
  document.getElementById("totalPrice").textContent = "Tổng tiền: " + p.price.toLocaleString() + "₫";
}
