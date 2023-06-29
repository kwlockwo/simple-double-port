const express = require('express')

const externaApp = express()
const externalPort = process.env.PORT || 5000

const internalApp = express()
const internalPort = process.env.INTERNAL_PORT || 6000

externaApp.get("/", (req, res) => {
    res.send(`You have reached the external app on port=${externalPort}\n`)
})

internalApp.get("/", (req, res) => {
    res.send(`You have reached the internal app on port=${internalPort}\n`)
})

externaApp.listen(externalPort, () => {
    console.log(`External app listening on port ${externalPort}`)
})

internalApp.listen(internalPort, () => {
    console.log(`Internal app listening on port ${internalPort}`)
})