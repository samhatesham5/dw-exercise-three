import React from "react"; 
import WeatherIcon from "./WeatherIcon.js"; 

function WeatherCard({
    humidity, 
    cloudiness, 
    cityName, 
    windspeed, 
    tempMax, 
    tempMin, 
    currentTemp, 
    weatherType, 
    }){
    
    {/*Setting weathertype to lowercase*/}
    const lowerType = weatherType && weatherType.toLowerCase(); 

    {/*Changing the syntax of the sentence based on conditions*/}
    let introSen = "";

    {/*Some special cases where "There are" doesn't make sense*/}
    if (weatherType === "Clouds")
        introSen = "There are";
    else if(weatherType=== "Thunderstorm")
        introSen = "There is a";
    else if (weatherType === "Clear")
        introSen = "It's";
    else {
        introSen = "There is";
    };

    {/*}
    switch(weatherType){
        case "Clouds":
            introSen = "There are";
        case "Thunderstorm":
            introSen = "There is a";
        case "Clear":
            introSen = "It's";
        default:
            introSen = "There is";
    };
*/}

    {/*Changing background color based on temperature*/}

    if (currentTemp <= 60) {
        document.body.style.backgroundColor = `#534C4B`;
    }
    else {
        document.body.style.backgroundColor = "#DFF3FF";
    }

    return ( 
    <div className="weatherCard">
        <div className="row currentWeather">
            <p>{currentTemp}&deg;</p>
            <WeatherIcon weatherType = {weatherType}/> 
        </div>
        <div className="row subHeader">
            <h2 className="subHalf">{introSen} {lowerType} in </h2>
            <h2  className="cityName">{cityName}</h2>
        </div>
        <div className="row otherValues">
            <div className="row row1">
                <p>High: {tempMax}&deg;</p>
                <p>Low: {tempMin}&deg;</p>
            </div>
            <div className="row2"> 
                <p>Cloudiness: {cloudiness}%</p>
                <p>Humidity: {humidity}%</p>
                <p>Wind Speed: {windspeed}mph</p>
            </div>
        </div>
    </div>
    );

}

export default WeatherCard; 