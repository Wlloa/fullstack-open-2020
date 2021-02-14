import React from 'react'
import personService from '../services/person'
import { NotificationType } from './Notification'

function Persons({persons, setPersons, setMessage}) {

    const deletePerson = (id) => {
        const person = persons.find(person => person.id === id)
        if (person && window.confirm(`Delete ${person.name}`)){
            personService.deletePerson(id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== id ))
            })
            .catch(error => {
                setMessage({message:`Information of ${person.name} has already been removed from server`, type: NotificationType.error})
                setPersons(persons.filter(person => person.id !== id))
                setTimeout(() => {
                    setMessage(null)
                }, 5000);
            })
        }
    }

    return (
        <div>
            {persons.map(person => (
                <div>
                {person.name}: {person.number}
                <button onClick={()=>deletePerson(person.id)}>Delete</button>
                </div>

            ))}
        </div>
    )
}

export default Persons