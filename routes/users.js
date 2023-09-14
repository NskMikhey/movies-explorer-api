const router = require('express').Router();
const { getUser, updateUserBio } = require('../controllers/users');
const { validateUserInfo } = require('../utils/validation');

router.get('/me', getUser);
router.patch('/me', validateUserInfo, updateUserBio);

module.exports = router;
