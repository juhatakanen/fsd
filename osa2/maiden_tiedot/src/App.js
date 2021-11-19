import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  return (
    <div className="App">
      <h3>Countries:</h3>
      <Countries countries={countries}/>
    </div>
  );
}

export default App;
