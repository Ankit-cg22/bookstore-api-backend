const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.urlencoded({extended :  true}))
app.use(express.json())
app.use(cors({origin:'*'}))

app.get('/' , (req , res) => {
    res.send("Welcome to Bookstore API.")
})

const PORT = process.env.PORT
app.listen(PORT , () => console.log(`Server running on port : ${PORT} ..`)) 