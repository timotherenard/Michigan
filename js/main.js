





function resmenu(){
	navmenu=document.getElementByID("divheadlink")
	if navmenu.classname=="headlink"{
		navmenu.className="responsivemenu";
	}
	else{
		menuoff();
	}
}

function menuoff(){
	document.getElementsByClassName("responsivemenu")[0].className="headlink";
}