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