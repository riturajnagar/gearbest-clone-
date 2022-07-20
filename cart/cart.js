
let cont=document.getElementById("container")

let div=document.createElement("div")
div.setAttribute("class","box1")

let img=document.createElement("img")
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XDSlXLgGNhG3BV2xN7BnswolMUB6Iqs39g&usqp=CAU"


let p=document.createElement("p")
p.innerText="Your shopping cart is empty"

btn1=document.createElement("button")
btn1.innerText="Go shoping"
btn1.setAttribute("class","btn1")
btn1.addEventListener("click",function(){

window.location.href="wishList.html"
})

div.append(img,p,btn1)
cont.append(div)
