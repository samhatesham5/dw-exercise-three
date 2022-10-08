import React from "react"; 

function WeatherCard({
    humidity, 
    cloudiness, 
    cityName, 
    windspeed, 
    tempMax, 
    tempMin, 
    currentTemp, 
    weatherType,
    weatherIcon, 
    }){
    
    {/*Setting weathertype to lowercase*/}
    const lowerType = weatherType && weatherType.toLowerCase(); 

    {/*Changing the syntax of the sentence based on conditions*/}
    let introSen = "It's";

    {/*Some special cases where "There are" doesn't make sense*/}
    if (weatherType === "Snow" || weatherType === "Drizzle" || weatherType === "Rain" || weatherType === "Mist") {
        introSen = "There is"

    }
    else if (cloudiness > 5) {
        introSen = "There are"
    };
    return (
    <div className="weatherCard">
        <div className="row currentWeather">
            <p>{currentTemp}&deg;</p>
            <img src= {`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="image of weather"/>
        </div>
        <div className="row subHeader">
            <h2 className="subHalf">{introSen} {lowerType} in </h2>
            <h2 className="cityName">{cityName}</h2>
        </div>
        <div className="row otherValues">
            <p>High: {tempMax}&deg;</p>
            <p>Low: {tempMin}&deg;</p>
            <p>Cloudiness: {cloudiness}%</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {windspeed}mph</p>
        </div>
    </div>

    );

}

export default WeatherCard; 