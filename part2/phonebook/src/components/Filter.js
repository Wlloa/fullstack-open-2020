import React, {useState} from 'react'

function Filter({persons, setPersons}) {
  const [query, setQuery ] = useState('');

    const filterHandler = event => {
        //event.preventDefault();
        setQuery(event.target.value);
        let queryPersons = persons.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase()); 
        })
        setPersons(queryPersons)
    }

    return (
        <div>
            filter shown with: <input type="text" value={query} onChange={filterHandler}/>
        </div>
    )
}

export default Filter
