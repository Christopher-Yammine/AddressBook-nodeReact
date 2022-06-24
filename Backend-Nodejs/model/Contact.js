const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    longitude: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    }
})
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: locationSchema

});

module.exports = mongoose.model('Contact', contactSchema);