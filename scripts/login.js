

function Visitor(e,p,rp,t){

    this.emali = e;
    this.password = p;
    this.retype = rp;
    this.text = t;

}


let register = (e) => {

    e.preventDefault()

    let form = document.getElementById('form')

    let email = form.email.value;
    let password = form.password.value;
    let retype = form.password2.value;
    let text = form.captch.value

    let visitor = new Visitor(email,password,retype,text)
    
    let data = JSON.parse(localStorage.getItem("visitors")) || [];

    data.push(visitor)
  
    if(retype != password){
        alert("Password Dosen't Match");
    }
    if(retype === password){
       

        localStorage.setItem("visitors",JSON.stringify(data));
        window.location.href = './signin.html'

    }

    console.log(visitor)
}