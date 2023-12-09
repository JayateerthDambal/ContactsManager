const express = require('express')
const router = express.Router();

const { getContacts, postContact } = require("../controllers/contactControllers");
// GET contacts
router.route("/").get(getContacts);

// POST Contact
router.route("/").post(postContact);

// GET contact by id
router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `Contact of ${req.params.id}` });
});

// Update contact for id
router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

// Delete contact by id 
router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Deleted Contact for ${req.params.id}` });
});

module.exports = router;