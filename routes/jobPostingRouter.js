const express = require('express');
const jobPostingRouter = express.Router();
const { postJobPosting, 
    getJobPostingList,
    getJobPostingDetail,
    patchJobPosting,
    deleteJobPosting,
    getJobPostingSearch
    } = require('../controllers/jobPostingController');
// 채용공고 등록 
jobPostingRouter.post('/post', postJobPosting);

// 채용공고 수정 
jobPostingRouter.patch('/edit/:id', patchJobPosting);

// 채용공고 삭제 
jobPostingRouter.delete('/delete/:id', deleteJobPosting);

// 채용공고 리스트 검색 기능
jobPostingRouter.get('/list', getJobPostingList);

// 채용공고 상제 정보
jobPostingRouter.get('/detail/:id', getJobPostingDetail);


module.exports = jobPostingRouter;