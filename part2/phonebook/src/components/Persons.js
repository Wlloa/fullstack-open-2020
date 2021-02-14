import React from 'react'
import personService from '../services/person'

function Persons({persons, setPersons}) {

    const deletePerson = (id) => {
        const person = persons.find(person => person.id === id)
        if (person && window.confirm(`Delete ${person.name}`)){
            personService.deletePerson(id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== id ))
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