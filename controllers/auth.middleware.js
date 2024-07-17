// Middleware to protect routes
const authMiddlware = (req,res,next)=>{
    if(req.session && req.session.userEmail){
        next()
    }else{
        res.redirect('/login')
    }
}

module.exports = authMiddlware