import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const url = 'https://restcountries.eu/rest/v2/name'
  const [countries, setCountries] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    if (name){

      axios.get(`${url}/${name}`)
      .then(response => {
        const data = response.data
        console.log(data)
        setCountries(data)
      })
    }
  }, [name])


  return (
    <div className="App">
      find countries <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <div>
        {
          countries.length > 10 ?
          (<p>Too many matches, specify another filter</p>)
          :
          countries.length > 1 ?
          countries.map(country => (
          <p key={country.numericCode}>{country.name}</p>
        ))
        :
        countries.length === 1 ?
        (
          <div>
            <h2>{countries[0].name}</h2>
            <p>capital: {countries[0].capital}</p>
            <p>population: {countries[0].population}</p>
            <h3>languages</h3>
            <u>
              {countries[0].languages.map(lang => (
                <li>{lang.name}</li>
              ))}
            </u>
            <img style={{width:'80px', height:'80px'}} src={countries[0].flag} alt=""/>
          </div>
        ):
        ''
        }
      </div>
    </div>
  );
}

export default App;
