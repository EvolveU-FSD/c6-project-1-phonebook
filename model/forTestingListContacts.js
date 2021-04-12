const contacts = require('./contactsInMongo')

contacts.listContacts().then((contactList) => {
    console.log(contactList)
})
