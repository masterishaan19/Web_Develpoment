function myFunction() {
	if (document.getElementById('tagBox').style.display == 'block')
		document.getElementById('tagBox').style.display = 'none';

	else {
		document.getElementById('tagBox').style.display = 'block';
	}
}
function myFunction2(x) {
	if (x.matches) { // If media query matches
		document.getElementById('tagBox').style.display = "none";
	}
}

var x = window.matchMedia("(min-width: 900px)")
myFunction2(x) // Call listener function at run time
x.addListener(myFunction2) // Attach listener function on state changes

function validateForm() {
	var name = document.forms["myForm"]["uName"].value;
	var num = document.forms["myForm"]["phoneNum"].value;
	var email = document.forms["myForm"]["eMail"].value;
	if (name == "")
		alert("Name must be filled out");
	checkNum(num);
	validate(email);
}

function validateLoginForm() {
	var name = document.forms["loginForm"]["loginFeild"].value;
	var pass = document.forms["loginForm"]["pwdFeild"].value;
	if (name == "") {
		alert("Name must be filled out");
		return false
	}
	else if (pass == "") {
		alert("password must be filled")
		return false;
	}
	return true;
}

function checkNum(num) {
	var mLen = num.length;
	if (mLen != 10)
		return alert("Please enter a valid number");
	else {
		for (var i = 0; i < 10; i++) {
			if (num[i] < 48 && num[i] > 57)
				return alert("Please enter a valid number");
		}
	}
	return true;
}
function validate(email) {

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	//var address = document.getElementById[email].value;
	if (reg.test(email) == false) {
		alert('Invalid Email Address');
		return (false);
	}
}

//function to display message and then fade out it
function Timer() {
	var myVar = setInterval(myTimer, 20);
	var d = 1;
	function myTimer() {
		d = d - .01;
		if (d < 0) {
			clearInterval(myVar)
		}
		if (document.getElementById("msg") == null) {
			clearInterval(myVar)
		}
		else {
			document.getElementById("msg").style.opacity = d;
		}
	}
	myTimer();
}

function selectCateg(x, y) {
    var chng = document.getElementsByClassName("chng");
    var rect = x.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    //var toShow = document.getElementById(x.id+'g')
    var toHide = document.getElementsByClassName("gridItem");
    chng[0].style.display = 'inline-block';
    var len = toHide.length;
    /*for(var i=0; i<len; i++){
        if(toHide[i].id != x.id)
            toHide[i].style.opacity = 0.0;
    }*/
    document.getElementById("choose").innerHTML = "SELECTED " + y;
}

function goBack() {
    var toHidee = document.getElementsByClassName("gridItem");
    var toHide = document.getElementsByClassName("catg");
    for(var i=0; i<toHide.length; i++){
        toHide[i].style.display = 'none';
    }
    var chng = document.getElementsByClassName("chng");
    document.getElementById("choose").innerHTML = "CHOOSE A CATEGORY";
    chng[0].style.display = 'none';
    var len = toHidee.length;
    for(var i=0; i<len; i++){
        toHidee[i].style.opacity = 1.0;
    }
}
