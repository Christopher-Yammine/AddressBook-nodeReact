const { Router } = require('express');
const { sign } = require('jsonwebtoken');
const { get, register, login } = require('./controller');
const router = Router();


router.get('/', (req, res) => get(req, res));
router.post('/register', register);
router.post('/signin', login);

module.exports = router;