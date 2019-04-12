function divide() {
    let num = parseInt(document.getElementById("num_1").value);
    let denom = parseInt(document.getElementById("num_2").value);
    let quotient = 0;
    let remainder = 0;
    quotient = Math.floor(num/denom);
    remainder = num%denom;
    document.getElementById("quotient").value = quotient;
    document.getElementById("remainder").value = remainder;
}

function displayDigit(){
    let num = document.getElementById("num").value;
    num = parseInt(num);
    let str = "";
    do{
        let digit = num%10;
        str += digit + " ";
        num = Math.floor(num/10);
    }
    while(num > 0)
    let newstr = "";
    for(let i=str.length-1; i>=0; i--){
        newstr += str[i];
    }
    document.getElementById("ans").innerHTML = newstr;
}

function validate(){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let tele  = document.forms['clgForm']['tel'].value;
    let email = document.forms['clgForm']['email'].value;
    if(tele == ""){
        alert("telephone number must be filled");
        return false;
    }
    else if(email == ""){
        alert("email address must be filled")
        return false
    }
    if(tele.length > 10 || tele.length < 10){
        alert("telephone number must be of 10 digit");
        return false;
    }
    for(let i=0; i<tele.length; i++){
        if(tele[i] < '0' || tele[i] > '9'){
            alert("please enter a valid number");
            return false;
        }
    }
    if (reg.test(email) == false) {
		alert('Invalid Email Address');
		return (false);
    }
    return true;
}