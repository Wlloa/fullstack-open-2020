import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Detail from './Detail'

function App() {

  const url = 'https://restcountries.eu/rest/v2/name'
  const [countries, setCountries] = useState([])
  const [name, setName] = useState('')
  const [countryDetail, setCountryDetail] = useState(undefined)

  useEffect(() => {
    console.log(process.env)

    if (name){
      axios.get(`${url}/${name}`)
      .then(response => {
        const data = response.data
        console.log(data)
        setCountries(data)
        if(data.length === 1){
          setCountryDetail(data[0])
        }
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
            <div>
               <p key={country.numericCode}>{country.name}</p>
               <button onClick={()=> setCountryDetail(country)}>View</button>
               
           </div>
        ))
        :
        ''
        }
        {countryDetail? (<Detail country={countryDetail}/>):""}
      </div>
    </div>
  );
}

export default App;
