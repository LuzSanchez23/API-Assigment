//mapquest key: 	i9JTL9YIvAvksDSCDCxwG5oOA54PGap7

const apiUrl = "//open.mapquestapi.com/directions/v2/route?key=i9JTL9YIvAvksDSCDCxwG5oOA54PGap7&from=Parker Blvd,Centennial,CO&to=2400+S+Glebe+Rd,+Arlington,+VA"

fetch (apiURL)
.then((response) => response.json())
.then((mapInfo) => {
    console.log(mapInfo);

    document.getElementById("place").innerHTML=weatherInfo.name;
    document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
    document.getElementById("feels").innerHTML=weatherInfo.main.feels_like;
    document.getElementById("windSped").innerHTML=weatherInfo.wind.speed;
    document.getElementById("humid").innerHTML=weatherInfo.main.humidity;
    document.getElementById("sunny").innerHTML=weatherInfo.sys.sunrise;

    const iconcode= weatherInfo.weather[0].icon;
    console.log(iconcode); //optional to test code
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path); //optional to test code

    document.getElementById("weatherIcon").src= icon_path;
    //document.getElementById("sun").innerHTML=weatherInfo.sys.sunrise;
    
});