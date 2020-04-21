// Import needed libraries
const Express = require('express')

const app = new Express()

app.use((req, res, next) => {
  console.log(`${req.method} at ${req.path}`)
  next() // goes on to any other responses for this request
})

const staticMiddleware = Express.static('./public')
app.use('/', staticMiddleware)

// Listen on port 3000 for http requests
app.listen(3000) // listens on port 3000, should be near the bottom
console.log('Listening on localhost, port 3000')
