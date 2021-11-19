import React from "react";
import '../index.css'

const Country = ({ country }) => {
const languagesObject = country[0].languages
const languagesArray = Object.values(languagesObject);
    return (
        <div>
            <h1>{country[0].name.common}</h1>
            <ul>
                <li>capital {country[0].capital}</li>
                <li>region {country[0].region}</li>
            </ul>
            <h2>Languages</h2>
            <ul>
                {languagesArray.map(language => <li>{language}</li>)}
            </ul>
            <div className='flag'>{country[0].flag}</div>
        </div>
    )
}

export default Country