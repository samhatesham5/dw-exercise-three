import React, {useEffect, useMemo, useState} from "react";
import {WEATHER_APP_API_KEY} from "../API_KEYS";
import axios from "axios";
import WeatherCard from "../components/WeatherCard.js";
import { useSearchParams} from "react-router-dom";
import Header from "../components/Header.js";

//Quering Orlando with Fahranheit temps

function Home() {
    //Value stored in weatherData(as the default) is an empty object
    const [weatherData, setWeatherData] = useState({});
    //Value stored in city (as the default) is a string "orlando"
    const [city, setCity] = useState("New York City");
    const [searchParams] = useSearchParams();

useEffect(()=> {
    //Use our default city ("Orlando") if we don't have a city in the search bar to get
    const cityToQuery = searchParams.get("city") || city;
    setCity(cityToQuery);

    axios
    //Now the value of openWeatherURL is stored in here
    //Stored it here
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`)
    .then (function(response){
        //If there's a succesful response, acesses weather data
        setWeatherData(response.data);
    })
    //.catch if there's an issue
    .catch(function(error) {
        console.warn(error);
        setWeatherData({});
    })
}, []);

const { 
    cloudiness, 
    humidity, 
    windspeed, 
    tempMax, 
    tempMin, 
    cityName, 
    currentTemp,
    weatherType, 
    weatherIcon, 
    } = useMemo(()=> {
    //Set weatherMain to the value of weather main OR make it an empty object
    const weatherMain = weatherData.main || {};
    return {
        //First time we run weather data, it's an empty object so 
        cityName: weatherData.name,
        cloudiness: weatherData.clouds && weatherData.clouds.all, 
        weatherType: weatherData.weather && weatherData.weather[0].main,
        humidity: weatherMain.humidity,
        tempMax: Math.round(weatherMain.temp_max),
        tempMin: Math.round(weatherMain.temp_min),
        currentTemp: Math.round(weatherMain.temp),
        windspeed: weatherData.wind && weatherData.wind.speed,
        weatherIcon: weatherData.weather && weatherData.weather[0].icon,
    };
}, [weatherData]);

 //3- Display weather data in our app
    console.log("Weather:", weatherData);

return (
    <div className="wholePage"> 
        <Header/>
        <WeatherCard 
        cityName = {cityName}
        humidity={humidity}
        cloudiness={cloudiness}
        windspeed = {windspeed}
        tempMax = {tempMax}
        tempMin = {tempMin}
        currentTemp = {currentTemp}
        weatherType = {weatherType}
        weatherIcon = {weatherIcon}
        />
        <footer>
            <p>Sam Whitley - Dynamic Web - 2022</p>
        </footer>
    </div>

    );
}

export default Home; 