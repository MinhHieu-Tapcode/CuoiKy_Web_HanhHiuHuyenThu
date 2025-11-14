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
              ${p.photos
                .map(
                  (photo) =>
                    `<img src="${photo}" onclick="document.getElementById('imgDetails').src='${photo}'">`
                )
                .join("")}
            </div>
        </div>
      <div id="productDetails">
        <h1>${p.name}</h1>

        <h3>Giá: ${p.price.toLocaleString()}₫</h3>
        <h3 id="totalPrice">Tổng tiền: ${p.price.toLocaleString()}₫</h3>

        <h3>Mô tả sản phẩm</h3>
        <p>${p.description}</p>

        <h3>Chi tiết:</h3>
        <ul id="detailList" style="list-style:none; padding-left:0;">
          ${p.details
      ? Object.entries(p.details)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join("")
      : "<li>Đang cập nhật...</li>"}
        </ul>

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
// Hiệu ứng chuyển ảnh (auto và click preview)
// ================================
let currentIndex = 0;
const imgElement = document.getElementById("imgDetails");
const previews = document.querySelectorAll("#productPreview img");

// Hàm hiển thị ảnh theo index
function showImage(index) {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = p.photos[index];
    imgElement.style.opacity = 1;
  }, 200);

  previews.forEach(pre => pre.style.border = "2px solid #ddd");
  previews[index].style.border = "2px solid #000";
  currentIndex = index;
}

// Click ảnh nhỏ để đổi
previews.forEach((preview, index) => {
  preview.addEventListener("click", () => showImage(index));
});

// Tự động chuyển ảnh mỗi 8 giây
setInterval(() => {
  currentIndex = (currentIndex + 1) % p.photos.length;
  showImage(currentIndex);
}, 8000);

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
        if (btn.classList.contains('selected')) {
          btn.classList.remove('selected');
        } else {
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

  if (!color || !size || !option) {
    alert("Vui lòng chọn đủ Màu sắc, Kích cỡ và Lựa chọn trước khi thêm vào giỏ hàng!");
    return;
  }
  if (quantity < 1) {
    alert("Số lượng phải lớn hơn hoặc bằng 1!");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = cart.find(item =>
    item.id === p.id && item.color === color && item.size === size && item.option === option
  );

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.total = existingItem.quantity * p.price;
    alert(`${p.name} đã được cập nhật trong giỏ hàng!\nSố lượng mới: ${existingItem.quantity}\n👉 Tổng tiền: ${existingItem.total.toLocaleString()}₫`);
  } else {
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
    alert(`${p.name} đã được thêm vào giỏ hàng!\nMàu: ${color}\nKích cỡ: ${size}\nLựa chọn: ${option}\nSố lượng: ${quantity}\n👉 Tổng tiền: ${(p.price * quantity).toLocaleString()}₫`);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("quantity").value = 1;
  ['colorSelect', 'sizeSelect', 'optionSelect'].forEach(id => {
    document.querySelectorAll(`#${id} .option-btn`).forEach(btn => btn.classList.remove('selected'));
  });

  document.getElementById("totalPrice").textContent = "Tổng tiền: " + p.price.toLocaleString() + "₫";
}
