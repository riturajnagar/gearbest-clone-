import footer from "../components/footer.js";
// console.log(footer)
document.getElementById("footer").innerHTML = footer();

document.getElementById("icon").addEventListener("click", refresh);
document.getElementById("footer_logo").addEventListener("click", refresh);
function refresh() {
  window.location.href = "./index.html";
}

let order_item = JSON.parse(localStorage.getItem("cart_ls"));
console.log(order_item);

// var order_item
//       = [
//     {
//         id:"1",
//         image:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_img-v1/ed230b4b2700.jpg",
//         desc:"Original Xiaomi Mi Band 7 / 7 NFC Smart Wristband 1.62 inch",
//         price:"48.99",
//         prevPrice:"57.25",
//     },
//     {
//         id:"2",
//         image:"https://gloimg.gbtcdn.com/soa/gb/item/6926471294045319168/16529/goods_img-v1/8ad475fc01f3.jpg",
//         desc:"WT09 Active Noise Cancelling Headphones Bluetooth 5.1",
//         price:"18.72",
//         prevPrice:"20.25",
//     },]
//     console.log(order_item)
if (order_item === undefined || order_item.length === 0) {
  let cont = document.getElementById("container");

  let div = document.createElement("div");
  div.setAttribute("class", "box1");

  let img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XDSlXLgGNhG3BV2xN7BnswolMUB6Iqs39g&usqp=CAU";

  let p = document.createElement("p");
  p.innerText = "Your shopping cart is empty";

  let btn1 = document.createElement("button");
  btn1.innerText = "Go shoping";
  btn1.setAttribute("class", "btn1");
  btn1.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  div.append(img, p, btn1);
  cont.append(div);
} else {
  //     var total_sub  =[];

  //    var total_priceData =[];

  let cont = document.getElementById("container");
  cont.innerHTML = null;
  mapData(order_item);

  function mapData(order_item) {
    order_item.forEach(function (elm, index) {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      let img = document.createElement("img");
      let divs = document.createElement("div");

      let ptag1 = document.createElement("p");

      let ptag3 = document.createElement("p");

      ptag1.innerText = elm.desc;

      ptag3.innerText = "size" + " - " + getRandomIntInclusive(1, 9);

      td1.setAttribute("class", "ptag");

      ptag3.setAttribute("class", "merge");

      td1.append(img);
      td1.append(divs);
      td1.append(ptag1);

      td1.append(ptag3);

      divs.append(ptag1, ptag3);
      img.setAttribute("src", elm.image);
      img.setAttribute("id", "img_siz");

      let td2 = document.createElement("td");
      let ptag5 = document.createElement("p");
      ptag5.innerText = "$" + elm.price;
      let ptag6 = document.createElement("p");
      ptag6.innerText = elm.prevPrice;
      ptag6.style.textDecoration = "line-through";
      td2.append(ptag5);
      td2.append(ptag6);

      let td3 = document.createElement("td");
      td3.innerText = 1;

      let td4 = document.createElement("td");
      td4.innerText = "$" + elm.price;
      td4.setAttribute("class", "subtotal");

      let td5 = document.createElement("td");

      let ptag7 = document.createElement("p");
      let ptag8 = document.createElement("p");
      ptag7.setAttribute("class", "merge");
      ptag8.setAttribute("class", "merge");

      ptag7.innerText = "Delete";
      ptag7.style.color = "red";
      ptag7.style.cursor = "pointer";
      ptag7.setAttribute("class", "deleteText");
      ptag7.addEventListener("click", function () {
        deleteItem(elm, index);
      });
      ptag8.innerText = "Favourite";
      ptag8.style.color = "green";
      ptag8.style.cursor = "pointer";
      ptag8.setAttribute("class", "deleteText");
      ptag8.addEventListener("click", () => {
        let arr = JSON.parse(localStorage.getItem("favourites")) || [];
        arr.push(elm);
        localStorage.setItem("favourites", JSON.stringify(arr));
        window.location.reload();
      });

      td5.append(ptag7);
      td5.append(ptag8);

      tr.append(td1, td2, td3, td4, td5);
      document.querySelector("tbody").append(tr);

      function deleteItem(elm, index) {
        event.target.parentNode.remove();
        order_item.splice(index, 1);
        localStorage.setItem("cart_ls", JSON.stringify(order_item));
        window.location.reload();
      }
    });
  }

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < order_item.length; i++) {
    let save = order_item[i].prevPrice.trim().split("");
    let save1 = save.slice(1, save.length - 1).join("");

    sum1 = sum1 + Number(order_item[i].price);
    sum2 = sum2 + Number(save1);
  }

  let t_save = Math.ceil(sum2 - sum1);

  document.querySelector(".totalPrice").innerText = "$" + Math.ceil(sum1);
  document.querySelector(".offer").innerText = "$" + Math.ceil(t_save);

  document.querySelector(".paytotal").innerText = "$" + Math.ceil(sum1);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  let bill = {
    your_subtotal: Math.ceil(sum1),
    saving: Math.ceil(t_save),
    Total: Math.ceil(sum1),
  };
  console.log(bill);
  localStorage.setItem("order_bill", JSON.stringify(bill));
}


