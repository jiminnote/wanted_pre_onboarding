# 🌟 wanted_pre_onboarding 선발과제

# 🌟 What is wanted_pre_onboarding Project
wanted 웹 사이트처럼 채용공고를 열람할 수 있는 미니 프로젝트이다.</br>
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
#### How To Use
#### 1. 채용공고 등록

	- POST  /post
	
  	- postJobPosting

<img width="500" alt="image" src="https://user-images.githubusercontent.com/95075455/185798888-e5d681dc-de42-4368-8a8b-6d4ffd9a9586.png">
	
- 권한이 있는 유저만 등록가능 : `Invalid Permission`

![image](https://user-images.githubusercontent.com/95075455/185798144-ac349b65-a7a7-4528-9550-06d1134ab62c.png)

- 필수 입력 항목이 비어있을 경우 : `key error`

![image](https://user-images.githubusercontent.com/95075455/185798100-a3cc2215-6160-43e7-ad12-d33d90dc502d.png)

2. 채용공고 수정

	- Patch /edit/:jobPostingId
	
	- patchJobPosting
	
![image](https://user-images.githubusercontent.com/95075455/185798298-af69eb87-c79a-475e-9da8-14c8d3600464.png)

- 필수 입력 항목이 비어있을 경우 : `key error`

![image](https://user-images.githubusercontent.com/95075455/185798287-edb643c4-6567-4f4f-aee0-c2023d66a39e.png)

3. 채용공고 삭제 

	- DELETE /delete/:jobPostingId
	
	- deleteJobPosting
	
<img width="492" alt="스크린샷 2022-08-22 오전 12 42 06" src="https://user-images.githubusercontent.com/95075455/185799130-bef72906-620d-42c6-b608-88b1431e7525.png">

4. 채용공고 검색 기능

	- GET /list?search=코리아
	
	- getJobPostingList
	
- 회사명으로 검색 가능

![image](https://user-images.githubusercontent.com/95075455/185798116-e9b208d7-baf6-434a-8c29-bc560e2ea904.png)

5. 채용공고 상제 정보

	- GET /detail/:jobPostingId
	
	- getJobPostingDetail
	
![image](https://user-images.githubusercontent.com/95075455/185798220-291345b4-8429-4cbd-8d47-aed4bd222d3a.png)

6. 채용공고 지원

	- POST /apply/:jobPostingId
	
	- postJobPostingApply
	
![image](https://user-images.githubusercontent.com/95075455/185798139-e03279fb-3f3a-4036-b713-5551b87ddd8d.png)

7. 로그인 

	- POST /auth/login
	
	- passport
	
![image](https://user-images.githubusercontent.com/95075455/185798058-9804be9a-9d4f-4f0a-9dca-fa175d4f43c5.png)

- 아이디 및 비밀번호 오류 `Invalid User`

![image](https://user-images.githubusercontent.com/95075455/185798054-d99e9275-95e6-4395-bd3c-2f36cdb70c7f.png)

8. 로그아웃

	- POST /auth/logout
	
	- passport
	
![image](https://user-images.githubusercontent.com/95075455/185798076-eda6374f-fa32-4662-9d2d-427ca8feb237.png)

- 로그인 되어있지 않은 user일 경우 로그인 필요하다는 메세지 response

![image](https://user-images.githubusercontent.com/95075455/185798070-2890e7d7-5587-44c9-b162-ab50996dcf88.png)

## `jest`을 이용한 유닛 테스트
### 로그인,로그아웃에 대한 테스트 결과(middlewares.test.js)

![image](https://user-images.githubusercontent.com/95075455/185798128-f2f6acb2-2dee-44c5-b715-c2e481490cd3.png)

  
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
