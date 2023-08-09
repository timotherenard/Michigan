

function responsivemenu(){
	if (document.getElementById("navigationbar").className=="passive"){
	document.getElementById("navigationbar").className="active";
	}
	else{
		document.getElementById("navigationbar").className="passive";
	}
}

function menuoff(){
	document.getElementById("navigationbar").className="passive";
}