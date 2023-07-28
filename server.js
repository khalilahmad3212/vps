const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.listen(5000, console.log(`http://localhost:5000/`))