// sanpham/data.js
// Chứa dữ liệu sản phẩm (được dùng khi không fetch)
const products = [
  {
    "id": "1",
    "name": "ELOWEN",
    "brand": "Fleur Collection",
    "price": 4590000,
    "description": "Váy voan phối satin bồng xoè, tạo cảm giác nhẹ nhàng và tinh tế, thích hợp cho tiệc tối hoặc lễ cưới.",
    "preview": "../asset/img/image/sp1/elowen.png",
    "photos": [
      "../asset/img/image/sp1/elowen.png",
      "../asset/img/image/sp1/elowen1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S","M","L","XL","XXL"],
    "options": ["Kèm tùng váy","Không kèm tùng váy"]
  },
  {
    "id": "2",
    "name": "AMELIA",
    "brand": "Fleur Collection",
    "price": 4890000,
    "description": "Váy satin bóng dáng bồng bềnh, mang lại nét sang trọng và cổ điển.",
    "preview": "../asset/img/image/sp1/amelia.png",
    "photos": [
      "../asset/img/image/sp1/amelia.png",
      "../asset/img/image/sp1/amelia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S","M","L","XL","XXL"],
    "options": ["Kèm tùng váy","Không kèm tùng váy"]
  },
  {
    "id": "3",
    "name": "CARILO",
    "brand": "Fleur Collection",
    "price": 4990000,
    "description": "Váy cưới cổ yếm thanh lịch, điểm nhấn nhẹ nhàng giúp tôn dáng.",
    "preview": "../asset/img/image/sp1/carilo.png",
    "photos": [
      "../asset/img/image/sp1/carilo.png",
      "../asset/img/image/sp1/carilo1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S","M","L","XL","XXL"],
    "options": ["1 lựa chọn"]
  }
];

// (Không cần export gì; file này tạo biến global `products`)
