//Import the express library and assign it to a variable
import randomWords from 'random-words'
import express from 'express'


// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/randomWords', (req, res) => {
  const Words = randomWords()
  console.log(Words);

  res.send(Words)
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})

