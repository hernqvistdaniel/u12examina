const express = require('express')

const app = express()
const connectDB = require('./config/db')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const auth = require('./routes/api/auth')
const posts = require('./routes/api/posts')

app.use(express.json({ extended: false }))

connectDB()

app.get('/', (req, res) => res.send('API running!'))

app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/auth', auth)
app.use('/api/posts', posts)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`
***
Server is up and running at: ${PORT}
***
`)
)
