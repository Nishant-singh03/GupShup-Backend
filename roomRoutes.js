const express = require('express');
const roomController = require('./roomController');
const router = express.Router();

router.post('/create-room', roomController.createRoom); // room creation
router.get('/public-rooms', roomController.publicRooms);//to show public room
router.get('/private-rooms/:userId', roomController.privateRoom);

module.exports = router;
