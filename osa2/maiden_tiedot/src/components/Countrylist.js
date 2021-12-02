import React from "react";

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