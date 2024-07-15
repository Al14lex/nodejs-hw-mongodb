const mongoose = require('mongoose');
const Contact = require('./models/contactModel');
const contacts = require('../contacts.json');
require('dotenv').config();

const importContacts = async () => {
    try {
        const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

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