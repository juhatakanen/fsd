import React, { useState } from 'react'

const Display = (props) => {
  if (isNaN(props.value)) return <div>{props.text}0</div>
return <div>{props.text}{props.value}{props.percent}</div>
}

const Button = (props) => (<button onClick={props.handleClick}>{props.text}</button>)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const percent = '%'
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Display text="good " value={good} />
      <Display text="neutral " value={neutral} />
      <Display text="bad " value={bad} />
      <Display text="all " value={good + neutral + bad } />
      <Display text="average " value={(good - bad) / (good + bad)} percent={percent} />
      <Display text="positive " value={(good / (good + neutral + bad)) * 100 } percent={percent} />
    </div>
  )
}

export default App
