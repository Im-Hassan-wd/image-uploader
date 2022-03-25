const { Router } = require('express');
const uploadControllers = require('../controllers/uploadControllers');

const router = Router();

router.get('/upload', uploadControllers.upload_get);
router.post('/upload', uploadControllers.upload_post);

module.exports = router;