const express = require('express')
const router  = express.Router()

const {
    index,
    getLogin,
    getSignUp,
    postLogin,
    postSignUp
} = require('../controllers/userController')

// Get routes
router.get('/', index);
router.get('/login', getLogin);
router.get('/signup', getSignUp);

// POST ROUTES

router.post('/signup', postSignUp);
router.post('/login', postLogin);

module.exports = router 