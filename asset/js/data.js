// sanpham/data.js
// Chứa dữ liệu sản phẩm (được dùng khi không fetch)
const products = [
  {
    "id": "1",
    "name": "ELOWEN",
    "price": 4590000,
    "description": "Váy voan phối satin bồng xoè, tạo cảm giác nhẹ nhàng và tinh tế, thích hợp cho tiệc tối hoặc lễ cưới.",
    "preview": "../asset/img/image/sp1/elowen.png",
    "photos": [
      "../asset/img/image/sp1/elowen.png",
      "../asset/img/image/sp1/elowen1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm tùng váy", "Không kèm tùng váy"]
  },
  {
    "id": "2",
    "name": "AMELIA",
    "price": 4890000,
    "description": "Váy satin bóng dáng bồng bềnh, mang lại nét sang trọng và cổ điển.",
    "preview": "../asset/img/image/sp1/amelia.png",
    "photos": [
      "../asset/img/image/sp1/amelia.png",
      "../asset/img/image/sp1/amelia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm tùng váy", "Không kèm tùng váy"]
  },
  {
    "id": "3",
    "name": "CARILO",
    "price": 4990000,
    "description": "Váy cưới cổ yếm thanh lịch, điểm nhấn nhẹ nhàng giúp tôn dáng.",
    "preview": "../asset/img/image/sp1/carilo.png",
    "photos": [
      "../asset/img/image/sp1/carilo.png",
      "../asset/img/image/sp1/carilo1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "4",
    "name": "SOLMELIA",
    "price": 5190000,
    "description": "Váy bồng xoè đính ngọc trai, thanh thoát và lãng mạn, dành cho cô dâu yêu vẻ cổ điển pha hiện đại.",
    "preview": "../asset/img/image/sp1/solmelia.png",
    "photos": [
      "../asset/img/image/sp1/solmelia.png",
      "../asset/img/image/sp1/solmelia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "5",
    "name": "OPHELIA",
    "price": 5290000,
    "description": "Váy ren 3D phối satin bóng, tay dài, sang trọng và quý phái.",
    "preview": "../asset/img/image/sp1/ophelia.png",
    "photos": [
      "../asset/img/image/sp1/ophelia.png",
      "../asset/img/image/sp1/ophelia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "6",
    "name": "ISABELLE",
    "price": 5390000,
    "description": "Váy satin hở lưng kèm nơ, phong cách công chúa Disney, nổi bật và lộng lẫy.",
    "preview": "../asset/img/image/sp1/isabelle.png",
    "photos": [
      "../asset/img/image/sp1/isabelle.png",
      "../asset/img/image/sp1/isabelle1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm tùng váy", "Không kèm tùng váy"]
  },
  {
    "id": "7",
    "name": "GAZE",
    "price": 5490000,
    "description": "Váy cưới hai mảnh dáng dạ hội, corset satin crepe cao cấp, chân váy bồng bềnh.",
    "preview": "../asset/img/image/sp1/gaze.png",
    "photos": [
      "../asset/img/image/sp1/gaze.png",
      "../asset/img/image/sp1/gaze1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có váy ngắn", "Không có váy"]
  },
  {
    "id": "8",
    "name": "GLEAM",
    "price": 5590000,
    "description": "Váy A-line bằng ren ánh kim, đính hạt và kim sa, lấp lánh huyền ảo.",
    "preview": "../asset/img/image/sp1/gleam.png",
    "photos": [
      "../asset/img/image/sp1/gleam.png",
      "../asset/img/image/sp1/gleam1.png"
    ],
    "colors": ["Bạc"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "9",
    "name": "CAMELLIA",
    "price": 4990000,
    "description": "Váy công chúa satin bóng, có tùng váy, cổ vuông hai dây, thanh lịch và thoải mái.",
    "preview": "../asset/img/image/sp1/camellia.png",
    "photos": [
      "../asset/img/image/sp1/camellia.png",
      "../asset/img/image/sp1/camellia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "10",
    "name": "SOKYA",
    "price": 5190000,
    "description": "Váy công chúa cổ tim, chất liệu vải tuyn đính ngọc trai, tay áo có thể tháo rời.",
    "preview": "../asset/img/image/sp1/sokya.png",
    "photos": [
      "../asset/img/image/sp1/sokya.png",
      "../asset/img/image/sp1/sokya1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có tay áo", "Không tay áo"]
  },
  {
    "id": "11",
    "name": "TRESA",
    "price": 5290000,
    "description": "Váy công chúa hở lưng, kết hợp ren thêu hoa và thân váy satin bóng.",
    "preview": "../asset/img/image/sp1/tresa.png",
    "photos": [
      "../asset/img/image/sp1/tresa.png",
      "../asset/img/image/sp1/tresa1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "12",
    "name": "ADYNIC",
    "price": 5390000,
    "description": "Váy công chúa cổ tim hở lưng, kết hợp nhiều loại vải và họa tiết hoa organza thủ công.",
    "preview": "../asset/img/image/sp1/adynic.png",
    "photos": [
      "../asset/img/image/sp1/adynic.png",
      "../asset/img/image/sp1/adynic1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "13",
    "name": "JOISYN",
    "price": 5490000,
    "description": "Váy công chúa cổ tim có áo khoác rời, chất liệu tuyn cao cấp kết hợp hoa organza thủ công.",
    "preview": "../asset/img/image/sp1/joisyn.png",
    "photos": [
      "../asset/img/image/sp1/joisyn.png",
      "../asset/img/image/sp1/joisyn1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có áo khoác", "Không áo khoác"]
  },
  {
    "id": "14",
    "name": "GLOW",
    "price": 5690000,
    "description": "Váy công chúa cổ tim có áo khoác, ren đính hạt và kim sa, tuyn ánh kim, tùng váy phụ giúp tạo độ phồng.",
    "preview": "../asset/img/image/sp1/glow.png",
    "photos": [
      "../asset/img/image/sp1/glow.png",
      "../asset/img/image/sp1/glow1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "15",
    "name": "TOPHA",
    "price": 5590000,
    "description": "Váy công chúa cổ chữ V kèm nơ, ren thêu hoa và thân váy satin bóng.",
    "preview": "../asset/img/image/sp1/topha.png",
    "photos": [
      "../asset/img/image/sp1/topha.png",
      "../asset/img/image/sp1/topha1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "16",
    "name": "JANDRA",
    "price": 5490000,
    "description": "Váy công chúa cổ tim hở lưng, vải tuyn cao cấp, tùng váy xòe bồng bềnh.",
    "preview": "../asset/img/image/sp1/jandra.png",
    "photos": [
      "../asset/img/image/sp1/jandra.png",
      "../asset/img/image/sp1/jandra1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "17",
    "name": "JALAL",
    "price": 5790000,
    "description": "Váy công chúa cổ chữ V, vải tuyn kết hợp ren thêu hoa, tay áo dài có thể tháo rời.",
    "preview": "../asset/img/image/sp1/jalal.png",
    "photos": [
      "../asset/img/image/sp1/jalal.png",
      "../asset/img/image/sp1/jalal1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "18",
    "name": "ABIA",
    "price": 5590000,
    "description": "Váy công chúa cổ yếm hở lưng, voan mềm mại kết hợp ren thêu hoa, chân váy organza bồng bềnh.",
    "preview": "../asset/img/image/sp1/abia.png",
    "photos": [
      "../asset/img/image/sp1/abia.png",
      "../asset/img/image/sp1/abia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "19",
    "name": "SEBAZIA",
    "price": 5490000,
    "description": "Váy công chúa satin bóng, tay áo có thể tháo rời, tùng váy tạo dáng bồng bềnh.",
    "preview": "../asset/img/image/sp1/sebazia.png",
    "photos": [
      "../asset/img/image/sp1/sebazia.png",
      "../asset/img/image/sp1/sebazia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "20",
    "name": "PECIA",
    "price": 5590000,
    "description": "Váy công chúa trễ vai hở lưng, satin bóng phối hạt cườm, tùng váy bồng bềnh.",
    "preview": "../asset/img/image/sp1/pecia.png",
    "photos": [
      "../asset/img/image/sp1/pecia.png",
      "../asset/img/image/sp1/pecia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "21",
    "name": "AFFECTION",
    "price": 12990000,
    "description": "Váy cưới đuôi cá ren đính hạt, thêu hoa 3D thủ công, cổ chữ V, không tay, ôm dáng quyến rũ.",
    "preview": "../asset/img/image/sp2/affection.png",
    "photos": [
      "../asset/img/image/sp2/affection.png",
      "../asset/img/image/sp2/affection1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Tà trong suốt", "Tà không trong suốt"]
  },
  {
    "id": "22",
    "name": "GLANCE",
    "price": 12990000,
    "description": "Váy cưới đuôi cá ren 3D, kèm áo khoác, cổ chữ V, không tay, dáng ôm sát.",
    "preview": "../asset/img/image/sp2/glance.png",
    "photos": [
      "../asset/img/image/sp2/glance.png",
      "../asset/img/image/sp2/glance1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Tà trong suốt", "Tà không trong suốt", "Có áo khoác", "Không có áo khoác"]
  },
  {
    "id": "23",
    "name": "FINESSE",
    "price": 13990000,
    "description": "Váy cưới ren chantilly đính hạt, ôm sát và xòe, có corset tùy chọn.",
    "preview": "../asset/img/image/sp2/finesse.png",
    "photos": [
      "../asset/img/image/sp2/finesse.png",
      "../asset/img/image/sp2/finesse1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có corset", "Không có corset"]
  },
  {
    "id": "24",
    "name": "BLISS",
    "price": 11990000,
    "description": "Váy cưới đuôi cá ren 3D, có phụ kiện cổ, cổ chữ V, không tay.",
    "preview": "../asset/img/image/sp2/bliss.png",
    "photos": [
      "../asset/img/image/sp2/bliss.png",
      "../asset/img/image/sp2/bliss1.png"
    ],
    "colors": ["Trong suốt", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có phụ kiện cổ", "Không có phụ kiện cổ"]
  },
  {
    "id": "25",
    "name": "BEAUTY",
    "price": 14990000,
    "description": "Váy cưới đuôi cá ren 3D, cổ chữ V, tay dài, ôm sát cơ thể.",
    "preview": "../asset/img/image/sp2/beauty.png",
    "photos": [
      "../asset/img/image/sp2/beauty.png",
      "../asset/img/image/sp2/beauty1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": []
  },
  {
    "id": "26",
    "name": "AURA",
    "price": 15990000,
    "description": "Váy cưới đuôi cá ren đính hạt và kim sa, không tay, buộc dây, kèm voan/găng tay tùy chọn.",
    "preview": "../asset/img/image/sp2/aura.png",
    "photos": [
      "../asset/img/image/sp2/aura.png",
      "../asset/img/image/sp2/aura1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có găng tay", "Không có găng tay", "Có voan đội đầu", "Không có voan"]
  },
  {
    "id": "27",
    "name": "Whisper",
    "price": 15990000,
    "description": "Váy cưới đuôi cá satin co giãn và ren, không tay, chữ V, kèm găng tay tùy chọn. Dáng nàng tiên cá, đuôi dài chấm đất, ren đính hạt thủ công tinh tế, lưng hở quyến rũ.",
    "preview": "../asset/img/image/sp2/whisper.png",
    "photos": [
      "../asset/img/image/sp2/whisper.png",
      "../asset/img/image/sp2/whisper1.png"
    ],
    "colors": ["Bạc", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có găng tay", "Không có găng tay"]
  },
  {
    "id": "28",
    "name": "Silhouette",
    "price": 17990000,
    "description": "Váy cưới dài tay ôm sát và xòe, ren Chantilly đính hạt và kim sa, cổ cao, kèm corset tùy chọn. Dáng nàng tiên cá, đuôi dài chấm đất, vừa vặn tôn dáng, tinh tế vượt thời gian.",
    "preview": "../asset/img/image/sp2/silhouette.png",
    "photos": [
      "../asset/img/image/sp2/silhouette.png",
      "../asset/img/image/sp2/silhouette1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có corset", "Không có corset", "Váy trong suốt", "Váy không trong suốt"]
  },
  {
    "id": "29",
    "name": "Shadow",
    "price": 16990000,
    "description": "Váy cưới đuôi cá cổ yếm, ren hoa 3D đính hạt và ren Chantilly, không tay, có tùy chọn thêm tà váy. Dáng nàng tiên cá, lưng hở quyến rũ, hiệu ứng bồng bềnh như cổ tích.",
    "preview": "../asset/img/image/sp2/shadow.png",
    "photos": [
      "../asset/img/image/sp2/shadow.png",
      "../asset/img/image/sp2/shadow1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Thêm tà váy", "Không tà váy"]
  },
  {
    "id": "30",
    "name": "Scent",
    "price": 16990000,
    "description": "Váy cưới đuôi cá ren hoa 3D đính hạt và kim sa, cổ chữ V, không tay, kèm tay áo tùy chọn. Dáng nàng tiên cá, lưng hở, phần hông bán trong suốt, tay áo bồng bềnh, hiệu ứng cổ tích.",
    "preview": "../asset/img/image/sp2/scent.png",
    "photos": [
      "../asset/img/image/sp2/scent.png",
      "../asset/img/image/sp2/scent1.png"
    ],
    "colors": ["Trắng", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Tay áo", "Không tay áo"]
  },
  {
    "id": "31",
    "name": "Passion",
    "price": 18990000,
    "description": "Váy cưới đuôi cá ren 3D có lông vũ, cổ chữ V, không tay, kèm áo choàng tùy chọn. Dáng nàng tiên cá, đuôi dài ấn tượng, ren 3D đính hạt thủ công, áo choàng tuyn mỏng tạo cảm giác chuyển động, cổ áo choker quyến rũ.",
    "preview": "../asset/img/image/sp2/passion.png",
    "photos": [
      "../asset/img/image/sp2/passion.png",
      "../asset/img/image/sp2/passion1.png"
    ],
    "colors": ["Bạc", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có áo choàng", "Không có áo choàng"]
  },
  {
    "id": "32",
    "name": "Glory",
    "price": 19990000,
    "description": "Váy cưới đuôi cá ren 3D, tua rua đính hạt và lông vũ, cổ chữ V hoặc cổ yếm, không tay. Dáng nàng tiên cá, lưng hở, tua rua buông xuống bắt sáng, pha lê nhỏ lấp lánh, tạo nét thanh lịch hiện đại và ấn tượng.",
    "preview": "../asset/img/image/sp2/glory.png",
    "photos": [
      "../asset/img/image/sp2/glory.png",
      "../asset/img/image/sp2/glory1.png"
    ],
    "colors": ["Bạc", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": []
  },
  {
    "id": "33",
    "name": "Glance",
    "price": 19990000,
    "description": "Váy cưới đuôi cá ren 3D kèm áo choàng, cổ chữ V, không tay, dài chấm đất. Ren 3D với hạt và kim sa, đuôi dài ấn tượng, lưng hở, áo khoác hoa thủ công.",
    "preview": "../asset/img/image/sp2/glance.png",
    "photos": [
      "../asset/img/image/sp2/glance.png",
      "../asset/img/image/sp2/glance1.png"
    ],
    "colors": ["Bạc", "Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có áo choàng", "Không có áo choàng"]
  },
  {
    "id": "34",
    "name": "Jessi",
    "price": 14990000,
    "description": "Váy cưới đuôi cá họa tiết lá thêu, cổ tim cúp ngực, không tay, dài chấm đất. Ren thêu tinh xảo, đuôi váy satin mềm mại, tôn lên vẻ thanh lịch hiện đại.",
    "preview": "../asset/img/image/sp2/jessi.png",
    "photos": [
      "../asset/img/image/sp2/jessi.png",
      "../asset/img/image/sp2/jessi1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "35",
    "name": "Vivien",
    "price": 15990000,
    "description": "Váy cưới đuôi cá ren cao cấp nhiều lớp, cổ lọ 3 phân, tay dài, dài chấm đất. Thiết kế tôn lên đường cong cơ thể cô dâu, sang trọng và thanh lịch.",
    "preview": "../asset/img/image/sp2/vivien.png",
    "photos": [
      "../asset/img/image/sp2/vivien.png",
      "../asset/img/image/sp2/vivien1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "36",
    "name": "Isode",
    "price": 16990000,
    "description": "Váy cưới đuôi cá ren 3D cao cấp, trễ vai cổ tim, tay dài, dài chấm đất. Thiết kế sang trọng, tạo khoảnh khắc kéo dài mãi mãi.",
    "preview": "../asset/img/image/sp2/isode.png",
    "photos": [
      "../asset/img/image/sp2/isode.png",
      "../asset/img/image/sp2/isode1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "37",
    "name": "Jasmine",
    "price": 15990000,
    "description": "Váy cưới hoa nhài cao cấp, cổ hai dây, không tay, dài chấm đất. Ren 3D cao cấp, nơ và tà satin mềm mại, họa tiết tinh tế trên toàn thân, tôn vẻ thanh lịch và sang trọng.",
    "preview": "../asset/img/image/sp2/jasmine.png",
    "photos": [
      "../asset/img/image/sp2/jasmine.png",
      "../asset/img/image/sp2/jasmine1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "38",
    "name": "Selena",
    "price": 16990000,
    "description": "Váy đuôi cá đính hạt cườm trễ vai, tay dài, dài chấm đất. Vải dệt cườm cao cấp, chi tiết tinh tế, tôn lên đường cong và sự thanh lịch của cô dâu.",
    "preview": "../asset/img/image/sp2/selena.png",
    "photos": [
      "../asset/img/image/sp2/selena.png",
      "../asset/img/image/sp2/selena1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "39",
    "name": "Helena",
    "price": 17990000,
    "description": "Váy ren 3D cổ yếm cao cấp, không tay, dài chấm đất. Lấy cảm hứng từ các bộ váy dạ hội Ý, cổ yếm hở lưng, tôn vẻ hiện đại và cổ điển.",
    "preview": "../asset/img/image/sp2/helena.png",
    "photos": [
      "../asset/img/image/sp2/helena.png",
      "../asset/img/image/sp2/helena1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "40",
    "name": "Maya",
    "price": 18990000,
    "description": "Váy ren 3D nàng tiên cá, cổ tim cúp ngực, không tay, thắt eo nhỏ, dài chấm đất. Chất liệu ren cao cấp kết hợp tuyn đuôi cá, tôn lên đường cong, sang trọng và tinh tế.",
    "preview": "../asset/img/image/sp2/maya.png",
    "photos": [
      "../asset/img/image/sp2/maya.png",
      "../asset/img/image/sp2/maya1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "41",
    "name": "Gesture",
    "price": 15990000,
    "description": "Váy cưới chữ A ren hoa 3D, cổ tim, không tay, dài chấm đất. Ren hoa 3D, đính cườm thủ công, lông vũ, dây buộc sau lưng, chân váy xòe bồng bềnh tinh tế.",
    "preview": "../asset/img/image/sp3/gesture.png",
    "photos": [
      "../asset/img/image/sp3/gesture.png",
      "../asset/img/image/sp3/gesture1.png"
    ],
    "colors": ["Ngà voi"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Tà trong suốt", "Tà không trong suốt"]
  },
  {
    "id": "42",
    "name": "Moera",
    "price": 14990000,
    "description": "Váy cưới dáng chữ A cúp ngực satin, không tay, dài chấm đất. Thân áo mềm mại, chân váy satin bồng bềnh, cổ chữ V, có/không kèm bao tay.",
    "preview": "../asset/img/image/sp3/moera.png",
    "photos": [
      "../asset/img/image/sp3/moera.png",
      "../asset/img/image/sp3/moera1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có kèm bao tay", "Không kèm bao tay"]
  },
  {
    "id": "43",
    "name": "Dianna",
    "price": 15990000,
    "description": "Váy cưới ren 3D dáng chữ A xẻ tà, cổ tim, không tay, dài chấm đất. Ren 3D nhiều lớp, thân áo có cấu trúc lãng mạn, tôn nét duyên dáng và nữ tính.",
    "preview": "../asset/img/image/sp3/dianna.png",
    "photos": [
      "../asset/img/image/sp3/dianna.png",
      "../asset/img/image/sp3/dianna1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "44",
    "name": "Lana",
    "price": 16990000,
    "description": "Váy chữ A satin xẻ tà sâu, cổ tim, không tay, thắt lưng hoa 3D, dài chấm đất. Chân váy xòe bồng bềnh, xẻ cao đến đùi, kết hợp hoa thủ công, gợi cảm nhưng thanh lịch.",
    "preview": "../asset/img/image/sp3/lana.png",
    "photos": [
      "../asset/img/image/sp3/lana.png",
      "../asset/img/image/sp3/lana1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "45",
    "name": "Elysia",
    "price": 16990000,
    "description": "Váy ren 3D dáng chữ A xẻ tà sâu, cổ tim, trễ vai, dài chấm đất. Thân áo corset cầu kỳ, ren hoa tinh xảo, chân váy tuyn bồng bềnh, tạo chuyển động quyến rũ.",
    "preview": "../asset/img/image/sp3/elysia.png",
    "photos": [
      "../asset/img/image/sp3/elysia.png",
      "../asset/img/image/sp3/elysia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "46",
    "name": "Amara",
    "price": 14990000,
    "description": "Váy ren thêu cao cấp chữ A, cổ tim, không tay, dài chấm đất. Ren hoa tinh tế, ôm nhẹ cơ thể, sang trọng, thanh lịch và duyên dáng.",
    "preview": "../asset/img/image/sp3/amara.png",
    "photos": [
      "../asset/img/image/sp3/amara.png",
      "../asset/img/image/sp3/amara1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "47",
    "name": "Sylvia",
    "price": 15990000,
    "description": "Váy ren hoa 3D chữ A, tay bồng rời, cổ tim xẻ sâu, dài chấm đất. Ren 3D kết hợp tuyn ở tà và tay đi kèm, tạo sự thanh lịch, lãng mạn và quyến rũ.",
    "preview": "../asset/img/image/sp3/sylvia.png",
    "photos": [
      "../asset/img/image/sp3/sylvia.png",
      "../asset/img/image/sp3/sylvia1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có kèm tay", "Không kèm tay"]
  },
  {
    "id": "48",
    "name": "Courtesy",
    "price": 15990000,
    "description": "Váy cưới chữ A ren có tà đi kèm, cổ chữ V, không tay, dài chấm đất. Ren hoa 3D đính hạt, khóa kéo sau lưng, dây vai mảnh với nơ nhỏ, xẻ chân táo bạo, tôn nét nữ tính hiện đại.",
    "preview": "../asset/img/image/sp3/courtesy.png",
    "photos": [
      "../asset/img/image/sp3/courtesy.png",
      "../asset/img/image/sp3/courtesy1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có kèm tay", "Không kèm tay"]
  },
  {
    "id": "49",
    "name": "Finesse",
    "price": 17990000,
    "description": "Váy cưới ôm xòe ren Chantilly đính hạt và sequin, cổ ngang, không tay, dài chấm đất, có corset ôm dáng hoàn hảo.",
    "preview": "../asset/img/image/sp3/finesse.png",
    "photos": [
      "../asset/img/image/sp3/finesse.png",
      "../asset/img/image/sp3/finesse1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có kèm tay", "Không kèm tay"]
  },
  {
    "id": "50",
    "name": "Seraphina",
    "price": 16990000,
    "description": "Váy cưới A-line bằng ren hoa dệt kim sa, cổ tim, không tay, dài chấm đất, tôn lên vóc dáng thanh lịch và kiêu sa.",
    "preview": "../asset/img/image/sp3/seraphina.png",
    "photos": [
      "../asset/img/image/sp3/seraphina.png",
      "../asset/img/image/sp3/seraphina1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "51",
    "name": "Lona",
    "price": 15990000,
    "description": "Váy satin bóng A-line, cổ chữ V, không tay, dài chấm đất, thân áo nịt ngực ôm sát, mang phong cách hiện đại và sang trọng.",
    "preview": "../asset/img/image/sp3/lona.png",
    "photos": [
      "../asset/img/image/sp3/lona.png",
      "../asset/img/image/sp3/lona1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "52",
    "name": "Larosa",
    "price": 15990000,
    "description": "Váy chữ A satin bóng cao cấp, cổ chữ V, không tay, dài chấm đất, mang đến vẻ đẹp thanh lịch và quyến rũ cho cô dâu.",
    "preview": "../asset/img/image/sp3/larosa.png",
    "photos": [
      "../asset/img/image/sp3/larosa.png",
      "../asset/img/image/sp3/larosa1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Có kèm tay", "Không kèm tay"]
  },
  {
    "id": "53",
    "name": "Lena",
    "price": 14990000,
    "description": "Váy xẻ tà hiện đại A-line, cổ chữ V hai dây khoét sâu, không tay, dài chấm đất, tôn lên vẻ đẹp tinh tế và cuốn hút.",
    "preview": "../asset/img/image/sp3/lena.png",
    "photos": [
      "../asset/img/image/sp3/lena.png",
      "../asset/img/image/sp3/lena1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "54",
    "name": "Lori",
    "price": 14990000,
    "description": "Váy chữ A vải voan xẻ tà, cổ chữ V, không tay, dài chấm đất, nhiều lớp tuyn cao cấp tạo hiệu ứng bồng bềnh và sang trọng.",
    "preview": "../asset/img/image/sp3/lori.png",
    "photos": [
      "../asset/img/image/sp3/lori.png",
      "../asset/img/image/sp3/lori1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "55",
    "name": "Lara",
    "price": 15990000,
    "description": "Váy A-line voan cao cấp đính ngọc trai, cổ chữ V hai dây khoét sâu, không tay, dài chấm đất, nhẹ nhàng thanh lịch và quyến rũ.",
    "preview": "../asset/img/image/sp3/lara.png",
    "photos": [
      "../asset/img/image/sp3/lara.png",
      "../asset/img/image/sp3/lara1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "56",
    "name": "Eulaly",
    "price": 15990000,
    "description": "Váy chữ A bồng bềnh tay dài, cổ trễ vai chữ V, ren 3D phối tuyn, dài chấm đất, lãng mạn và tinh tế.",
    "preview": "../asset/img/image/sp3/eulaly.png",
    "photos": [
      "../asset/img/image/sp3/eulaly.png",
      "../asset/img/image/sp3/eulaly1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "57",
    "name": "Jaelle",
    "price": 14990000,
    "description": "Váy chữ A cổ yếm, không tay, ren 3D phối tuyn, dài chấm đất, nhẹ nhàng và duyên dáng.",
    "preview": "../asset/img/image/sp3/jaelle.png",
    "photos": [
      "../asset/img/image/sp3/jaelle.png",
      "../asset/img/image/sp3/jaelle1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "58",
    "name": "Jahana",
    "price": 15990000,
    "description": "Váy chữ A đuôi váy có thể tháo rời, cổ yếm, không tay, ren 3D phối tuyn, dài chấm đất, bồng bềnh và đa năng.",
    "preview": "../asset/img/image/sp3/jahana.png",
    "photos": [
      "../asset/img/image/sp3/jahana.png",
      "../asset/img/image/sp3/jahana1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "59",
    "name": "Azaiar",
    "price": 15990000,
    "description": "Váy chữ A lưng V-line, cổ V, không tay, ren 3D phối tuyn, dài chấm đất, nhẹ nhàng và bồng bềnh.",
    "preview": "../asset/img/image/sp3/azaiar.png",
    "photos": [
      "../asset/img/image/sp3/azaiar.png",
      "../asset/img/image/sp3/azaiar1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "60",
    "name": "Eleste",
    "price": 10990000,
    "description": "Váy ngắn voan kèm đuôi dài chấm đất, cổ tim, không tay, nhiều lớp tuyn bồng bềnh, thoải mái và bay bổng.",
    "preview": "../asset/img/image/sp4/eleste.png",
    "photos": [
      "../asset/img/image/sp4/eleste.png",
      "../asset/img/image/sp4/eleste1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "61",
    "name": "Blush",
    "price": 11990000,
    "description": "Váy ngắn ren 3D đính lông vũ và hạt cườm, cổ tim, không tay, có dây buộc sau, tinh tế và bay bổng.",
    "preview": "../asset/img/image/sp4/blush.png",
    "photos": [
      "../asset/img/image/sp4/blush.png",
      "../asset/img/image/sp4/blush1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "62",
    "name": "Aurola",
    "price": 10990000,
    "description": "Váy ngắn hai dây satin mềm mại, không tay, không có đường viền sau, kết hợp tuyn đuôi váy, nhẹ nhàng và quyến rũ.",
    "preview": "../asset/img/image/sp4/aurola.png",
    "photos": [
      "../asset/img/image/sp4/aurola.png",
      "../asset/img/image/sp4/aurola1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "63",
    "name": "Mini",
    "price": 9900000,
    "description": "Váy skirt ngắn cúc, cổ cúp ngực, không tay, ngắn gọn và tôn dáng, phù hợp cho các buổi tiệc thân mật.",
    "preview": "../asset/img/image/sp4/mini.png",
    "photos": [
      "../asset/img/image/sp4/mini.png",
      "../asset/img/image/sp4/mini1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "64",
    "name": "Perla",
    "price": 12990000,
    "description": "Váy ngắn cổ cúp ngực đính ngọc trai, không tay, không đường viền sau, tôn vẻ đẹp rạng rỡ, sang trọng và thoải mái.",
    "preview": "../asset/img/image/sp4/perla.png",
    "photos": [
      "../asset/img/image/sp4/perla.png",
      "../asset/img/image/sp4/perla1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "65",
    "name": "Candy",
    "price": 11990000,
    "description": "Váy ngắn satin, cổ cúp ngực, không tay, đính nơ bản to phía sau, ngắn gọn, nổi bật và thoải mái.",
    "preview": "../asset/img/image/sp4/candy.png",
    "photos": [
      "../asset/img/image/sp4/candy.png",
      "../asset/img/image/sp4/candy1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "66",
    "name": "Flora",
    "price": 12990000,
    "description": "Váy ngắn hai dây ren, kết hợp lông vũ và ren chantilly, không tay, không đường viền sau, trẻ trung và mộng mơ.",
    "preview": "../asset/img/image/sp4/flora.png",
    "photos": [
      "../asset/img/image/sp4/flora.png",
      "../asset/img/image/sp4/flora1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["1 lựa chọn"]
  },
  {
    "id": "67",
    "name": "Lami",
    "price": 10990000,
    "description": "Váy cưới mini đơn giản có chân váy, cổ cúp ngực, không tay, kết hợp với váy ngoài tạo sự thanh lịch, điểm nhấn bông hoa vai áo.",
    "preview": "../asset/img/image/sp4/lami.png",
    "photos": [
      "../asset/img/image/sp4/lami.png",
      "../asset/img/image/sp4/lami1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm váy ngoài", "Không kèm váy ngoài"]
  },
  {
    "id": "68",
    "name": "Jacquard",
    "price": 11990000,
    "description": "Váy cưới vải gấm hoa ngắn xòe, cổ vuông, không tay, kéo khóa ẩn sau, hiện đại và thanh lịch.",
    "preview": "../asset/img/image/sp4/jacquard.png",
    "photos": [
      "../asset/img/image/sp4/jacquard.png",
      "../asset/img/image/sp4/jacquard1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm váy ngắn", "Không kèm váy ngắn"]
  },
  {
    "id": "69",
    "name": "Cape",
    "price": 12990000,
    "description": "Váy cưới ngắn kèm áo choàng, cổ vuông, không tay, kéo khóa ẩn sau, hiện đại, tinh tế và thanh lịch.",
    "preview": "../asset/img/image/sp4/cape.png",
    "photos": [
      "../asset/img/image/sp4/cape.png",
      "../asset/img/image/sp4/cape1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm áo choàng", "Không kèm áo choàng"]
  },
  {
    "id": "70",
    "name": "Sincere",
    "price": 10990000,
    "description": "Váy cưới ngắn tối giản kèm chân váy phủ, cổ hình tim, buộc dây lưng, không tay, hai mảnh, nhẹ nhàng và bay bổng.",
    "preview": "../asset/img/image/sp4/sincere.png",
    "photos": [
      "../asset/img/image/sp4/sincere.png",
      "../asset/img/image/sp4/sincere1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm váy ngắn", "Không kèm váy ngắn", "Xuyên thấu", "Không xuyên thấu"]
  },
  {
    "id": "71",
    "name": "Lancy",
    "price": 11990000,
    "description": "Váy cưới tối giản phối mix & match kèm chân váy phủ, cổ tim, không tay, chất liệu gấm hoặc lụa, mini, trẻ trung và thời thượng.",
    "preview": "../asset/img/image/sp4/lancy.png",
    "photos": [
      "../asset/img/image/sp4/lancy.png",
      "../asset/img/image/sp4/lancy1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Gấm", "Lụa"]
  },
  {
    "id": "72",
    "name": "Lace",
    "price": 12990000,
    "description": "Váy cưới ngắn ren boho, cổ ngang, quây ngực, tay áo ren, không kèm váy ngắn, táo bạo và phóng khoáng.",
    "preview": "../asset/img/image/sp4/lace.png",
    "photos": [
      "../asset/img/image/sp4/lace.png",
      "../asset/img/image/sp4/lace1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm váy ngắn", "Không kèm váy ngắn"]
  },
  {
    "id": "73",
    "name": "Mikado",
    "price": 12990000,
    "description": "Váy cưới mini Mikado hai mảnh, cổ ngang, không tay, có khóa kéo, chân váy trang trí hoa, tối giản nhưng nổi bật.",
    "preview": "../asset/img/image/sp4/mikado.png",
    "photos": [
      "../asset/img/image/sp4/mikado.png",
      "../asset/img/image/sp4/mikado1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm chân váy", "Không kèm chân váy"]
  },
  {
    "id": "74",
    "name": "Jacquard",
    "price": 11990000,
    "description": "Váy cưới vải gấm hoa ngắn mix & match, cổ ngang, không tay, thân váy satin/organza gợn sóng, chân váy tulle, kèm hoặc không kèm đuôi váy, hiện đại và tinh tế.",
    "preview": "../asset/img/image/sp4/jacquard.png",
    "photos": [
      "../asset/img/image/sp4/jacquard.png",
      "../asset/img/image/sp4/jacquard1.png"
    ],
    "colors": ["Trắng"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm đuôi váy", "Không kèm đuôi váy"]
  },
  {
    "id": "75",
    "name": "Cocktail",
    "price": 12990000,
    "description": "Váy cưới cocktail ngắn taffeta, cổ bất đối xứng, không tay, kèm hoặc không kèm đuôi váy, điểm nhấn bông hồng 3D, phong cách tối giản và tinh tế.",
    "preview": "../asset/img/image/sp4/cocktail.png",
    "photos": [
      "../asset/img/image/sp4/cocktail.png",
      "../asset/img/image/sp4/cocktail1.png"
    ],
    "colors": ["Bạc"],
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "options": ["Kèm đuôi váy", "Không kèm đuôi váy"]
  }



];

