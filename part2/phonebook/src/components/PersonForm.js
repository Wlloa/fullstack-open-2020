import React from 'react';

function PersonForm({newName, newNumber, setNewName, setNewNumber, setPersons, persons}) {

    const saveContact = (event) => {
        event.preventDefault();
        
        if (persons.some(person => person.name === newName)){
          alert(`${newName} is already in your phonebook`);
        }
        else {
          setPersons(persons.concat({name: newName, number: newNumber}));
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
