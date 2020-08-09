var times = [new Date('2020-08-24 00:00:00'), new Date('2020-08-26 13:05:00'), new Date('2020-08-26 00:00:00'), new Date('2020-08-28 00:00:00')];
var content = ['МНЕ НЕЧЕГО ДЕЛАТЬ ;-)', "СКУЧНА", "АААААААА СЛОЖНА", "*_*"]
var elem = document.createElement("img");
elem.setAttribute("src", "img/clock.svg");
elem.setAttribute("height", "100%");
elem.setAttribute("alt", "clock");

function StartScript()
{
	for (i = 0; i < times.length; i++)
	{
		document.querySelector(".Content").innerHTML += '<div class="Event"><div class="EventTimeAll"><div class = "EventTimeLogo"></div></div><div class="EventTime" id = "e' + i + '">00:00:00</div><div class ="EventName" id = "name' + i + '">EVENT</div></div>';
		document.getElementById("name" + i).innerHTML = content[i];
		document.getElementsByClassName('EventTimeLogo')[i].appendChild(elem);
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
			document.getElementById("e" + i).innerHTML = display;

		}

		else if (times[i] < Date.now())
		{
			if (document.querySelector("Event" + i) != undefined)
			{
				document.querySelector("Event" + i).parentElement.remove();
			}

		}
	}
	if (document.querySelector(".Content").innerHTML == "")
	{
		document.querySelector(".Content").innerHTML = '<div style="position: relative; top: 40%;">НЕТ СОБЫТИЙ</div>';
	}

	setTimeout(Seted, 1000);
}

window.addEventListener("DOMContentLoaded", StartScript);
