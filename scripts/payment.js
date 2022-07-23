document.getElementById("icon").addEventListener("click", refresh);

function refresh() {
  window.location.href = "./index.html";
}
let append2 = ()=> {

    let data = JSON.parse(localStorage.getItem("users")) || [];
    let append2= document.getElementById("append2")
    append2.innerHTML = null;

    

        let add = document.createElement("h4");
        add.innerText = data.addLine
        let country = document.createElement("h4");
        country.innerText = data.country
        let state = document.createElement("h4");
        state.innerText = data.state

        append2.append(add,country,state)
        


}
append2()

let append1 = () => {

    let orderId = document.getElementById("append1")
    let id =  document.createElement("h4");
    id.innerText = Math.floor(Math.random() * 1000000000000) + 1;

    orderId.append(id)

}
append1()