//SIDE BAR MENU
function openNav() {
	document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
	//document.getElementById("main").onclick="openNav()" &#9776; MENU;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	
	document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}