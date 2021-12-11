const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')

// renders profile page 
// and will show all messages once they're logged in
router.get('/', profileController.getMessages)

// posts message with name, msg, likes
router.post('/messages', profileController.createMessage)

// adds thumbs up (via the database)
router.put('/thumbsUp', profileController.thumbsUp)

// adds thumbs down (via the database)
router.put('/thumbsDown', profileController.thumbsDown)

// deletes message with the name and msg match
router.put('/deleteMessage', profileController.deleteMessage)

module.exports = router