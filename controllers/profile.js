const Message = require('../models/Message')
const User = require('../models/User')
//requiring models/Message to use as a module, named "Message"

module.exports = {
    // add isLoggedIn to check for login
    // get
    getMessages: async (req,res)=>{
        try{
            
            const messages = await Message.find() // finds all messages in collection
            res.render('profile.ejs', {messages: messages, user: req.user})
            // renders profile page with the received messages and the logged in user
        }catch(err){
            console.log(err)
        }
    },
    // post
    createMessage: async (req, res)=>{
        try{
            // creates a collection or a view, a MongoDB method - https://docs.mongodb.com/manual/reference/command/create/
            //`await` replaces `db collections`
            await Message.create({
                name: req.body.name,
                msg: req.body.msg,
                likes: 0,
            })
            console.log('Message has been added!')
            res.redirect('/profile') //this redirect replaces the `get` request for the route? y/n?
        }catch(err){
            console.log(err)
        }
    },
    // put
    thumbsUp: async (req, res)=>{
        try{
            // finds a document with a matching _id & updates completed property as "true"
            await Message.findOneAndUpdate({
                name: req.body.name,
                msg: req.body.msg
            },{
                $inc: {likes: 1}
            })
            console.log('Mario says: Thumbs Up!')
            res.json('Mario says: Thumbs Up!')
        }catch(err){
            console.log(err)
        }
    },
    // put
    thumbsDown: async (req, res)=>{
        try{
            // finds a document with a matching _id & updates completed property as "true"
            await Message.findOneAndUpdate({
                name: req.body.name,
                msg: req.body.msg
            },{
                $inc: {likes: -1}
            })
            console.log('Wario says: Thumbs Down! >:[(')
            res.json('Wario says: Thumbs Down! >:[(')
        }catch(err){
            console.log(err)
        }
    },
    // delete
    deleteMessage: async (req, res)=>{
        console.log(req.body.name, req.body.msg)
        try{
             // finds a match for the chosen element's ID and the ID and the database => deletes that document
            await Message.findOneAndDelete({
                name: req.body.name,
                msg: req.body.msg
            })
            console.log("Oh no! Bowser took the message and it's now in another castle.")
            res.json("Oh no! Bowser took the message and it's now in another castle.")
        }catch(err){
            console.log(err)
        }
    }
}
