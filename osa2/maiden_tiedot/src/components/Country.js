import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {

const [ temperature, setTemperature ] = useState("")
const [ wind, setWind ] = useState("")
const [ picture, setPicture ] = useState("")

const languagesArray = Object.values(country[0].languages)
const flagsArray = Object.values(country[0].flags)
const api_key = process.env.REACT_APP_API_KEY

useEffect(() => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country[0].capital}`)
    .then(response => {
      setTemperature(response.data.current.temperature)
      setWind(response.data.current.wind_speed)
      setPicture(response.data.current.weather_icons[0])
      ;
    })
  }, [])


    return (
        <div>
            <h1>{country[0].name.common}</h1>
            <div>
                <p>capital {country[0].capital}<br></br>
                region {country[0].region}</p>
            </div>
            <h2>Languages</h2>
            <ul>
                {languagesArray.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={flagsArray[0]} alt='The flag of the country'/>
            <h2>Weather in {country[0].capital}</h2>
            <p>temperature {temperature}</p>
            <img src={picture}></img>
            <p>wind {wind}</p>
        </div>
    )
}

export default Country