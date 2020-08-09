var city=document.getElementById("search");
var button=document.getElementById("searchbutton");

button.addEventListener("click" , function(){
	var request= new XMLHttpRequest();
	request.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=0ca412830cb30b338b6dcfae48451f84&units=metric");
	request.onload=function(){
		var data=JSON.parse(request.responseText);
		if(request.status==404){
			window.alert("City not found")
		}
		show(data);
		console.log(data.name);
	}
	request.send();
});

function show(data){
	var faurenheit=(data.main.temp*1.8 + 32);
	var icon=data.weather[0].icon;
	var url="http://openweathermap.org/img/w/"+icon+".png";
	var elem=document.createElement("img");
	elem.setAttribute("src",url);
	elem.setAttribute("class","animated fadeInUp");
	elem.setAttribute("id","icon-img");
	
	
	if(document.getElementById("place").children[0]!=null){
		document.getElementById("place").children[0].remove();
	}

	if(document.getElementById("icon-img")!=null){
		document.getElementById("icon-img").remove();
	}

	if(document.getElementById("temp").children[1]!=null){
		document.getElementById("temp").children[1].remove();
	}
	
	if(document.getElementById("wind").children[1]!=null){
		document.getElementById("wind").children[1].remove();
	}
	
	if(document.getElementById("Weather").children[1]!=null){
		document.getElementById("Weather").children[1].remove();
	}

	document.getElementById("place").insertAdjacentHTML('beforeend',"<p class='animated fadeInUp'>"+data.name+"</p>");
	document.getElementById("temp").insertAdjacentHTML('beforeend',"<h3 class='animated fadeIn'>"+data.main.temp+"&#8451;<br>"+faurenheit+"&#8457;</h3>");
	document.getElementById("wind").insertAdjacentHTML('beforeend',"<h3 class='animated fadeIn'> Speed:&nbsp;"+data.wind.speed+"&nbsp;mph<br><br>Angle:&nbsp;"+data.wind.deg+"&nbsp;CW</h3>");
	document.getElementById("Weather").insertAdjacentHTML('beforeend',"<h3 class='animated fadeIn'>"+data.weather[0].main+"</h3>");
	document.getElementById("icon").appendChild(elem);
}
