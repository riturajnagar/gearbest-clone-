import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

// importing footer
import footer from "../components/footer.js";

document.getElementById("footer").innerHTML = footer();

document.getElementById("icon").addEventListener("click", refresh);
document.getElementById("footer_logo").addEventListener("click", refresh);
function refresh() {
  window.location.href = "./index.html";
}
let cart_ls = JSON.parse(localStorage.getItem('cart_ls'));
let bag = document.getElementById('bag');
bag.innerText = cart_ls.length;
      console.log(cart_ls.length);



var cartData = JSON.parse(localStorage.getItem("cart_item"));
console.log(cartData);

var data = [];
data.push(cartData)

data.map(function (el, index) {
  var box = document.createElement("div");
  var box1 = document.createElement("div");

  var img = document.createElement("img");
  img.src = el.image;

  var name = document.createElement("p1");
  name.innerText = el.desc;

  var price = document.createElement("p");
  price.innerText = `MRP ${el.prevPrice}`;

  var btn = document.createElement("button");
  btn.innerText = "Go To Cart";
  btn.addEventListener("click", function () {
    addToCart(el, index);
  });

  box.append(img);
  box1.append(name, price, btn);

  document.querySelector("#image").append(box);
  document.querySelector("#productInfo").append(box1);
});

function addToCart(elem, index) {
  console.log(elem, index);
  console.log(cartData);

  localStorage.setItem("cart_item", JSON.stringify(cartData));
  window.location.reload();
}

let flag = JSON.parse(localStorage.getItem("flag"));
let ptag = document.getElementById("sign_in");
let details = JSON.parse(localStorage.getItem("visitors"));
console.log(details)
if (flag == "true") {
  ptag.innerText = details[0].email;
}