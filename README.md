# 🌟 wanted_pre_onboarding 선발과제

# 🌟 What is wanted_pre_onboarding Project
wanted 웹 사이트처럼 채용공고를 열람할 수 있는 미니 프로젝트이다.
로그인한 사용자가 기업계정인 경우 채용공고를 업로드할 수 있고, 일반계정 사용자는 채용공고를 지원 할 수있다.

# 🌟개발 인원 및 기간
개발기간
2022/08/15 ~ 2022/08/21 (총 7일간)

# 🌟 적용 기술 및 구현 기능
## 적용 기술
Node.js</br>
express</br>
Mysql</br>
Sequelize</br>
passport</br>
jest

## 구현 기능
How To Use
1. 채용공고 등록
	- POST / /post
  - postJobPosting

2. 채용공고 수정
	- Patch /edit/:jobPostingId
	- patchJobPosting

3. 채용공고 삭제 /delete/:jobPostingId
	- DELETE 
	- deleteJobPosting

4. 채용공고 검색 기능
	- GET /list?search=원티드
	- getJobPostingList

5. 채용공고 상제 정보
	- GET /detail/:jobPostingId
	- getJobPostingDetail

6. 채용공고 지원
	- POST /apply/:jobPostingId
	- postJobPostingApply
  
## 기능 구현
### 🌱modeling
[db.diagram](https://dbdiagram.io/d/62f464c2c2d9cf52fa86eb48)
![image](https://user-images.githubusercontent.com/95075455/185796609-7e8d1b31-f1dc-4c45-8d2c-9040f234ef93.png)


# 🌟Contributing
Thanks to Wanted

# 🌟Reference
wanted</br>
dbdiagram.io</br>

# 🌟Links


[API Documentation](https://documenter.getpostman.com/view/21511958/VUqoSKAW)
