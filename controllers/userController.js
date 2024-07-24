const User = require('../Models/db/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const SecretKey = 'sfkeoffedo'

const index =  (req, res)=>{
    res.render('main', {route: '/'})
};

const about = (req, res) => {
  res.render('main', { route: 'about'});
};

const contact = (req, res) => {
  res.render('main', { route: 'contact'});
};

const getLogin =  (req, res)=>{
    res.render('pages/login')
};

const getSignUp =  (req, res)=>{
    res.render('pages/signup')
};

const postSignUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    if (!firstName || firstName.length < 3) {
      return res.status(400).json({ message: 'firstname must be at least 3 characters long' });
    }
    if (!firstName || lastName.length < 3) {
        return res.status(400).json({ message: 'lastname must be at least 3 characters long' });
      }
      if (!email || email.length < 3) {
          return res.status(400).json({ message: 'lastname must be at least 3 characters long' });
        }
    if (!password || password.length < 3) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }
  
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  
    try {
      const newUser = await User.create({
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        email: email.toLowerCase(),
        password: hashedPassword,
      });
  
  
      res.redirect('login')
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: 'Username already exists' });
      }
      res.status(500).json({ message: 'Error creating user '+error });
    }
};

const postLogin =  async (req, res) => {
    const { email, password } = req.body;
    if (!email || email.length < 3) {
      return res.status(400).json({ message: 'email must be at least 3 characters long' });
    }
  
    try {
      const user = await User.findOne({
        where: { email: email.toLowerCase() },
      });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if(passwordMatch){
        if (req.session){
            req.session.userEmail = user.email
            req.session.userId = user.id;
        }else{
            res.status(500).send('No session')
        }
    }
      res.redirect('/admin/dashboard')
    } catch (error) {
      res.status(500).json({ message: 'Error logging in' });
    }
};

module.exports = {
    index,
    about,
    contact,
    getLogin,
    getSignUp,
    postLogin,
    postSignUp
}