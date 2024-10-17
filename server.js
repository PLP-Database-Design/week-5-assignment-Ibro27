const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv')


const app = express()
dotenv.config()

// create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
// test the connection
db.connect((err) => {
    // connection not successful
    if(err) {
        return console.log("Error connecting to MySQL", err)
    }

    // connection successful
    console.log("MySQL connection successful")
})

// Question 1 goes here
app.get('/get-patients', (req, res) => {
    const getPatients = "SELECT * FROM patients"

    db.query(getPatients, (err, results) => {
        // have an error
        if(err) {
            return res.status(500).send("Failed to fetch the patients")
        }

        // get back the data/results
        res.status(200).send(results)
    })
})


// Question 2 goes here
app.get('/get-providers', (req, res) => {
    const getProviders = "SELECT * FROM providers"

    db.query(getProviders, (err, results) => {
        // have an error
        if(err) {
            return res.status(500).send("Failed to fetch the providers")
        }

        // get back the data/results
        res.status(200).send(results)
    })
})


// Question 3 goes here
app.get('/get-patients', (req, res) => {
    const getPatients = "SELECT first_name  FROM patients"

    db.query(getPatients, (err, results) => {
        // have an error
        if(err) {
            return res.status(500).send("Failed to fetch the patients")
        }

        // get back the data/results
        res.status(200).send(results)
    })
})


// Question 4 goes here

app.get('/get-providers', (req, res) => {
    const getProviders = "SELECT provider_specialty FROM providers"

    db.query(getProviders, (err, results) => {
        // have an error
        if(err) {
            return res.status(500).send("Failed to fetch the providers")
        }

        // get back the data/results
        res.status(200).send(results)
    })
})


// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})