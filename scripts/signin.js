
document.getElementById("icon").addEventListener("click", refresh);

function refresh() {
  window.location.href = "../index.html";
}
let signin = (e) => {

    e.preventDefault();

    let data = JSON.parse(localStorage.getItem("visitors")) || [];
    let form = document.getElementById("form")

    let getEmail = form.email.value;
    
    let getPassword = form.password.value;

    data.forEach((el)=>{
     if(getPassword == el.password && getEmail == el.email){

            alert("Signin Successfully")
            localStorage.setItem('flag',JSON.stringify('true'));
            window.location.href = './index.html';

        }
        else{
            alert("Invaid Credentials")
        }

    })
}
