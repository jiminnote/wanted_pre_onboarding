jest.mock('../models/jobPosting');
const JobPosting = require('../models/jobPosting');


describe(JobPosting, () => {
  const req = {
    compensation:10000,
    content:'test99',
    CompanyId:2,
    PositionId:4,
    TechnologyId:5
  };
  const res = {
    send: jest.fn(),
  };
  const next = jest.fn();

  test('채용공고 추가하고 Post Success를 응답해야 함', async () => {
    JobPosting.create.mockReturnValue(Promise.resolve({
      addFollowing(id) {
        return Promise.resolve(true);
      }
    }));
    await JobPosting(req, res, next);
    expect(res.send).toBeCalledWith('success');
  });

  test('필수 데이터 입력을 못 받으면 key error를 호출함', async () => {
    const error = '필수 데이터 입력을 못 받음';
    JobPosting.create.mockReturnValue(Promise.reject(error));
    await JobPosting(req, res, next);
    expect(next).toBeCalledWith(error);
  });
});