# ๐ wanted_pre_onboarding ์ ๋ฐ๊ณผ์ 

# ๐ What is wanted_pre_onboarding Project
wanted ์น ์ฌ์ดํธ์ฒ๋ผ ์ฑ์ฉ๊ณต๊ณ ๋ฅผ ์ด๋ํ  ์ ์๋ ๋ฏธ๋ ํ๋ก์ ํธ์ด๋ค.</br>
๋ก๊ทธ์ธํ ์ฌ์ฉ์๊ฐ ๊ธฐ์๊ณ์ ์ธ ๊ฒฝ์ฐ ์ฑ์ฉ๊ณต๊ณ ๋ฅผ ์๋ก๋ํ  ์ ์๊ณ , ์ผ๋ฐ๊ณ์  ์ฌ์ฉ์๋ ์ฑ์ฉ๊ณต๊ณ ๋ฅผ ์ง์ ํ  ์์๋ค.

# ๐๊ฐ๋ฐ ์ธ์ ๋ฐ ๊ธฐ๊ฐ
๊ฐ๋ฐ๊ธฐ๊ฐ
2022/08/15 ~ 2022/08/21 (์ด 7์ผ๊ฐ)

# ๐ ์ ์ฉ ๊ธฐ์  ๋ฐ ๊ตฌํ ๊ธฐ๋ฅ
## ์ ์ฉ ๊ธฐ์ 
Node.js</br>
express</br>
Mysql</br>
Sequelize</br>
passport</br>
jest

## ๊ตฌํ ๊ธฐ๋ฅ
#### How To Use
#### 1. ์ฑ์ฉ๊ณต๊ณ  ๋ฑ๋ก

	- POST  /post
	
  	- postJobPosting

<img width="500" alt="image" src="https://user-images.githubusercontent.com/95075455/185798888-e5d681dc-de42-4368-8a8b-6d4ffd9a9586.png">
	
- ๊ถํ์ด ์๋ ์ ์ ๋ง ๋ฑ๋ก๊ฐ๋ฅ : `Invalid Permission`

![image](https://user-images.githubusercontent.com/95075455/185798144-ac349b65-a7a7-4528-9550-06d1134ab62c.png)

- ํ์ ์๋ ฅ ํญ๋ชฉ์ด ๋น์ด์์ ๊ฒฝ์ฐ : `key error`

![image](https://user-images.githubusercontent.com/95075455/185798100-a3cc2215-6160-43e7-ad12-d33d90dc502d.png)

2. ์ฑ์ฉ๊ณต๊ณ  ์์ 

	- Patch /edit/:jobPostingId
	
	- patchJobPosting
	
![image](https://user-images.githubusercontent.com/95075455/185798298-af69eb87-c79a-475e-9da8-14c8d3600464.png)

- ํ์ ์๋ ฅ ํญ๋ชฉ์ด ๋น์ด์์ ๊ฒฝ์ฐ : `key error`

![image](https://user-images.githubusercontent.com/95075455/185798287-edb643c4-6567-4f4f-aee0-c2023d66a39e.png)

3. ์ฑ์ฉ๊ณต๊ณ  ์ญ์  

	- DELETE /delete/:jobPostingId
	
	- deleteJobPosting
	
<img width="492" alt="แแณแแณแแตแซแแฃแบ 2022-08-22 แแฉแแฅแซ 12 42 06" src="https://user-images.githubusercontent.com/95075455/185799130-bef72906-620d-42c6-b608-88b1431e7525.png">

4. ์ฑ์ฉ๊ณต๊ณ  ๊ฒ์ ๊ธฐ๋ฅ

	- GET /list?search=์ฝ๋ฆฌ์
	
	- getJobPostingList
	
- ํ์ฌ๋ช์ผ๋ก ๊ฒ์ ๊ฐ๋ฅ

![image](https://user-images.githubusercontent.com/95075455/185798116-e9b208d7-baf6-434a-8c29-bc560e2ea904.png)

5. ์ฑ์ฉ๊ณต๊ณ  ์์  ์ ๋ณด

	- GET /detail/:jobPostingId
	
	- getJobPostingDetail
	
![image](https://user-images.githubusercontent.com/95075455/185798220-291345b4-8429-4cbd-8d47-aed4bd222d3a.png)

6. ์ฑ์ฉ๊ณต๊ณ  ์ง์

	- POST /apply/:jobPostingId
	
	- postJobPostingApply
	
![image](https://user-images.githubusercontent.com/95075455/185798139-e03279fb-3f3a-4036-b713-5551b87ddd8d.png)

7. ๋ก๊ทธ์ธ 

	- POST /auth/login
	
	- passport
	
![image](https://user-images.githubusercontent.com/95075455/185798058-9804be9a-9d4f-4f0a-9dca-fa175d4f43c5.png)

- ์์ด๋ ๋ฐ ๋น๋ฐ๋ฒํธ ์ค๋ฅ `Invalid User`

![image](https://user-images.githubusercontent.com/95075455/185798054-d99e9275-95e6-4395-bd3c-2f36cdb70c7f.png)

8. ๋ก๊ทธ์์

	- POST /auth/logout
	
	- passport
	
![image](https://user-images.githubusercontent.com/95075455/185798076-eda6374f-fa32-4662-9d2d-427ca8feb237.png)

- ๋ก๊ทธ์ธ ๋์ด์์ง ์์ user์ผ ๊ฒฝ์ฐ ๋ก๊ทธ์ธ ํ์ํ๋ค๋ ๋ฉ์ธ์ง response

![image](https://user-images.githubusercontent.com/95075455/185798070-2890e7d7-5587-44c9-b162-ab50996dcf88.png)

## `jest`์ ์ด์ฉํ ์ ๋ ํ์คํธ
### ๋ก๊ทธ์ธ,๋ก๊ทธ์์์ ๋ํ ํ์คํธ ๊ฒฐ๊ณผ(middlewares.test.js)

![image](https://user-images.githubusercontent.com/95075455/185798128-f2f6acb2-2dee-44c5-b715-c2e481490cd3.png)

  
## ๊ธฐ๋ฅ ๊ตฌํ
### ๐ฑmodeling
[db.diagram](https://dbdiagram.io/d/62f464c2c2d9cf52fa86eb48)
![image](https://user-images.githubusercontent.com/95075455/185796609-7e8d1b31-f1dc-4c45-8d2c-9040f234ef93.png)


# ๐Contributing
Thanks to Wanted

# ๐Reference
wanted</br>
dbdiagram.io</br>

# ๐Links


[API Documentation](https://documenter.getpostman.com/view/21511958/VUqoSKAW)
