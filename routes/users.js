const router = require('express').Router();
const { getUser, updateUserBio } = require('../controllers/users');
const { validateUserBio } = require('../utils/validation');

router.get('/me', getUser);
router.patch('/me', validateUserBio, updateUserBio);

module.exports = router;
