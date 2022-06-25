const { Router } = require('express');
const { get, register } = require('./controller');
const router = Router();


router.get('/', (req, res) => get(req, res));
router.post('/register', register);

module.exports = router;