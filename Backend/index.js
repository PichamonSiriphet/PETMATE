const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mysql = require("mysql")
require("dotenv").config()

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.get("*", (req, res) => {
    res.json({
        data:"massege from server"
    })
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`start server in port ${port}`))