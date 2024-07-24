const express = require('express')
const {dashboard, getSendEmail, postSendEmail, sentEmails, history} = require('../controllers/adminController')
const authMiddlware = require('../controllers/auth.middleware')
const router = express.Router()


router.post('/send-email', postSendEmail)
router.get('/sent-emails/:userId', sentEmails)
router.use(authMiddlware)
router.get('/dashboard', dashboard)
router.get('/send-email', getSendEmail)
router.get('/history', history)


module.exports = router