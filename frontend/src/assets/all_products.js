import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_products = [
  {
    id: 1,
    name: "Áo sơ mi nữ cổ V tay ngắn",
    category: "women",
    image: p1_img,
    new_price: 45,
    old_price: 70,
    tag: ["Áo Sơ Mi", "Cổ V", "Tay Ngắn"],
    season: "Xuân",
    type: "Áo Sơ Mi",
    description:
      "Tôn dáng với áo sơ mi cổ V thanh lịch, phù hợp cho mọi dịp từ công sở đến hẹn hò. Chất liệu cotton pha lụa cao cấp, mềm mại và thoáng mát, giúp bạn tự tin suốt ngày dài. Thiết kế cổ V tinh tế vừa kín đáo vừa quyến rũ, dễ dàng mix&match với nhiều phong cách khác nhau. Màu sắc trung tính dễ phối đồ, là item không thể thiếu trong tủ đồ của quý cô hiện đại.",
  },
  {
    id: 2,
    name: "Váy đầm xòe hoa nhí",
    category: "women",
    image: p2_img,
    new_price: 79,
    old_price: 110,
    tag: ["Váy Đầm", "Xòe", "Hoa Nhí"],
    season: "Hè",
    type: "Váy Đầm",
    description:
      "Nữ tính và duyên dáng với váy đầm xòe hoa nhí. Thiết kế nhẹ nhàng, thoải mái cho những ngày hè rạng rỡ. Chất liệu vải lụa mềm mại, thoáng khí, giúp bạn luôn cảm thấy mát mẻ. Họa tiết hoa nhí tinh tế tạo nên vẻ đẹp ngọt ngào, lãng mạn. Phần chân váy xòe nhẹ giúp tôn dáng, che khuyết điểm đôi chân. Lựa chọn hoàn hảo cho các buổi dạo phố, picnic hay những bữa tiệc nhẹ nhàng.",
  },
  {
    id: 3,
    name: "Quần jean nữ ống rộng",
    category: "women",
    image: p3_img,
    new_price: 65,
    old_price: 95,
    tag: ["Quần Jean", "Ống Rộng"],
    season: "Thu",
    type: "Quần Jean",
    description:
      "Phong cách và thoải mái với quần jean ống rộng. Dễ dàng mix&match, thích hợp cho cả ngày đi làm lẫn dạo phố. Chất liệu denim cao cấp, co giãn nhẹ giúp bạn thoải mái vận động. Thiết kế ống rộng trendy, vừa cá tính vừa che khuyết điểm đôi chân. Màu xanh classic dễ dàng kết hợp với nhiều loại trang phục khác nhau. Điểm nhấn wash nhẹ tạo nên vẻ thời thượng, sành điệu. Quần có túi sâu tiện lợi, phù hợp cho cả những cô nàng năng động.",
  },
  {
    id: 4,
    name: "Áo khoác denim nữ oversized",
    category: "women",
    image: p4_img,
    new_price: 120,
    old_price: 180,
    tag: ["Áo Khoác", "Denim", "Oversized"],
    season: "Thu",
    type: "Áo Khoác",
    description:
      "Cá tính và sành điệu với áo khoác denim oversized. Lựa chọn hoàn hảo cho những ngày se lạnh, dễ dàng kết hợp nhiều phong cách. Chất liệu denim dày dặn, bền đẹp, giữ form tốt. Thiết kế oversized thoải mái, phù hợp với xu hướng thời trang hiện đại. Túi áo lớn tiện lợi, cá tính. Đường may tỉ mỉ, chắc chắn tạo nên sản phẩm chất lượng cao. Có thể khoác ngoài áo phông, áo len mỏng trong những ngày thu se lạnh. Dễ dàng mix cùng quần jeans, chân váy hoặc đầm for a chic look.",
  },
  {
    id: 5,
    name: "Chân váy bút chì công sở",
    category: "women",
    image: p5_img,
    new_price: 55,
    old_price: 80,
    tag: ["Chân Váy", "Bút Chì", "Công Sở"],
    season: "Xuân",
    type: "Chân Váy",
    description:
      "Sang trọng và chuyên nghiệp với chân váy bút chì. Tôn dáng chuẩn, phù hợp cho môi trường công sở hiện đại. Chất liệu vải tuyết mưa cao cấp, mềm mại, ít nhăn, dễ giặt ủi. Thiết kế ôm nhẹ tôn dáng, tạo vẻ thanh lịch, quyến rũ. Đường xẻ sau tinh tế giúp dễ dàng di chuyển. Màu sắc trung tính dễ dàng kết hợp với nhiều loại áo khác nhau. Phù hợp cho cả những buổi gặp gỡ đối tác quan trọng. Là item không thể thiếu trong tủ đồ của quý cô công sở hiện đại.",
  },
  {
    id: 6,
    name: "Áo thun nữ in họa tiết",
    category: "women",
    image: p6_img,
    new_price: 35,
    old_price: 50,
    tag: ["Áo Thun", "In Họa Tiết"],
    season: "Hè",
    type: "Áo Thun",
    description:
      "Trẻ trung và năng động với áo thun họa tiết độc đáo. Chất liệu cotton 100% mềm mại, thoáng mát cho ngày hè sôi động. Họa tiết in sắc nét, không bong tróc, giữ màu tốt sau nhiều lần giặt. Thiết kế cổ tròn, form rộng thoải mái, phù hợp với nhiều vóc dáng. Dễ dàng mix&match với quần jeans, chân váy hoặc quần short. Màu sắc tươi sáng, trẻ trung giúp bạn nổi bật trong mọi cuộc vui. Lựa chọn hoàn hảo cho các hoạt động ngoài trời, du lịch hay gặp gỡ bạn bè.",
  },
  {
    id: 7,
    name: "Đầm maxi dự tiệc",
    category: "women",
    image: p7_img,
    new_price: 150,
    old_price: 220,
    tag: ["Đầm Maxi", "Dự Tiệc"],
    season: "Hè",
    type: "Đầm",
    description:
      "Lộng lẫy và quyến rũ với đầm maxi dự tiệc. Thiết kế tinh tế, tôn dáng hoàn hảo cho những buổi tiệc sang trọng. Chất liệu voan lụa cao cấp, mềm mại, thoáng khí, tạo cảm giác nhẹ nhàng khi di chuyển. Đường xẻ tà tinh tế vừa giúp dễ dàng di chuyển vừa tạo nét quyến rũ. Phần thân trên được thiết kế cầu kỳ với những đường đắp vải nghệ thuật. Màu sắc sang trọng giúp bạn nổi bật giữa đám đông. Phù hợp cho các buổi tiệc tối, dạ hội hay những sự kiện quan trọng.",
  },
  {
    id: 8,
    name: "Quần culottes nữ lưng cao",
    category: "women",
    image: p8_img,
    new_price: 70,
    old_price: 100,
    tag: ["Quần Culottes", "Lưng Cao"],
    season: "Xuân",
    type: "Quần Culottes",
    description:
      "Thanh lịch và thoải mái với quần culottes lưng cao. Dễ dàng phối đồ, phù hợp cho cả công sở và dạo phố. Chất liệu vải tuyết mưa cao cấp, mềm mại, ít nhăn, dễ giặt ủi. Thiết kế lưng cao giúp tôn dáng, che khuyết điểm vùng bụng. Ống quần suông rộng tạo cảm giác thoải mái khi di chuyển. Có thể kết hợp với áo sơ mi, áo thun hoặc áo kiểu for a chic look. Màu sắc trung tính dễ dàng phối với nhiều trang phục khác nhau. Phù hợp cho cả những buổi gặp gỡ quan trọng hay những ngày dạo phố cuối tuần.",
  },
  {
    id: 9,
    name: "Áo blazer nữ tay lỡ",
    category: "women",
    image: p9_img,
    new_price: 130,
    old_price: 190,
    tag: ["Áo Blazer", "Tay Lỡ"],
    season: "Thu",
    type: "Áo Blazer",
    description:
      "Đẳng cấp và chuyên nghiệp với áo blazer tay lỡ. Thiết kế hiện đại, dễ dàng kết hợp cho nhiều dịp khác nhau. Chất liệu vải cao cấp, mềm mại, ít nhăn, giữ form tốt. Kiểu dáng tay lỡ vừa thanh lịch vừa trẻ trung, phù hợp với xu hướng thời trang hiện đại. Cổ áo thiết kế tinh tế, tôn lên vẻ đẹp của gương mặt. Có thể kết hợp với quần âu, chân váy bút chì cho look công sở hoặc jeans, áo thun cho phong cách casual chic. Là item không thể thiếu trong tủ đồ của quý cô hiện đại, giúp nâng tầm mọi set đồ.",
  },
  {
    id: 10,
    name: "Áo len nữ cổ lọ",
    category: "women",
    image: p10_img,
    new_price: 60,
    old_price: 90,
    tag: ["Áo Len", "Cổ Lọ"],
    season: "Đông",
    type: "Áo Len",
    description:
      "Ấm áp và thời trang với áo len cổ lọ. Chất liệu len mềm mại, giữ ấm tuyệt vời cho những ngày đông lạnh giá. Thiết kế cổ lọ vừa giữ ấm vừa tạo nét thanh lịch, sang trọng. Form áo ôm nhẹ tôn dáng, phù hợp với nhiều vóc dáng khác nhau. Dễ dàng mix&match với quần jeans, chân váy hoặc quần âu. Màu sắc trung tính dễ phối đồ, phù hợp cho cả công sở lẫn những buổi dạo phố. Chất len cao cấp không xù lông, bền đẹp sau nhiều lần giặt. Là item must-have cho mùa đông, giúp bạn vừa ấm áp vừa thời trang.",
  },
  {
    id: 11,
    name: "Quần short nữ lưng thun",
    category: "women",
    image: p11_img,
    new_price: 40,
    old_price: 60,
    tag: ["Quần Short", "Lưng Thun"],
    season: "Hè",
    type: "Quần Short",
    description:
      "Năng động và thoải mái với quần short lưng thun. Lựa chọn hoàn hảo cho những ngày hè năng động và du lịch. Chất liệu cotton pha spandex co giãn tốt, thoáng mát, thấm hút mồ hôi. Thiết kế lưng thun thoải mái, dễ chịu khi vận động. Ống quần vừa phải, không quá ngắn giúp tự tin khi mặc. Có thể kết hợp với áo thun, áo sơ mi hoặc áo hai dây for a trendy look. Phù hợp cho các hoạt động thể thao, dã ngoại hoặc những ngày dạo phố cuối tuần. Dễ dàng giặt ủi và bảo quản, là item tiện lợi cho những chuyến du lịch.",
  },
  {
    id: 12,
    name: "Áo croptop nữ hai dây",
    category: "women",
    image: p12_img,
    new_price: 30,
    old_price: 45,
    tag: ["Áo Croptop", "Hai Dây"],
    season: "Hè",
    type: "Áo Croptop",
    description:
      "Quyến rũ và cá tính với áo croptop hai dây. Thiết kế gợi cảm, tôn dáng hoàn hảo cho mùa hè sôi động. Chất liệu cotton mềm mại, thấm hút mồ hôi tốt, thoáng mát trong những ngày nắng nóng. Kiểu dáng ôm nhẹ, tôn lên đường cong quyến rũ. Dây áo có thể điều chỉnh độ dài, phù hợp với nhiều vóc dáng. Dễ dàng mix với quần jean, chân váy hoặc quần short. Lý tưởng cho các buổi đi biển, dạo phố hay tiệc tùng. Màu sắc trẻ trung, nổi bật giúp bạn thu hút mọi ánh nhìn.",
  },
  {
    id: 13,
    name: "Áo sơ mi nam kẻ caro",
    category: "men",
    image: p13_img,
    new_price: 55,
    old_price: 80,
    tag: ["Áo Sơ Mi", "Kẻ Caro"],
    season: "Xuân",
    type: "Áo Sơ Mi",
    description:
      "Lịch lãm và nam tính với áo sơ mi kẻ caro. Phong cách cổ điển nhưng không kém phần hiện đại, phù hợp cho nhiều dịp. Chất liệu cotton cao cấp, mềm mại, thấm hút mồ hôi tốt. Họa tiết kẻ caro tinh tế, nam tính, dễ dàng phối đồ. Cổ áo cứng cáp, giữ form tốt sau nhiều lần giặt. Có thể kết hợp với quần jean, quần kaki hoặc quần âu. Phù hợp cho cả môi trường công sở lẫn những buổi gặp gỡ bạn bè. Dễ dàng làm mới phong cách với việc xắn tay áo hoặc thả ngoài quần.",
  },
  {
    id: 14,
    name: "Quần kaki nam ống đứng",
    category: "men",
    image: p14_img,
    new_price: 70,
    old_price: 100,
    tag: ["Quần Kaki", "Ống Đứng"],
    season: "Thu",
    type: "Quần Kaki",
    description:
      "Thanh lịch và thoải mái với quần kaki ống đứng. Dễ dàng kết hợp, phù hợp cho cả môi trường công sở và casual. Chất liệu kaki cao cấp, bền đẹp, ít nhăn, dễ giặt ủi. Thiết kế ống đứng vừa vặn, tôn dáng nam tính. Lưng quần có đỉa, có thể đeo thắt lưng tạo vẻ chỉn chu. Túi quần rộng rãi, tiện lợi đựng ví và điện thoại. Màu sắc trung tính dễ dàng phối với nhiều loại áo khác nhau. Phù hợp cho cả những ngày đi làm hay những buổi hẹn hò cuối tuần.",
  },
  {
    id: 15,
    name: "Áo polo nam tay ngắn",
    category: "men",
    image: p15_img,
    new_price: 45,
    old_price: 65,
    tag: ["Áo Polo", "Tay Ngắn"],
    season: "Hè",
    type: "Áo Polo",
    description:
      "Lịch sự và năng động với áo polo tay ngắn. Chất liệu cotton pique thoáng mát, thấm hút mồ hôi tốt, phù hợp cho mọi hoạt động trong ngày. Thiết kế cổ bẻ thanh lịch, tạo vẻ chỉn chu ngay cả khi không mặc vest. Form áo vừa vặn, tôn dáng nam tính. Logo thêu tinh tế trên ngực áo tạo điểm nhấn. Có thể kết hợp với quần jean, quần kaki hoặc quần short. Phù hợp cho cả môi trường công sở lẫn những buổi gặp gỡ bạn bè cuối tuần. Dễ dàng giặt ủi và bảo quản, là lựa chọn tiện lợi cho nam giới bận rộn.",
  },
  {
    id: 16,
    name: "Áo thun nam in hình",
    category: "men",
    image: p16_img,
    new_price: 35,
    old_price: 50,
    tag: ["Áo Thun", "In Hình"],
    season: "Hè",
    type: "Áo Thun",
    description:
      "Cá tính và trẻ trung với áo thun in hình. Chất liệu cotton 100% mềm mại, thoáng mát, thấm hút mồ hôi tốt. Hình in sắc nét, không bong tróc, giữ màu tốt sau nhiều lần giặt. Thiết kế cổ tròn đơn giản, dễ mặc và dễ phối đồ. Form áo vừa vặn, tôn dáng nam tính. Dễ dàng kết hợp với quần jean, quần kaki hoặc quần short. Phù hợp cho các hoạt động casual như đi chơi, dạo phố hoặc gặp gỡ bạn bè. Đa dạng màu sắc và họa tiết, giúp bạn thể hiện cá tính riêng.",
  },
  {
    id: 17,
    name: "Quần jean nam skinny",
    category: "men",
    image: p17_img,
    new_price: 75,
    old_price: 110,
    tag: ["Quần Jean", "Skinny"],
    season: "Thu",
    type: "Quần Jean",
    description:
      "Phong cách và ôm dáng với quần jean skinny. Dễ dàng mix&match, tạo nên vẻ ngoài trẻ trung, năng động. Chất liệu denim co giãn, thoải mái khi vận động. Thiết kế skinny ôm sát, tôn dáng nam tính. Màu wash cá tính, dễ dàng phối với nhiều loại áo khác nhau. Túi quần rộng rãi, tiện lợi đựng ví và điện thoại. Có thể kết hợp với áo thun, áo sơ mi hoặc áo khoác for a trendy look. Phù hợp cho cả những ngày đi làm casual hay những buổi hẹn hò cuối tuần.",
  },
  {
    id: 18,
    name: "Áo khoác dù nam có nón",
    category: "men",
    image: p18_img,
    new_price: 110,
    old_price: 160,
    tag: ["Áo Khoác Dù", "Có Nón"],
    season: "Xuân",
    type: "Áo Khoác",
    description:
      "Bảo vệ tối ưu với áo khoác dù có nón. Thiết kế hiện đại, chống nước tốt, phù hợp cho những ngày mưa gió. Chất liệu dù cao cấp, nhẹ nhàng nhưng bền bỉ. Mũ trùm đầu có thể tháo rời tiện lợi. Khóa kéo YKK chắc chắn, dễ dàng đóng mở. Có nhiều túi trong và ngoài tiện dụng. Thiết kế ôm vừa vặn, tôn dáng nam tính. Dễ dàng kết hợp với quần jean, quần kaki hoặc quần thể thao. Lý tưởng cho các hoạt động ngoài trời hoặc những chuyến du lịch.",
  },
  {
    id: 19,
    name: "Áo vest nam công sở",
    category: "men",
    image: p19_img,
    new_price: 180,
    old_price: 250,
    tag: ["Áo Vest", "Công Sở"],
    season: "Thu",
    type: "Áo Vest",
    description:
      "Đẳng cấp và chuyên nghiệp với áo vest công sở. Thiết kế tinh tế, tôn dáng hoàn hảo cho quý ông hiện đại. Chất liệu vải cao cấp, mềm mại, ít nhăn, giữ form tốt. Lớp lót bên trong mềm mịn, thoáng khí. Cầu vai được thiết kế chuẩn giúp áo luôn giữ được form dáng đẹp. Nút áo được may chắc chắn, không dễ bung rơi. Có thể kết hợp với quần âu, sơ mi trắng for a classic look. Phù hợp cho các buổi họp quan trọng, sự kiện formal hoặc những buổi tiệc sang trọng.",
  },
  {
    id: 20,
    name: "Quần short nam thể thao",
    category: "men",
    image: p20_img,
    new_price: 40,
    old_price: 60,
    tag: ["Quần Short", "Thể Thao"],
    season: "Hè",
    type: "Quần Short",
    description:
      "Thoải mái và năng động với quần short thể thao. Chất liệu polyester cao cấp, thoáng mát, co giãn tốt, phù hợp cho mọi hoạt động. Thiết kế lưng thun kèm dây rút, dễ dàng điều chỉnh độ rộng. Ống quần vừa phải, không quá ngắn, tạo cảm giác thoải mái khi vận động. Có túi zip bên hông tiện lợi, an toàn khi chạy bộ. Dễ dàng kết hợp với áo thun, áo tank top for a sporty look. Lý tưởng cho các hoạt động thể thao, dã ngoại hoặc những ngày hè năng động. Đa dạng màu sắc, dễ dàng lựa chọn theo sở thích.",
  },
  {
    id: 21,
    name: "Áo len nam cổ tròn",
    category: "men",
    image: p21_img,
    new_price: 65,
    old_price: 95,
    tag: ["Áo Len", "Cổ Tròn"],
    season: "Đông",
    type: "Áo Len",
    description:
      "Ấm áp và phong cách với áo len cổ tròn. Chất liệu len mềm mại, giữ ấm tuyệt vời cho những ngày đông lạnh. Thiết kế cổ tròn đơn giản, dễ mặc và dễ phối đồ. Form áo vừa vặn, tôn dáng nam tính. Đường dệt kim tinh tế, không xù lông sau nhiều lần giặt. Có thể mặc trực tiếp hoặc khoác ngoài áo sơ mi. Dễ dàng kết hợp với quần jean, quần kaki hoặc quần âu. Phù hợp cho cả những ngày đi làm hay những buổi hẹn hò cuối tuần. Đa dạng màu sắc, phù hợp với nhiều phong cách khác nhau.",
  },
  {
    id: 22,
    name: "Áo hoodie nam có khóa kéo",
    category: "men",
    image: p22_img,
    new_price: 80,
    old_price: 120,
    tag: ["Áo Hoodie", "Có Khóa Kéo"],
    season: "Thu",
    type: "Áo Hoodie",
    description:
      "Trẻ trung và cá tính với áo hoodie có khóa kéo. Thiết kế hiện đại, tiện lợi, phù hợp cho mọi hoạt động ngoài trời. Chất liệu nỉ cotton cao cấp, mềm mại, giữ ấm tốt. Mũ trùm đầu rộng rãi, có dây rút điều chỉnh. Khóa kéo YKK chắc chắn, dễ dàng đóng mở. Có túi kangaroo phía trước tiện lợi. Form áo rộng rãi, thoải mái, phù hợp nhiều vóc dáng. Dễ dàng kết hợp với quần jean, quần jogger for a casual look. Lý tưởng cho các hoạt động thể thao, dã ngoại hoặc những ngày se lạnh.",
  },
  {
    id: 23,
    name: "Quần tây nam ống côn",
    category: "men",
    image: p23_img,
    new_price: 90,
    old_price: 130,
    tag: ["Quần Tây", "Ống Côn"],
    season: "Xuân",
    type: "Quần Tây",
    description:
      "Lịch lãm và hiện đại với quần tây ống côn. Thiết kế ôm dáng vừa phải, tôn lên vóc dáng nam tính. Chất liệu vải cao cấp, mềm mại, ít nhăn, dễ giặt ủi. Kiểu dáng ống côn vừa thanh lịch vừa trẻ trung, phù hợp với xu hướng thời trang hiện đại. Lưng quần có đỉa, có thể đeo thắt lưng tạo vẻ chỉn chu. Túi quần được may kỹ lưỡng, không sợ bung chỉ. Dễ dàng kết hợp với áo sơ mi, áo polo hoặc áo vest. Phù hợp cho cả môi trường công sở lẫn những buổi gặp gỡ quan trọng.",
  },
  {
    id: 24,
    name: "Áo sơ mi nam tay dài",
    category: "men",
    image: p24_img,
    new_price: 60,
    old_price: 85,
    tag: ["Áo Sơ Mi", "Tay Dài"],
    season: "Thu",
    type: "Áo Sơ Mi",
    description:
      "Thanh lịch và chuyên nghiệp với áo sơ mi tay dài. Chất liệu cotton cao cấp, mềm mại, thấm hút mồ hôi tốt. Thiết kế cổ đứng, tay dài mang đến vẻ lịch lãm, chỉn chu. Form áo vừa vặn, tôn dáng nam tính. Cúc áo được may chắc chắn, không dễ bung rơi. Có thể kết hợp với quần tây, quần kaki hoặc quần jean. Dễ dàng mix&match từ phong cách công sở đến casual. Đa dạng màu sắc, phù hợp với nhiều sở thích và dịp khác nhau. Là item không thể thiếu trong tủ đồ của quý ông hiện đại.",
  },
  {
    id: 25,
    name: "Áo thun trẻ em in hình hoạt hình",
    category: "kid",
    image: p25_img,
    new_price: 25,
    old_price: 40,
    tag: ["Áo Thun", "Trẻ Em", "In Hình Hoạt Hình"],
    season: "Hè",
    type: "Áo Thun",
    description:
      "Đáng yêu và năng động với áo thun in hình hoạt hình cho trẻ em. Chất liệu cotton 100% mềm mại, an toàn cho làn da nhạy cảm của bé. Hình in sắc nét, không bong tróc, giữ màu tốt sau nhiều lần giặt. Thiết kế cổ tròn, tay ngắn thoải mái cho bé vận động. Form áo rộng rãi, phù hợp với sự phát triển của trẻ. Đa dạng họa tiết hoạt hình dễ thương, kích thích trí tưởng tượng của bé. Dễ dàng kết hợp với quần short, quần jean hoặc chân váy. Lý tưởng cho các hoạt động hàng ngày, đi học hoặc đi chơi cuối tuần.",
  },
  {
    id: 26,
    name: "Quần jean bé trai ống rộng",
    category: "kid",
    image: p26_img,
    new_price: 45,
    old_price: 65,
    tag: ["Quần Jean", "Ống Rộng"],
    season: "Thu",
    type: "Quần Jean",
    description:
      "Năng động và thoải mái với quần jean ống rộng cho bé trai. Chất liệu denim mềm mại, co giãn nhẹ, không gò bó khi bé vận động. Thiết kế ống rộng trendy, phù hợp với xu hướng thời trang hiện đại. Lưng quần có chun co giãn, dễ mặc và thoải mái. Túi quần rộng rãi, tiện lợi cho bé đựng đồ chơi nhỏ. Đường may chắc chắn, chịu được sự hiếu động của trẻ. Dễ dàng kết hợp với áo thun, áo polo hoặc áo sơ mi. Phù hợp cho cả những ngày đi học hay cuối tuần đi chơi cùng gia đình.",
  },
  {
    id: 27,
    name: "Váy công chúa bé gái",
    category: "kid",
    image: p27_img,
    new_price: 55,
    old_price: 80,
    tag: ["Váy Công Chúa"],
    season: "Xuân",
    type: "Váy",
    description:
      "Lộng lẫy và đáng yêu với váy công chúa cho bé gái. Chất liệu vải tuyn mềm mại, nhẹ nhàng, không gây kích ứng da bé. Thiết kế xòe bồng bềnh, tạo cảm giác như một nàng công chúa thực sự. Phần thân váy được đính sequin lấp lánh, thu hút mọi ánh nhìn. Lớp lót cotton mềm mại, thoáng khí, thoải mái khi mặc. Khóa kéo sau lưng dễ dàng mặc vào, cởi ra. Phù hợp cho các bữa tiệc sinh nhật, lễ hội ở trường hoặc những dịp đặc biệt. Giúp bé gái thêm tự tin và tỏa sáng trong mọi sự kiện.",
  },
  {
    id: 28,
    name: "Áo khoác trẻ em có mũ",
    category: "kid",
    image: p28_img,
    new_price: 70,
    old_price: 100,
    tag: ["Áo Khoác", "Trẻ Em", "Có Mũ"],
    season: "Đông",
    type: "Áo Khoác",
    description:
      "Ấm áp và dễ thương với áo khoác có mũ cho trẻ em. Chất liệu nỉ lót lông cừu mềm mại, giữ ấm tốt trong thời tiết lạnh. Thiết kế mũ liền áo có thể tháo rời, tiện lợi sử dụng. Khóa kéo YKK chắc chắn, dễ dàng đóng mở cho bé. Có nhiều túi tiện dụng để bé đựng đồ chơi nhỏ. Họa tiết in nổi bật, phù hợp với sở thích của trẻ. Cổ tay và gấu áo có chun co giãn, giữ ấm tốt hơn. Dễ dàng kết hợp với quần jean, quần kaki hoặc quần nỉ. Lý tưởng cho những ngày đông lạnh hoặc đi picnic cùng gia đình.",
  },
  {
    id: 29,
    name: "Bộ đồ thể thao trẻ em",
    category: "kid",
    image: p29_img,
    new_price: 50,
    old_price: 75,
    tag: ["Bộ Đồ Thể Thao", "Trẻ Em"],
    season: "Hè",
    type: "Bộ Đồ",
    description:
      "Năng động và thoải mái với bộ đồ thể thao cho trẻ em. Chất liệu cotton pha polyester, thấm hút mồ hôi tốt, thoáng mát. Áo cổ tròn, tay ngắn, quần short có dây rút điều chỉnh. Thiết kế rộng rãi, thoải mái cho bé vận động. Logo và họa tiết thể thao nổi bật, tạo phong cách năng động. Đường may chắc chắn, chịu được sự hiếu động của trẻ. Dễ dàng mặc vào, cởi ra, phù hợp với trẻ nhỏ. Lý tưởng cho các hoạt động thể thao, dã ngoại hoặc những ngày hè năng động. Đa dạng màu sắc, phù hợp cho cả bé trai và bé gái.",
  },
  {
    id: 30,
    name: "Áo sơ mi bé trai ngắn tay",
    category: "kid",
    image: p30_img,
    new_price: 35,
    old_price: 50,
    tag: ["Áo Sơ Mi", "Ngắn Tay"],
    season: "Xuân",
    type: "Áo Sơ Mi",
    description:
      "Lịch lãm và đáng yêu với áo sơ mi ngắn tay cho bé trai. Chất liệu cotton cao cấp, mềm mại, thấm hút mồ hôi tốt. Thiết kế cổ đứng, tay ngắn thoải mái cho bé vận động. Form áo vừa vặn, không quá rộng hay chật. Cúc áo được may chắc chắn, an toàn cho trẻ nhỏ. Có thể kết hợp với quần short, quần kaki hoặc quần jean. Phù hợp cho các dịp đi học, đi chơi hay những sự kiện quan trọng. Dễ dàng giặt ủi và bảo quản, tiện lợi cho phụ huynh. Đa dạng màu sắc và họa tiết, phù hợp với nhiều sở thích khác nhau.",
  },
  {
    id: 31,
    name: "Quần legging bé gái",
    category: "kid",
    image: p31_img,
    new_price: 30,
    old_price: 45,
    tag: ["Quần Legging"],
    season: "Thu",
    type: "Quần Legging",
    description:
      "Thoải mái và năng động với quần legging cho bé gái. Chất liệu cotton spandex co giãn tốt, ôm sát nhưng không gò bó. Thiết kế ôm chân, tôn dáng và dễ dàng vận động. Lưng quần có chun co giãn, thoải mái và dễ mặc. Độ dày vừa phải, không quá mỏng hay dày. Dễ dàng kết hợp với áo thun, áo sơ mi hoặc đầm suông. Phù hợp cho các hoạt động hàng ngày, đi học hoặc chơi thể thao. Đa dạng màu sắc và họa tiết, phù hợp với sở thích của bé gái. Dễ dàng giặt ủi và bảo quản, tiện lợi cho phụ huynh.",
  },
  {
    id: 32,
    name: "Áo len trẻ em cổ tròn",
    category: "kid",
    image: p32_img,
    new_price: 40,
    old_price: 60,
    tag: ["Áo Len", "Trẻ Em", "Cổ Tròn"],
    season: "Đông",
    type: "Áo Len",
    description:
      "Ấm áp và đáng yêu với áo len cổ tròn cho trẻ em. Chất liệu len mềm mại, không gây kích ứng da nhạy cảm của bé. Thiết kế cổ tròn đơn giản, dễ mặc và dễ phối đồ. Form áo vừa vặn, không quá rộng hay chật. Đường dệt kim tinh tế, không xù lông sau nhiều lần giặt. Có thể mặc trực tiếp hoặc khoác ngoài áo cotton mỏng. Dễ dàng kết hợp với quần jean, quần kaki hoặc chân váy. Phù hợp cho những ngày đông lạnh hoặc đi chơi cùng gia đình. Đa dạng màu sắc, phù hợp cho cả bé trai và bé gái.",
  },
  {
    id: 33,
    name: "Bộ đồ ngủ trẻ em",
    category: "kid",
    image: p33_img,
    new_price: 35,
    old_price: 50,
    tag: ["Bộ Đồ Ngủ", "Trẻ Em"],
    season: "Xuân",
    type: "Bộ Đồ Ngủ",
    description:
      "Thoải mái và dễ thương với bộ đồ ngủ cho trẻ em. Chất liệu cotton 100% mềm mại, thân thiện với làn da nhạy cảm của bé. Thiết kế áo cổ tròn, tay dài và quần dài thoải mái. Form rộng rãi, thoải mái cho bé vận động khi ngủ. Họa tiết in dễ thương, phù hợp với sở thích của trẻ. Cổ tay và cổ chân có chun co giãn, giữ ấm tốt, phù hợp cả bé nam và bé gái.",
  },
  {
    id: 34,
    name: "Áo khoác jean bé trai",
    category: "kid",
    image: p34_img,
    new_price: 60,
    old_price: 85,
    tag: ["Áo Khoác Jean"],
    season: "Thu",
    type: "Áo Khoác",
    description:
      "Áo khoác jean bé trai thời trang và bền bỉ, lý tưởng cho các bé trai năng động. Chất liệu jean cao cấp, dễ dàng phối với nhiều trang phục khác, mang đến phong cách mạnh mẽ và cá tính.",
  },
  {
    id: 35,
    name: "Đầm yếm bé gái",
    category: "kid",
    image: p35_img,
    new_price: 45,
    old_price: 65,
    tag: ["Đầm Yếm"],
    season: "Hè",
    type: "Đầm",
    description:
      "Đầm yếm bé gái dễ thương và thoải mái, hoàn hảo cho các bé trong mùa hè. Thiết kế yếm xinh xắn kết hợp với chất liệu vải mềm mại, giúp bé luôn cảm thấy thoải mái và tự tin.",
  },
  {
    id: 36,
    name: "Áo polo trẻ em",
    category: "kid",
    image: p36_img,
    new_price: 40,
    old_price: 60,
    tag: ["Áo Polo", "Trẻ Em"],
    season: "Xuân",
    type: "Áo Polo",
    description:
      "Áo polo trẻ em thanh lịch và thoải mái, phù hợp cho mọi dịp. Chất liệu vải cao cấp, mềm mại và thoáng mát, giúp bé luôn cảm thấy dễ chịu và tự tin trong mọi hoạt động.",
  },
];

export default all_products;
