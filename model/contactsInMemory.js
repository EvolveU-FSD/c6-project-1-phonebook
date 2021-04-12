let contacts = []

async function createContact(firstName, lastName, phoneNumber) {
   let newContact = {
       firstName,
       lastName, 
       phoneNumber
   } 
   contacts.push(newContact)
   return contacts.length-1
}

async function listContacts() {
    return contacts
}

module.exports = {
    createContact,
    listContacts
}