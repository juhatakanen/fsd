import React from "react";
import Country from "./Country";
import Countrylist from "./Countrylist";

const Countries = ({ countriesToShow, setSearch }) => {
    if (countriesToShow.length > 10 || countriesToShow.length === 0) {
        return (
            <>
            <p>Too many matches, specify another filter</p>
            </>
        )
    } else if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
    return (
        <ul>
            {countriesToShow.map(country => <Countrylist key={country.name.common} country={country.name.common} setSearch={setSearch}/>)}
        </ul>
        )
    } else {
        return (
            <div>
            <Country key={countriesToShow[0].name.common} country={countriesToShow}/>
            </div>
        )
    }  
}

export default Countries