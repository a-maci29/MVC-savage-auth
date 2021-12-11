const mongoose = require('mongoose') // requires mongoose package

// creates mongoose Schema for organization to make sure the documents matches these criteria
const MessageSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  msg: {
    type: String, 
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  }
})

// exports mongoose model as "Message"
module.exports = mongoose.model('Message', MessageSchema)
