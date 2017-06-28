//their location
/*var Geo={};

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success,error);
}else {
	alert('Geolocation is not supported');
}

function error() {
	alert("That's weird! We couldn't find you!");
}

function success(position) {
    Geo.lat = position.coords.latitude;
    Geo.lng = position.coords.longitude;
    var newrequest= new XMLHttpRequest();
	newrequest.open("GET","http://api.openweathermap.org/data/2.5/weather?lat="+Geo.lat+"&lon="+Geo.lng+"&appid=0ca412830cb30b338b6dcfae48451f84&units=metric");
	newrequest.onload=function(){
		var data=JSON.parse(newrequest.responseText);
		show(data);console.log(data.name);
	}
	newrequest.send();
}*/

var city=document.getElementById("search");
var button=document.getElementById("searchbutton");

button.addEventListener("click" , function(){
	var request= new XMLHttpRequest();
	request.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=0ca412830cb30b338b6dcfae48451f84&units=metric");
	request.onload=function(){
		var data=JSON.parse(request.responseText);
		show(data);console.log(data.name);
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
	document.getElementById("place").insertAdjacentHTML('beforeend',"<p class='animated fadeInUp'>"+data.name+"</p>");
	document.getElementById("temp").insertAdjacentHTML('beforeend',"<h3 class='animated fadeIn'>"+data.main.temp+"&#8451;<br>"+faurenheit+"&#8457;</h3>");
	document.getElementById("wind").insertAdjacentHTML('beforeend',"<h3 class='animated fadeIn'> Speed:&nbsp;"+data.wind.speed+"&nbsp;mph<br><br>Angle:&nbsp;"+data.wind.deg+"&nbsp;CW</h3>");
	document.getElementById("Weather").insertAdjacentHTML('beforeend',"<h3 class='animated fadeIn'>"+data.weather[0].main+"</h3>");
	document.getElementById("icon").appendChild(elem);
}

