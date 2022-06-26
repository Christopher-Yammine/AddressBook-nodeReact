const Contact = require('../../model/Contact');


async function getByUserId(userId) {
    console.log(userId)
    return await Contact.find({ user: userId });

}

async function addContact(body) {
    console.log(body);
    const {
        firstName,
        lastName,
        phoneNumber,
        status,
        email,
        user,
        location
    } = body;

    const contact = new Contact({
        firstName,
        lastName,
        phoneNumber,
        status,
        email,
        user,
        location
    });

    return await contact.save();
}

module.exports = {
    getByUserId,
    addContact
}