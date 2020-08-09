var p = -40;
var d = 0;
function toggleMenu() {
	p = -1 * (p + 40);
	d = -1 * (d + 180);
	document.querySelector('.menu').style.bottom = p + "vh";
	document.querySelector('#arrow').style.transform = 'rotate('+ d +'deg)'
}
