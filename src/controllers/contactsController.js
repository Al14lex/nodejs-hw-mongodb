const contactsService = require('../services/contacts');

const getContacts = async (req, res) => {
    try {
        const contacts = await contactsService.getAllContacts();
        return res.status(200).json({
            status: 'success',
            message: 'Successfully found contacts!',
            data: contacts,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Error fetching contacts'
        });
        
    }
};

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    try {
        const contact = await contactsService.getContactById(contactId);
        if (!contact) {
            return res.status(404).json({
                message: 'Contact not found',
            });
        }
        return res.status(200).json({
            status: 200,
            message: `Successfully found contact with id ${contactId}!`,
            data: contact,
        });
    } catch (error) {
         console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Error fetching contact',
        });
    }
};

module.exports = {
    getContacts,
    getContactById,
};
