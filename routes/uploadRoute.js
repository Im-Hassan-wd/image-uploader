const { Router } = require('express');
const uploadControllers = require('../controllers/uploadControllers');
const uploadMiddleware = require('../middleware/uploadMiddleware');

const router = Router();

router.get('/upload', uploadControllers.upload_get);
router.post('/upload' ,uploadMiddleware.single('avatarUrl'), uploadControllers.upload_post);

module.exports = router;