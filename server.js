const express = require('express')
const contacts = require('./model/contactsInMongo')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/contact/create', async (req, res) => {
    let firstName = req.body.firstName
    let lastName= req.body.lastName
    let phoneNumber= req.body.phoneNumber
    let contactId = await contacts.createContact(firstName, lastName, phoneNumber)
    res.send("Created contact with id " + contactId)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})