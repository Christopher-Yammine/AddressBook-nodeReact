const { getByUserId, addContact } = require('./service');

async function addnewContact(req, res) {
    try {
        console.log(req.body);

        const newContact = await addContact(req.body);
        console.log('newContact =>', newContact);
        return res.status(200).send(newContact);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function getById(req, res) {
    try {
        console.log(req.body);
        const contacts = await getByUserId(req.body.userId);
        console.log('contacts=>', contacts);
        return res.send(contacts);

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = {
    getById,
    addnewContact
}