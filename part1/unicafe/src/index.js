import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClickHandler, btnText}) => {
  return (
      <button onClick = {onClickHandler}>{btnText}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>    
  )
}

const Statistics = ({good, neutral, bad}) => {

  const getAvg = () => {
    let mapedValues = good * 1 + neutral * 0 + bad * -1;
    let total = good + neutral + bad;
    if (total > 0) {
      return mapedValues/(good + neutral + bad);
    }
    return 0;
  }

  const getPercent = () => {
    let total = good + neutral + bad;
    if (good > 0) {
      let percent = (good / total) * 100;
      return `${percent} %`;
    }
    return '0 %';
  }

  return (
    <div>
        {
          (good + neutral + bad === 0)?(<p>No feedback given</p>):(
          <>
            <h2>statistics</h2>
            <table>
              <tbody>
                <Statistic text={'good'} value={good}/>
                <Statistic text={'neutral'} value={neutral}/>
                <Statistic text={'bad'} value={bad}/>
                <Statistic text={'all'} value={good + neutral + bad}/>
                <Statistic text={'average'} value={getAvg()}/>
                <Statistic text={'positive'} value={getPercent()}/>
              </tbody>
            
            </table>
            
          </>
           
        )
        }
        
    </div>
  )

}

const App = ()=> {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClickHandler = {() => setGood(good + 1)} btnText = {'good'}/> 
        <Button onClickHandler = {() => setNeutral(neutral + 1)} btnText = {'neutral'}/> 
        <Button onClickHandler = {() => setBad(bad + 1)} btnText = {'bad'}/>
      </div>
      <Statistics good={good} neutral = {neutral} bad ={bad}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
