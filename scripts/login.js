

function Visitor(e,p,rp,t){

    this.emali = e;
    this.password = p;
    this.retype = rp;
    this.text = t;

}

function random(){

    let random = document.getElementById("randomNum");
    let showNum = document.createElement('h3');

    showNum.innerText = Math.floor(Math.random() * 100000) + 1; 

    random.append(showNum)
}
random()


let register = (e) => {

    e.preventDefault()

    let form = document.getElementById('form')
    let captcha = document.getElementById("randomNum").value;

    let email = form.email.value;
    let password = form.password.value;
    let retype = form.password2.value;
    let randomText = document.getElementById("randomNum").value

    let visitor = new Visitor(email,password,retype,randomText)
    
    let data = JSON.parse(localStorage.getItem("visitors")) || [];

    data.push(visitor)
  
    if(retype != password){
        alert("Some thing went worng!!!");
    }
    if(retype === password){
       

        localStorage.setItem("visitors",JSON.stringify(data));
        window.location.href = './signin.html'

    }

    console.log(visitor)
}
