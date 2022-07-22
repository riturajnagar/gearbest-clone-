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
  btn.innerText = "Add To Cart";
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