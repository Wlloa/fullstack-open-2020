import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/person'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const url = "http://localhost:3002/persons"

  useEffect(() => {
    personService.getAll()
    .then(contacts => {
      setPersons(contacts)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons ={persons} setPersons={setPersons}/>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons ={setPersons}
        />
      
      <h2>Numbers</h2>
          <Persons persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App