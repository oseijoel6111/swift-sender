const User = require('../Models/db/users');
const Email = require('../Models/db/emails');
const nodemailer = require('nodemailer');

const main = async(req,res)=>{
    res.render('main')
};

const getSendEmail = async(req, res)=>{
    res.render('main')
};

const postSendEmail = async (req, res) => {

const transporter = nodemailer.createTransport({
host: process.env.SMTP_HOST,
port: process.env.SMTP_PORT,
auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
},
});
      
const { receiverEmail, subject, body } = req.body;
const senderId = req.session.userId
const senderEmail = req.session.userEmail

try {
    const receiver = await User.findOne({ where: { email: senderEmail }});
    if (!receiver) {
    return res.status(404).json({ message: 'Receiver not found' });
    }

    const mailOptions = {
    from: senderEmail,
    to: receiverEmail,
    subject,
    text: body
    };

    await transporter.sendMail(mailOptions);

    await Email.create({
    senderId,
    receiverId: receiver.id,
    subject,
    body
    });

    res.status(200).json({ message: 'Email sent and stored successfully!' });
} catch (error) {
    res.status(500).json({ message: 'Error sending email' });
}
};

const sentEmails =  async (req, res) => {
    const { userId } = req.params;
  
    try {
      const sentEmails = await Email.findAll({
        where: { senderId: userId },
        order: [['timestamp', 'DESC']]
      });
      res.status(200).json(sentEmails);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving sent emails' });
    }
};

module.exports = {main, getSendEmail, postSendEmail, sentEmails}