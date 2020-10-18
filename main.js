var user_name="Michael"

function setTime() {
    var date = new Date();
    var cur_hour=date.getHours();
    var cur_min=date.getMinutes();
    if(cur_hour>12){
        cur_hour=cur_hour-12;
    }
    if(cur_min<10){
        cur_min="0"+cur_min;
    }
    var cur_time= cur_hour+":"+cur_min;
    document.getElementById("time_container").innerHTML = cur_time;
}

function setWelcomeState(){
    var wel_state=document.getElementById("welcome_statement");
    var day_section;
    var date = new Date();
    var cur_hour=date.getHours();
    if(cur_hour<12){
        day_section="morning";
    }
    else{
        day_section="afternoon";
    }
    wel_state.innerHTML="Good "+day_section+", "+user_name;
}

function setBackground(){
    var bg_url;
    var random_num=Math.floor(Math.random() * Math.floor(4))
    bg_url="url('./bg/bg"+random_num+".jpg')";
    document.getElementById("main_container").style.backgroundImage=bg_url;
    
}

function getWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=0e2429ffd198ba345f154ef33801e6df", {
        "method": "GET"
    })
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
        var weather_description=data.weather[0].main;
        var iconurl;
        console.log(weather_description);
        switch(weather_description) {
            case "Clear":
                iconurl = "./weather/sunny.png"
                break;
            case "Clouds":
                iconurl = "./weather/cloudy.png"
                break;
            default:
             
          }
        document.getElementById("temp").innerHTML=data.main.temp.toFixed(0);
        document.getElementById("weather_icon").src=iconurl;
    })
    .catch(err => {
        console.log(err);
    });
}



setTime();
setWelcomeState();
setBackground();
getWeather();

