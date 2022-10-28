const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.urlencoded({extended :  true}))
app.use(express.json())
app.use(cors({origin:'*'}))

app.get('/' , (req , res) => {
    res.send("Welcome to Bookstore API.")
})

const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(error));