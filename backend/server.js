import express from 'express'
import cors from 'cors'


// const express = require('express')
// const app = express()

// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Server is running 🚀')
// })

// const PORT = 5000
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })









const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from Express!" })
})

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))


