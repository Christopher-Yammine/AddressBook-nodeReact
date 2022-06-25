const { Router } = require('express');
const { getById, addnewContact } = require('./controller');
const router = Router();

router.post('/addContact', addnewContact);
router.post('/getByid', getById);

module.exports = router;
