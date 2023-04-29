const apiKey ="2a28845766ec80281f735b9e30c7e560";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".icon");

async function checkWeather (city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".err").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) ;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML=data.wind.speed +"Km/hr";
    
    if(data.weather[0].main =="Clouds"){
        icon.src ="images/Weather-No-Background.png";
    }
    else if (data.weather[0].main =="Rain"){
        icon.src ="images/drizzle.png";
    }
    else if (data.weather[0].main =="Drizzle"){
        icon.src ="images/drizzle.png";
    }
    else if (data.weather[0].main =="Mist"){
        icon.src ="images/mist.png";
    }
    else if (data.weather[0].main =="Clear"){
        icon.src ="images/clear.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".err").style.display = "none";
}}

searchBtn.addEventListener("click", ()=>{ 
     checkWeather(searchBox.value);

})
