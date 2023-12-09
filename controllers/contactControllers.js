//@desc Get all the contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Gets all contacts!" });
};

//@desc POST Create Contacts
//@route GET /api/contacts
//@access public
const postContact = (req, res) => {
    res.status(200).json({ message: "Contact Created successfully...!" });
};


module.exports = { getContacts, postContact };