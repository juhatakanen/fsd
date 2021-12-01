import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const countriesToShow = search.length === 0
  ? countries
  : countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="App">
      <Filter search={search} handleSearchChange={handleSearchChange}/>
      <Countries countriesToShow={countriesToShow} setSearch={setSearch}/>
    </div>
  );
}

export default App;
