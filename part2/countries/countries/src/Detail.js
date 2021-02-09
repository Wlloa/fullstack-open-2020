import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Detail({country}) {

    const api_key = process.env.REACT_APP_API_KEY
    //const api_key = '4a5f6f5a877659e56fdbb190c519bac3';
    const url = 'http://api.weatherstack.com/current'

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios.get(`${url}?access_key=${api_key}&query=${country.capital}`)
        .then(response => {
            console.log(response)
            setWeather(response.data.current)
        })

    }, [])

    return (
        <div>
            {country ? 
            (
                <div>
                    <h2>{country.name}</h2>
                    <p>capital: {country.capital}</p>
                    <p>population: {country.population}</p>
                    <h3>languages</h3>
                    <u>
                        {country.languages.map(lang => (
                            <li>{lang.name}</li>
                        ))}
                    </u>
                    <img style={{width:'80px', height:'80px'}} src={country.flag} alt=""/>
                    <h2>Weather in {country.capital}</h2>
                    <p>temperature: {weather?.temperature} Celcius</p>
                    <img src={weather?.weather_icons[0]} alt=""/>
                    <p>wind: {weather?.wind_speed} direction {weather?.wind_dir}</p>
                </div>
            ): ''}
            
        </div>
    )
}

export default Detail
