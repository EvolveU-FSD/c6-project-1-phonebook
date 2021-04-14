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

app.get('/api/contact/list', async (req, res) => { 
  let contactList = await contacts.listContacts() 
  res.send(contactList) 
}) 

app.get('/api/contact/searchByNameFragment', async (req, res) => {
  console.log("Search by name fragment")
  const nameFragment = req.query.nameFragment
  console.log(nameFragment)
  const result = await contacts.searchByNameFragment(nameFragment)  
  res.send(result)
}) 

app.delete('/api/contact/:contactId', async (req, res) => { 
  let contactId = req.params.contactId
  let deleteResult = await contacts.deleteContact(contactId)
  res.send("Record deleted: " + deleteResult)
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})