function myFunction() {
	if(document.getElementById('tagBox').style.display == 'block')
		document.getElementById('tagBox').style.display = 'none';

	else
	{
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
	if(name=="")
		alert("Name must be filled out");
	checkNum(num); 
	validate(email);
}
function checkNum(num)
{
	var mLen = num.length;
	if(mLen!=10)
		return alert("Please enter a valid number");
	else
	{
		for(var i=0;i<10;i++)
		{
			if(num[i]<48 && num[i]>57)
				return alert("Please enter a valid number");
		}
	}
	return true;
}
function validate(email) {

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (reg.test(email) == false) 
            {
                alert('Invalid Email Address');
                return (false);
            }
 }