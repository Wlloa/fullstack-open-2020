import React from 'react';
import person from '../services/person';
import personService from '../services/person'
import { NotificationType } from './Notification';

function PersonForm({newName, newNumber, setNewName, setNewNumber, setPersons, persons, setMessage}) {
    const saveContact = (event) => {
        event.preventDefault();
        
        const duplicated = persons.find(person => person.name === newName)
        if (duplicated){
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)){

                personService.update(duplicated.id, {...duplicated, number:newNumber})
                .then(response => {
                    console.log(response)
                    setPersons(persons.map(person => person.id !== response.id ? person : response))
                })
            }
          //alert(`${newName} is already in your phonebook`);
        }
        else {
          personService.create({name: newName, number: newNumber})
          .then(newContact => {
              setPersons(persons.concat(newContact))
              setMessage({message: `Added ${newName}`, type: NotificationType.success})
              setTimeout(() => {
                setMessage(null)
              }, 5000);
          })     
        }
        setNewName('');
        setNewNumber('');
      }

    return (
        <div>
            <form onSubmit={saveContact}>
                <h2>add a new</h2>
                <div>
                    name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
