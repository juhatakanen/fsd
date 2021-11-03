import React, { useState } from 'react'

const Display = ({ value, text, percent }) => {
  if (isNaN(value)) return <div>{text}0</div>
return <div>{text}{value}{percent}</div>
}

const Button = ({ handleClick, text }) => 
<button onClick={handleClick}>{text}</button>


const Statistics = ({ good, neutral, bad }) => {
return (
<div>
<h1>statistics</h1>
<Display text="good " value={good} />
<Display text="neutral " value={neutral} />
<Display text="bad " value={bad} />
<Display text="all " value={good + neutral + bad } />
<Display text="average " value={(good - bad) / (good + bad)} />
<Display text="positive " value={(good / (good + neutral + bad)) * 100 } percent={'%'} />
</div>
)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
