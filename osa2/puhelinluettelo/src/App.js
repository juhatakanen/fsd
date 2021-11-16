import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]) 
  const [ newName, setNewName ] = useState('')

  return (
    <div>
      {/* <div>debug: {persons}</div> */}

      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => <Person key={persons.length + 1} person={person.name}/>)}
      </ul>
    </div>
  )

}

export default App