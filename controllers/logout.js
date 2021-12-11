module.exports = {
    logout: (req,res)=>{
        req.logout(); // built-in function for logout?
        res.redirect('/');
    }
}