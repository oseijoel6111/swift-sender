const express = require('express')
const {main, getSendEmail, postSendEmail, sentEmails} = require('../controllers/adminController')
const authMiddlware = require('../controllers/auth.middleware')
const router = express.Router()


router.post('/send-email', postSendEmail)
router.get('/sent-emails/:userId', sentEmails)
router.get('/main', main)
router.get('/send-email', authMiddlware, getSendEmail)


module.exports = router