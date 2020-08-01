opened = false;
function openNav() {
	if(opened == false)
	{
		document.getElementById("mySidebar").style.minWidth = "180px";
		document.getElementById("mySidebar").style.width = "25%";
		document.getElementById("mySidebar").style.paddingLeft = "10px";
		document.getElementById("mySidebar").style.paddingRight = "10px";
		opened = true;
	}
	else if(opened == true)
	{
		document.getElementById("mySidebar").style.minWidth = "0px";
		document.getElementById("mySidebar").style.width = "0%";
		document.getElementById("mySidebar").style.paddingLeft = "0px";
		document.getElementById("mySidebar").style.paddingRight = "0px";
		opened = false;
	}
}