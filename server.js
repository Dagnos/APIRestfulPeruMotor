const express = require('express')
// require route handlers.
// they will all include the same connection pool
const userRouter = require('./routes/user')

// generic express stuff
const app = express()

// ...
app.use('/user', userRouter)

app.get("/", function(req, res) {
    res.json({ message: "genial! bienvenido a nuestra api!" });
});


// No need to connect the pool
// Just start the web server

const server = app.listen(process.env.PORT || 3000, () => {
  const host = '10.22.3.29'
  const port = 3000

  console.log(`listening at http://${host}:${port}`)
})