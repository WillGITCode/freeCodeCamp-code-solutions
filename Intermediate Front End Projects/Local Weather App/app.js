var apiKey = "5ebecb6e329fcb2122696ba6de66ad65";

$(function() {

    var loc;
    var count = 0;

    $.getJSON('http://ipinfo.io', function(data) {
        loc = data.loc.split(",");
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + loc[0] + '&lon=' + loc[1] + '&APPID=' + apiKey, function(weatherData) {
            console.log("got it", weatherData);
            var weatherDescr = weatherData.weather[0].description;
            var temp = weatherData.main.temp;
            var tempC = temp - 273.15;
            tempC = Math.round(tempC * 100) / 100;
            var tempF = temp * 9 / 5 - 459.67;
            tempF = Math.round(tempF * 100) / 100;
            var city = weatherData.name;
            var hum = weatherData.main.humidity;
            var icon = weatherData.weather[0].icon;



            $('#city').html(city);
            $('#temp').html(tempC + "C");
            $('#weatherDescr').html(weatherDescr);
            $('#hum').html(hum + "%hum");

            var iconaddress = "http://openweathermap.org/img/w/" + icon + ".png";
            $('#temp').prepend('<img src="' + iconaddress + '">');

            var even = function(num) {
                return (num % 2 === 0) ? true : false;
            };

            $('#tempToggle').click(function() {
                count++;
                if (even(count) === false) {
                    $('#temp').html(tempF + "F");
                    var iconaddress = "http://openweathermap.org/img/w/" + icon + ".png";
                    $('#temp').prepend('<img src="' + iconaddress + '">');
                } else if (even(count) === true) {
                    $('#temp').html(tempC + "C");
                    var iconaddress = "http://openweathermap.org/img/w/" + icon + ".png";
                    $('#temp').prepend('<img src="' + iconaddress + '">');

                }
            })

        })

    })
});
