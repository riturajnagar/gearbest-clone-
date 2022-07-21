

function User(f,l,al,al2,c,s,ci,zi,p,e){

    this.first = f;
    this.last = l;
    this.addLine = al;
    this.adddLine2 = al2;
    this.country = c;
    this.state = s;
    this.city = ci;
    this.zipCode = zi;
    this.phone = p;
    this.email = e;

}

let confirm = (e) =>{

    e.preventDefault()

    let form = document.getElementById('formFill');

    let first = form.name.value;
    let last = form.lastName.value;
    let add1 = form.address.value;
    let add2 = form.address2.value;
    let country = form.country.value;
    let state = form.state.value;
    let city = form.city.value;
    let pin = form.pin.value;
    let phone = form.phone.value;
    let email = form.email.value;


    let user = new User(first,last,add1,add2,country,state,city,pin,phone,email)

    // let data = JSON.parse(localStorage.getItem("users")) || [];

    // data.push(user1)

    localStorage.setItem("users",JSON.stringify(user))

    console.log(user)

    alert("Address Successfully Saved")
    window.location.href = "./payment.html"

}
