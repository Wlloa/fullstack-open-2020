import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const url = "http://localhost:3002/persons"

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setPersons(response.data)
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
          <Persons persons={persons}/>
    </div>
  )
}

export default App