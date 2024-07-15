const mongoose = require('mongoose');
const Contact = require('./models/contactModel');
const contacts = require('../contacts.json');
require('dotenv').config();

const importContacts = async () => {
    try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;

    const uri = `mongodb+srv://${MONGODB_USER}:${encodeURIComponent(MONGODB_PASSWORD)}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await Contact.insertMany(contacts);
        console.log('Contacts imported successfully!');
    } catch (error) {
        console.error('Error importing contacts:', error);
    } finally {
        mongoose.connection.close();
    }
};


importContacts();