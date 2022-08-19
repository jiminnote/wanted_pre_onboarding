const express = require('express');
const router = express.Router();

const jobPostingRouter = require('./jobPostingRouter');

router.use('/jobPosting', jobPostingRouter.router);

module.exports = router;