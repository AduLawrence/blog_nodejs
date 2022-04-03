const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();


router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create);
router.post('/create', blogController.blog_add);

router.get('/:id', blogController.blog_details);

module.exports = router;