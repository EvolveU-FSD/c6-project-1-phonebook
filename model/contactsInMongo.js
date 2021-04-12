const db = require("./db")

async function createContact(firstName, lastName, phoneNumber) {
    let contactToCreate = {
        firstName,
        lastName,
        phoneNumber
    }
    let contactsCollection = await db.getCollection("contacts")
    let insertResult = await contactsCollection.insertOne(contactToCreate)
    return insertResult.ops[0]._id
}

async function listContacts() {
    let contactsCollection = await db.getCollection("contacts")
    let cursor = contactsCollection.find({})
    return cursor.toArray()
}

module.exports = {
    createContact,
    listContacts
}