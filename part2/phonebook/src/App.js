import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import Notification, {NotificationType} from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)
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
      <Notification notificacion={notification} />
      <Filter persons ={persons} setPersons={setPersons}/>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons ={setPersons}
        setMessage = {setNotification}
        />
      
      <h2>Numbers</h2>
          <Persons persons={persons} setPersons={setPersons} setMessage={setNotification}/>
    </div>
  )
}

export default App