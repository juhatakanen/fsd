import React from "react";
import App from "../App";

const Country = ({ country, setSearch }) => {
    return (
        <div>
        <p>
            {country} <button onClick={() => {
                setSearch(country)}}>show</button>
            
        </p>
        </div>
    )
}

export default Country