var times = [new Date('2020-07-24 00:00:00'), new Date('2020-07-22 13:05:00'), new Date('2020-07-22 00:00:00'), new Date('2020-07-12 00:00:00')];
var content = ['СОБЫТИЕ 1', "СОБЫТИЕ 2", "СОБЫТИЕ 3", "СОБЫТИЕ 4"]

function StartScript()
{
	for (i = 0; i < times.length; i++)
	{
		document.querySelector(".ContentList").innerHTML += '<div class="Table' + i + '"><div class="TableTop" id="table' + i + '"></div><div class="TableInnerContent" id="tableContent' + i + '">CONTENT</div></div>';
		document.getElementById("tableContent" + i).innerHTML = content[i];
	}
	
	
	Seted();
}

function Seted() 
{
	var i;
	for (i = 0; i < times.length; i++)
	{
		var delta = times[i] - Date.now(); 
		var seconds = Math.abs(delta/1000);
		var d = Math.floor(seconds / (3600*24));
		var h = Math.floor(seconds % (3600*24) / 3600);
		var m = Math.floor(seconds % 3600 / 60);
		var s = Math.floor(seconds % 60);
		var display = (d > 9 ? d : "0" + d) + ":" + (h > 9 ? h : "0" + h) + ":" + (m > 9 ? m : "0" + m) + ":" + (s > 9 ? s : "0" + s);
		
		if (times[i] > Date.now())
		{
			document.getElementById("table" + i).innerHTML = "ДО СОБЫТИЯ" + "<br>" + display;
			document.querySelector(".Table" + i).style.marginTop = "40px";
			document.querySelector(".Table0").style.marginTop = "0px";
		}
		
		else if (times[i] < Date.now())
		{
			if (document.getElementById("table" + i) != undefined)
			{
				document.getElementById("table" + i).parentElement.remove();
			}
			
		}
	}
	if (document.querySelector(".ContentList").innerHTML == "")
	{
		document.querySelector(".ContentList").innerHTML = '<div style="position: relative; top: 40%;">НЕТ СОБЫТИЙ</div>';
	}
	
	setTimeout(Seted, 1000);
}

window.addEventListener("DOMContentLoaded", StartScript);