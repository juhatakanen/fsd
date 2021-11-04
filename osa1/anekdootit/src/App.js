import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code aleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [selected, setSelected] = useState(Math.floor(Math.random() * 7))
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])
  
  let random = Math.floor(Math.random() * 7)
  if (random === selected) {
    random++
    if (random === 7) {
      random-=2
    }
    if (random === -1) {
      random+=2
    }
  }
  
  let mostVotes = votes[0];
  let mostVotesIndex = 0;
  for (let i = 1; i < votes.length; i++) {
      if (votes[i] > mostVotes) {
           mostVotesIndex = i;
          mostVotes = votes[i];
        }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      has {votes[selected]} votes
      <div>
      <Button handleClick={() => {

        const copy = [
          ...votes
        ]
        copy[selected]++
        setVotes(copy)
        }
      }
      text='vote'/>
      <Button handleClick={() => setSelected(random)} text='next anecdote'/>
      </div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotesIndex]}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

export default App