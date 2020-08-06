function net(){
var intElemOffsetHeight = document.querySelector(".ThePageTitle").offsetHeight;

document.querySelector(".Content").style.marginTop = document.querySelector(".ThePageTitle").offsetHeight + "px";
console.log(document.querySelector(".ThePageTitle").offsetHeight + "px");

if (document.querySelector(".White") == undefined && window.innerWidth < 460)
	document.querySelector("body").innerHTML += '<div class="White" style="position: relative; width: 100%; height: 100vh; background: #bbb; z-index: 1000;"><div style="position: fixed; top: 50%; display: block; font-size: calc(2vw + 2vh); white-space: normal;">СЛИШКОМ НИЗКОЕ РАЗРЕШЕНИЕ</div></div>';

if (window.innerWidth > 460 && document.querySelector(".White") != undefined)
	document.querySelector(".White").remove();
}

window.addEventListener("resize", net);
window.addEventListener("DOMContentLoaded", net);
