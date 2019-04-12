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
