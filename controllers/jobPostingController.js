const { Company, Region, Technology, Country, Position } = require('../models');
const JobPosting = require('../models/jobPosting');
const User = require('../models/user');
const { CreateError } = require("../utils/exceptions");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// 채용공고 리스트 검색 조회
const getJobPostingList = async (req, res) => {
  try {
      search = req.query.search
      const jobPostings = await JobPosting.findAll({
      attributes: ['id','compensation','createdAt','updatedAt'],
      order: [['createdAt', 'DESC']],
       include: [
        {
        model: Company,
        attributes: ["id","name"],
        where:{[Op.or]: [{name:{[Op.like]: "%" + search + "%"}}]},
        include: {
          model: Region,
          attributes: ["id","name"],
          include: {
            model: Country,
            attributes: ["id","name"],
          }
        },
        },
        {model: Position,
          attributes: ["id","name"],
         },
        {model: Technology,
        attributes: ["id","name"],
        }
       ],
      });
    res.status(200).json({ jobPostings});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 채용공고 상세
const getJobPostingDetail = async (req, res) => {
    try {
      const {
        params: {id},
      } = req;
      const jobPosting = await JobPosting.findOne({
        attributes: ['id','compensation', 'content','createdAt','updatedAt'],
         id: id ,
         include: [
          {model: Company,
          attributes: ["id","name"],
          include: {
            model: Region,
            attributes: ["id","name"],
            include: {
              model: Country,
              attributes: ["id","name"],
            }
          },
          },
          {model: Position,
            attributes: ["id","name"],},
          {model: Technology,
            attributes: ["id","name"],
          }
         ]
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

      if (req.user.isBusinessAccount === false){
        res.status(400).json({ error: "Invalid Permission" });
      }
      
      if (!(PositionId && content && CompanyId && content && TechnologyId)) {
        throw new CreateError(400, "Key Error");
      }

      const jobPosting = await JobPosting.create({
        compensation,
        content,
        CompanyId,
        PositionId,
        TechnologyId
      });
      res.status(200).json({ message :"Post Success", JobPosting : jobPosting.id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//채용공고 지원
const postApplyJobPosting = async (req, res) => {
    try {
      const {
        params: { JobPostingId },
      } = req;
      const jobPostingRow = await JobPosting.findByPk(JobPostingId);
      const UserRow = await User.findByPk(req.user.id);
      await UserRow.addJobPostings(jobPostingRow);

      res.status(200).json({ message :"Apply Success"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

 // 지원 리스트 조회
const getApplyJobPostingList = async (req, res) => {
  try {
      const jobPostings = await User.findAll({
      where: { id: req.user.id },
      include: JobPosting
      });
    res.status(200).json({ jobPostings});
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

    if (!(PositionId && content && CompanyId && content && TechnologyId)) {
      throw new CreateError(400, "Key Error");
    }

    await JobPosting.update({
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
  postApplyJobPosting,
  getApplyJobPostingList
};