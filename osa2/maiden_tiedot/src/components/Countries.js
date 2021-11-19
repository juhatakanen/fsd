import React from "react";
import Country from "./Country";

const Countries = ({ countriesToShow }) => {
    console.log(countriesToShow);
    return (
        <ul>
            {countriesToShow.map(country => <Country key={country.name.common} country={country.name.common}/>)}
        </ul>
    )
}

export default Countries