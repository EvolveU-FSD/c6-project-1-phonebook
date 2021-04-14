let contacts = []

async function createContact(firstName, lastName, phoneNumber) {
    let contactId = contacts.length
    let newContact = {
        _id: contactId,
       firstName,
       lastName, 
       phoneNumber,
    } 
    contacts.push(newContact)
    return contactId
}

async function listContacts() {
    return contacts
}

module.exports = {
    createContact,
    listContacts
}