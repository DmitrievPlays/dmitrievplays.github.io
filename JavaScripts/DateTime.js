
function gettime()
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
 document.getElementById("TimeClock").innerHTML = hr + ":" + m + ":" + s; 
 document.getElementById("DateTable").innerHTML = day + " " + monthNames[date.getMonth()] + " " + year; 
setTimeout("gettime()", 1000) } 