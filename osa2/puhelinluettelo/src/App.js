import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch] = useState('')
  const [ message, setMessage] = useState(null)


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const personsToShow = search.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const filtered = persons.filter(p => p.name === newName)
    
    if (filtered.length > 0) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = { ...filtered[0], number: newNumber }
      
        personService
          .update(filtered[0].id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
            setMessage({
              message: `Updated ${returnedPerson.name}`,
              className: 'success'
            }
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            setMessage({
              message: `Information of '${newName}' has already been removed from server`,
              className: "failure"
            }
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          }) 
          setPersons(personsToShow.filter(p => p.id !== filtered[0].id))       
      }
    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage({
          message: `Added ${returnedPerson.name}`,
          className: 'success'
        }
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter filter={search} handleSearchChange={handleSearchChange}/>
        <h3>Add a new</h3>
      <PersonForm addPerson={addPerson}
      newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )
}

export default App