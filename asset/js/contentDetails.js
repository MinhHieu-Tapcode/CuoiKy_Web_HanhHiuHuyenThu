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
        <h4>${p.brand}</h4>

        <h3>Giá: ${p.price.toLocaleString()}₫</h3>
        <h3 id="totalPrice">Tổng tiền: ${p.price.toLocaleString()}₫</h3>

        <h3>Mô tả sản phẩm</h3>
        <p>${p.description}</p>

        <label>Màu sắc:</label>
        <select id="colorSelect">
          ${p.colors.map(color => `<option value="${color}">${color}</option>`).join("")}
        </select>

        <label>Kích cỡ:</label>
        <select id="sizeSelect">
          ${p.sizes.map(size => `<option value="${size}">${size}</option>`).join("")}
        </select>

        <label>Lựa chọn:</label>
        <select id="optionSelect">
          ${p.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
        </select>

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

  qtyInput.addEventListener("input", function() {
    const qty = parseInt(this.value) || 1;
    const total = p.price * qty;
    totalPrice.textContent = "Tổng tiền: " + total.toLocaleString() + "₫";
  });

  // ================================
  // Nút thêm vào giỏ hàng
  // ================================
  document.getElementById("addCartBtn").addEventListener("click", () => addToCart(p));
}

// ================================
// Hàm thêm vào giỏ hàng
// ================================
function addToCart(p) {
  const color = document.getElementById("colorSelect").value;
  const size = document.getElementById("sizeSelect").value;
  const option = document.getElementById("optionSelect").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = p.price * quantity;

  alert(`${p.name} đã được thêm vào giỏ hàng!
Màu: ${color}
Kích cỡ: ${size}
Lựa chọn: ${option}
Số lượng: ${quantity}
👉 Tổng tiền: ${total.toLocaleString()}₫`);
}
