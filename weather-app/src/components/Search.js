import React, {useEffect, useState} from "react";
import Temp from "./Temp";
import "./Search.css";

// making Search component
const Search = () => {

    const [searchValue, setSearchValue] = useState("bangaluru");
    const [tempInfo, setTempInfo] = useState({});

    const getSearchResult = async () => {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2199348a8864947f9d91d8a504a9378b`;
            let response = await fetch(url);
            const data = await response.json();
            const {  temp, humidity, pressure } = data.main;
            const{ main: weathermood} = data.weather[0];
            const{name} = data;
            const{speed} = data.wind;
            const{country,sunset} = data.sys;

            const newData ={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };
            
            setTempInfo(newData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect( () =>{
        getSearchResult();
    },[] );

    return(
    <>
        <div className="container">
            <div className="search-container">
                <div className="search">
                    <input type="search" placeholder="Search City..." autoFocus id="search" className="search-bar" value={ searchValue} onChange={ (e) => setSearchValue(e.target.value)} />
                    <button type="button" className="search-button" onClick={getSearchResult()}>Search</button>
                </div>
            </div>
            {/* Temp Component */}
            <Temp tempInfo={tempInfo}/>
        </div>
    </>
    );
    
};

export default Search;