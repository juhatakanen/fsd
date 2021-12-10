const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :req[content-length] - :response-time ms :body'));

let persons = [
          { 
            "name": "Arto Hellas", 
            "number": "040-123456",
            "id": 1
          },
          { 
            "name": "Ada Lovelace", 
            "number": "39-44-5323523",
            "id": 2
          },
          { 
            "name": "Dan Abramov", 
            "number": "12-43-234345",
            "id": 3
          },
          { 
            "name": "Mary Poppendieck", 
            "number": "39-23-6423122",
            "id": 4
          }
]

app.get('/info', (req, res) => {
  const date = new Date()
    res.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    
    response.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * 100000000)
}

app.post('/api/persons', (request, response) => {
  const personToAdd = request.body
  const namesInArray = persons.map(p => p.name)
  if (!personToAdd.name || !personToAdd.number) {
    return response.status(400).json({ 
      error: 'name or number missing missing' 
    })
  }
  if (namesInArray.includes(personToAdd.name)) {
    return response.status(400).json({ 
      error: 'name already in phonebook' 
    })
  }

  const person = {
    name: personToAdd.name,
    number: personToAdd.number,
    id: generateId(),
  }
  persons = persons.concat(person)
  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
