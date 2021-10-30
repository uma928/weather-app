import React from "react";
import "./Temp.css";


const Temp = ({tempInfo}) => {

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    }= tempInfo;

    // converting sec into time
    let sec = sunset;
    let date = new Date(sec*1000);
    let time = `${date.getHours()}:${date.getMinutes()}`;

    return(
        <>
            <div className="weather-container">
                <div className="weather-logo">
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="weather-info">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="detail">
                        <div className="weather-condition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>
                <div className="date">{ new Date().toLocaleString() }</div>

                {/* extra info */}
                <div className="extra-info">
                    <div className="info">
                        <div className="temp-info">
                            <i className={"wi wi-day-sunny"}></i>
                        </div>
                        <div className="temp-info">
                            {time} PM <br/>
                            Sunset
                        </div>
                    </div>
                    <div className="info">
                        <div className="temp-info">
                            <i className={"wi wi-humidity"}></i>
                        </div>
                        <div className="temp-info">
                            {humidity} <br/>
                            Humidity
                        </div>
                    </div>
                    <div className="info">
                        <div className="temp-info">
                            <i className={"wi wi-barometer"}></i>
                        </div>
                        <div className="temp-info">
                            {pressure} <br/>
                            Pressure
                        </div>
                    </div>
                    <div className="info">
                        <div className="temp-info">
                            <i className={"wi wi-wind-beaufort-0"}></i>
                        </div>
                        <div className="temp-info">
                            {speed} <br/>
                            Speed
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Temp;