

let signin = (e) => {

    e.preventDefault();

    let data = JSON.parse(localStorage.getItem("visitors")) || [];
    let form = document.getElementById("form")

    let getEmail = form.email.value;
    let getPassword = form.password.value;

    data.forEach((el)=>{
     if(getPassword == el.password){

            alert("Login Successfully")

        }
        else{
            alert("Invaid Credentials")
        }

    })
}