import React from "react";

const Country = ({ country }) => {
const languagesArray = Object.values(country[0].languages)
const flagsArray = Object.values(country[0].flags)
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
        </div>
    )
}

export default Country