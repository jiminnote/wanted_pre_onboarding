const JobPosting = require('../models/jobPosting');

// 채용공고 리스트 조회
const getJobPostingList = async (req, res, next) => {
  try {
    const jobPostings = await JobPosting.findAll();
    res.status(200).json({ jobPostings});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 채용공고 상세
const getJobPostingDetail = async (req, res) => {
    try {
      const {
        params: {id},
      } = req;
      const jobPosting = await JobPosting.findOne({
         id: id 
        });
      res.status(200).json({ jobPosting });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // 채용공고 등록
const postJobPosting = async (req, res) => {
    try {
      const {
        body: { compensation, content, CompanyId, PositionId, TechnologyId,  },
      } = req;

      const jobPosting = await JobPosting.create({
        compensation,
        content,
        CompanyId,
        PositionId,
        TechnologyId,
      });
      res.status(200).json({ message :"Post Success", JobPosting : jobPosting.id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// 채용공고 수정
const patchJobPosting = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const {
      body: { compensation, content, CompanyId, PositionId, TechnologyId,  },
    } = req;
    const jobPosting = await JobPosting.update({
      compensation,
      content,
      CompanyId,
      PositionId,
      TechnologyId,},{
       where :{id: id}});
       res.status(200).json({ message :"Update Success"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//채용공고 삭제
const deleteJobPosting = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    await JobPosting.destroy({where:{id:id}});
    res.sendStatus(204);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getJobPostingList,
  getJobPostingDetail,
  postJobPosting,
  patchJobPosting,
  deleteJobPosting,
};