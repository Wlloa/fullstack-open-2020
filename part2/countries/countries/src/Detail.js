import React from 'react'

function Detail({country}) {
    return (
        <div>
            {country ? 
            (
                <div>
                    <h2>{country.name}</h2>
                    <p>capital: {country.capital}</p>
                    <p>population: {country.population}</p>
                    <h3>languages</h3>
                    <u>
                        {country.languages.map(lang => (
                            <li>{lang.name}</li>
                        ))}
                    </u>
                    <img style={{width:'80px', height:'80px'}} src={country.flag} alt=""/>
                </div>
            ): ''}
            
        </div>
    )
}

export default Detail
