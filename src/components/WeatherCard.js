import React from "react"; 

function WeatherCard({humidity, 
    cloudiness, 
    cityName, 
    windspeed, 
    tempMax, 
    tempMin, 
    currentTemp, 
    weatherType}){
    return (
    <div className="WeatherCard">
        <h2>{cityName}</h2>
        <p>Weather Type: {weatherType} </p>
        <p>Humidity:{humidity}%</p>
        <p>Current Temp: {currentTemp}&deg;</p>
        <p>High: {tempMax}&deg;</p>
        <p>Low: {tempMin}&deg;</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>Wind Speed: {windspeed}mph</p>
    </div>

    );

}

export default WeatherCard; 