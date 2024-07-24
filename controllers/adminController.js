const User = require("../Models/db/users");
const Email = require("../Models/db/emails");
const nodemailer = require("nodemailer");

const dashboard = async (req, res) => {
  res.render("admin-dashboard", {uName: req.session.userEmail});
};

const getSendEmail = async (req, res) => {
  res.render("admin-index", {uName: req.session.userEmail});
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
  const senderId = req.session.userId;
  const senderEmail = req.session.userEmail;

  try {
    const receiver = await User.findOne({ where: { email: senderEmail } });
    if (!receiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    const mailOptions = {
      from: senderEmail,
      to: receiverEmail,
      subject,
      text: body,
    };

    await transporter.sendMail(mailOptions);

    await Email.create({
      senderId,
      receiverId: receiver.id,
      subject,
      body,
    });

    return res.redirect("/admin/history");
  } catch (error) {
    res.status(500).json({ message: "Error sending email" });
  }
};

const sentEmails = async (req, res) => {
  const { userId } = req.params;

  try {
    const sentEmails = await Email.findAll({
      where: { senderId: userId },
      order: [["timestamp", "DESC"]],
    });
    res.status(200).json(sentEmails);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving sent emails" });
  }
};

const history = async (req, res) => {
  const email = req.session.userEmail;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).send("User not found");
  }
  const sentEmails = await Email.findAll({
    where: { senderId: user.dataValues.id },
    order: [["timestamp", "DESC"]],
  });

  const contents = sentEmails.map((e) => e.dataValues);

  res.render("admin-history", { sentEmails: contents, uName: req.session.userEmail });
};

module.exports = {dashboard, getSendEmail, postSendEmail, sentEmails, history };
