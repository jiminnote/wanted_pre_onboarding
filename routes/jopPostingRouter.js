const express = require('express');
const jopPostingRouter = express.Router();

// 채용공고 등록 
jopPostingRouter.post('/post', postJobPosting);

// 채용공고 수정 
jopPostingRouter.patch('/edit/:jobPostingId', patchJobPosting);

// 채용공고 삭제 
jopPostingRouter.delete('/delete/:jobPostingId', deleteJobPosting);

// 채용공고 리스트 검색 기능
jopPostingRouter.get('/list', getJobPostingList);

// 채용공고 상제 정보
jopPostingRouter.GET('/detail/:jobPostingId', getJobPostingDetail);

// 채용공고 지원
jopPostingRouter.POST('/apply/:jobPostingId', postJobPostingApply);

module.exports = jopPostingRouter;