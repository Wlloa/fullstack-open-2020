import React from 'react';
import Part from "./Part";

const Content = ({ parts }) => {

    const total = () => {
       return parts.map(part => part.exercises).reduce((acc, curr) => { 
            return acc + curr
        })
    }

    return (
      <div>
        {parts.map(part => (
            <Part key={part.id} part = {part}/>
        ))}
        <p>Total of {total()} exercises</p>
      </div>
    )
  }

export default Content;