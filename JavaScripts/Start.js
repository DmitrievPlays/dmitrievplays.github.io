function StartTime()
{ const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря" ];
var date = new Date();
var hr = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var day = date.getDate();
var year = date.getFullYear();
if(m < 10) { m = "0" + m }
if(s < 10) { s = "0" + s }
document.querySelector(".textTime").innerHTML = day + " " + monthNames[date.getMonth()] + " " + year + ", " + hr + ":" + m + ":" + s;



if (document.querySelector(".line").getBoundingClientRect().left < 50)
{
  document.querySelector(".startScreen").style.opacity = 0;
  document.querySelector(".startScreen").style.pointerEvents = "none";
<<<<<<< HEAD
=======
  document.querySelector(".startScreen").classList.remove("startScreen");
>>>>>>> dfed40553cf975f009b072934e0b709fa9142132
}
setTimeout("StartTime()", 500)}
window.addEventListener("DOMContentLoaded", StartTime)
