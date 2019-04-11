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