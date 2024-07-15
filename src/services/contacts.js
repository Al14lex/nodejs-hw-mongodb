const Contact = require('../models/contactModel');

const getAllContacts = async () => {
    return await Contact.find();
};

const getContactById = async (contactId) => {
    return await Contact.findById(contactId);
};

module.exports = {
    getAllContacts,
    getContactById,
};