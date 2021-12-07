import React from 'react'
import Person from './Person'
import personService from '../services/persons'


const Persons = ({ personsToShow, setPersons }) => {
  const deletePerson = id => {
    const person = personsToShow.find(p => p.id === id)
  
    personService
    .deletePerson(person.id)
    setPersons(personsToShow.filter(p => p.id !== id))
  }
  return (
    <ul>
      {personsToShow.map(person => <Person key={person.name} person={person} deletePerson={() => deletePerson(person.id) }/>)}
      </ul>
    )
}
export default Persons

