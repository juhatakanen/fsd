import React from 'react'
import Person from './Person'
import personService from '../services/persons'


const Persons = ({ personsToShow, setPersons, setMessage }) => {
  const deletePerson = id => {
    const person = personsToShow.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
  
    personService
    .deletePerson(person.id)
    .then(response => {
      setPersons(personsToShow.filter(n => n.id !== person.id))
    })
    .catch(error => {
      setMessage(
        `Information of '${person.name}' has already been removed from server`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
    setPersons(personsToShow.filter(p => p.id !== id))
  }
}
  return (
    <ul>
      {personsToShow.map(person => <Person key={person.name} person={person} deletePerson={() => deletePerson(person.id) }/>)}
      </ul>
    )
}
export default Persons

