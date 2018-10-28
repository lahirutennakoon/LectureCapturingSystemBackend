//Import Libraries
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

// Import controllers
const videoController_lt = require('../controllers/videoController_lt');

const ptzController_vm = require('../controllers/ptzController_vm');

// videoController_lt routes
router.post('/api/video', videoController_lt.uploadVideo);
router.get('/api/videos', videoController_lt.getAllVideos);
router.post('/api/videoChapters', videoController_lt.createVideoChapters);
router.get('/api/video', videoController_lt.getOneVideo);

// ptzController routes
router.get('/api/recalibrateCamera', ptzController_vm.recalibrateCamera);
router.get('/api/turnLeftCamera', ptzController_vm.turnLeftCamera);
router.get('/api/turnRightCamera', ptzController_vm.turnRightCamera);
router.get('/api/turnUpCamera', ptzController_vm.turnUpCamera);
router.get('/api/turnDownCamera', ptzController_vm.turnDownCamera);
router.get('/api/stopMovementCamera', ptzController_vm.stopMovementCamera);

module.exports = router;