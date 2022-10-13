import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
//Importing the individual icon
import 
{ faCloud, 
faSun, 
faUmbrella,
faBolt, 
faSnowflake, 
faSmog} 
from '@fortawesome/free-solid-svg-icons';

function WeatherIcon({weatherType}) {
    switch (weatherType){
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} />;
        case "Rain":
        case "Drizzle":
            return <FontAwesomeIcon icon={faUmbrella} />;
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} />;
        case 'Thunderstorm':
            return <FontAwesomeIcon icon={faBolt} />;
        case 'Mist':
            return <FontAwesomeIcon icon={faSmog} />
        default:
            return <FontAwesomeIcon icon={faSun} />;
    };
    return(
        <div>
        </div>
    )


}

export default WeatherIcon;