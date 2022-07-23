import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import footer from "../components/footer.js";
document.querySelector("#footer").innerHTML = footer();
document.getElementById("icon").addEventListener("click", refresh);
document.getElementById("footer_logo").addEventListener("click", refresh);
function refresh() {
  window.location.href = "./index.html";
}
let data = [
  {
    id: "1",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_img-v1/ed230b4b2700.jpg",
    desc: "Original Xiaomi Mi Band 7 / 7 NFC Smart Wristband 1.62 inch",
    price: 48.99,
    prevPrice: 57.25,
  },
  {
    id: "2",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6926471294045319168/16529/goods_img-v1/8ad475fc01f3.jpg",
    desc: "WT09 Active Noise Cancelling Headphones Bluetooth 5.1",
    price: 18.72,
    prevPrice: "$20.25",
  },
  {
    id: "3",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16419/goods_img-v1/22549f61229b.jpg",
    desc: "Original Xiaomi Smart Magic Cube Bluetooth 3D Dynamic",
    price: 19.99,
    prevPrice: "$23.52",
  },
  {
    id: "4",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16539/goods_img-v1/7a6e1bdf0f46.jpg",
    desc: "Haylou RS4 smart watches Global version Blood oxygen",
    price: 49.99,
    prevPrice: "$56.23",
  },
  {
    id: "5",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16460/goods_img-v3/5b9d1b9f7836.jpg",
    desc: "ENGWE Bike C20 PRO Adult Electric Bike 36V19.2AH City",
    price: 1000.0,
    prevPrice: "$1200.00",
  },
  {
    id: "6",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_img-v1/126354806df6.jpg",
    desc: "Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For",
    price: 2.59,
    prevPrice: "$3.00",
  },
  {
    id: "7",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/6233d35f6f8a.jpg",
    desc: "Global Version MI 11 Ultra 6.3 inch Smartphone 12Gb Cell",
    price: 107.99,
    prevPrice: "$115.50",
  },
  {
    id: "8",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16545/goods_img-v3/49bbbbea2c5b.jpg",
    desc: "Xiaomi Fan 2 Smart Standing double layer fan blade Portable",
    price: 69.99,
    prevPrice: "$75.60",
  },
  {
    id: "9",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",
    desc: "2022 New Smartphone 7.3 Inch MIX4 72MP Camera Unlock",
    price: 114.3,
    prevPrice: "$120.00",
  },
  {
    id: "10",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16502/goods_img-v3/31d0d9d6c843.jpg",
    desc: "A9 Mini WiFi Video Surveillance 1080p HD Infrared Night Vision",
    price: 10.68,
    prevPrice: "$13.20",
  },
  {
    id: "11",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16519/goods_img-v1/ad5af71dbbf9.jpg",
    desc: "WalkingPad R2 Treadmill Smart APP LED Touch Panel Remote",
    price: 585.0,
    prevPrice: "$600.00",
  },
  {
    id: "12",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16488/goods_img-v1/78ad914ae7ca.jpg",
    desc: "4-color TFT screen Finger Clip Type Oximeter Pulse Oximetry",
    price: 15.92,
    prevPrice: "$17.69",
  },
  {
    id: "13",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_img-v3/a06e3d5ad873.jpg",
    desc: "Original Xiaomi Backpack 7L/10L/15L/20L Travel Light",
    price: 13.99,
    prevPrice: "$18.64",
  },
  {
    id: "14",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16488/goods_img-v5/b1790ebe72cd.jpg",
    desc: "Xiaomi Redmi Buds 3 Lite TWS Bluetooth 5.2 Earphone",
    price: 20.86,
    prevPrice: "$21.00",
  },
  {
    id: "15",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6898654298117435392/16531/goods_img-v1/ea9ddbe7643e.jpg",
    desc: "Xiaomi 2022 Bluetooth 5.0 Headsets Wireless Earphone",
    price: 9.9,
    prevPrice: "$13.00",
  },
  {
    id: "16",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6904007303549349888/16474/goods_img-v1/394534e30d4e.jpg",
    desc: "QIDI TECH X-MAX Large Size Intelligent Industrial Grade 3D",
    price: 949.0,
    prevPrice: "$1000.00",
  },
  {
    id: "17",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866331933228593152/16418/goods_img-v1/42f52c167490.jpg",
    desc: "Yeelight 1SE E27 6W RGBW AC 100 - 240V Smart LED Bulb",
    price: 24.99,
    prevPrice: "$29.00",
  },
  {
    id: "18",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16508/goods_img-v1/83e81faaf67b.jpg",
    desc: "V9 Wireless Bluetooth CSR V4.1 Headset Sports Headphone",
    price: 11.9,
    prevPrice: "$14.00",
  },
  {
    id: "19",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16486/goods_img-v1/965097e8a620.jpg",
    desc: "Aqara Smart Temperature Humidity Sensor Zigbee",
    price: 17.99,
    prevPrice: "$19.00",
  },
  {
    id: "20",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16456/goods_img-v1/937ce184d834.jpg",
    desc: "Midea S8+ Robot Vacuum Cleaner for Home Electrolysis",
    price: 1260.23,
    prevPrice: "$1500.00",
  },
  {
    id: "21",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16498/goods_img-v5/eca3dcc2ab20.jpg",
    desc: "L900 PRO 5G WIFI FPV Foldable GPS RC Drone Quadcopter with",
    price: 86.99,
    prevPrice: "$100.78",
  },
  {
    id: "22",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16465/goods_img-v1/8fc8853ff3b3.jpg",
    desc: "Xiaomi Redmi Airdots 3 TWS wireless Bluetooth 5.2",
    price: 19.99,
    prevPrice: "$22.00",
  },
  {
    id: "23",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16516/goods_img-v3/ce8cec017eca.jpg",
    desc: "Original Xiaomi Mitu Cubes Spinner Finger Bricks",
    price: 9.99,
    prevPrice: "$12.00",
  },
  {
    id: "24",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_img-v5/2f380d04f8f3.jpg",
    desc: "Original Xiaomi Mi Airdots Air 2 SE TWS Bluetooth Earphone",
    price: 25.99,
    prevPrice: "$30.00",
  },
  {
    id: "25",
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16204/goods_img-v1/95b7727db8f7.jpg",
    desc: "Mijia Honeywell Fire Alarm Smoke Detector Sensor Audible",
    price: 39.99,
    prevPrice: "$45.00",
  },
];

let cart_ls = JSON.parse(localStorage.getItem("cart_ls")) || [];

let display = (data) => {
  let box = document.querySelector("#gcontainer");
  box.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      localStorage.setItem("cart_item", JSON.stringify(el));
      // window.location.href = '';
      
    });
    div.setAttribute("class", "gitem");
    let img = document.createElement("img");
    img.src = el.image;
    let desc = document.createElement("p");
    desc.innerText = el.desc;
    let price = document.createElement("p");
    price.innerText = "$ " + el.price;
    let prevPrice = document.createElement("p");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "prev");
    let hr = document.createElement("hr");
    hr.setAttribute("class", "disc");
    prevPrice.innerText = el.prevPrice;
    div1.append(prevPrice, hr);
    let cart = document.createElement("img");
    cart.setAttribute("id", "gcartbtn");

    cart.src = "https://cdn-icons-png.flaticon.com/128/4290/4290854.png";
    cart.addEventListener("click", function () {
      cart_ls.push(el);
      localStorage.setItem("cart_ls", JSON.stringify(cart_ls));
      alert("Item Succesfully Added");
    });
    div.append(img, desc, price, div1, cart);

    box.appendChild(div);
  });
};
display(data);


let bag = document.getElementById('bag');
bag.innerText = cart_ls.length;
      console.log(cart_ls.length);


      let flag = JSON.parse(localStorage.getItem("flag"));
let ptag = document.getElementById("sign_in");
let details = JSON.parse(localStorage.getItem("visitors"));
console.log(details)
if (flag == "true") {
  ptag.innerText = details[0].email;
}