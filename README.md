# Fintech-Tracker

## Description
A Node.js and Express-based API for tracking income, expenses, and balance, with secure authentication, categorisation, and filtering features for easy personal finance management.

## 🚀 Features
- User Authentication (JWT)
- Balance Tracking
- CRUD for Transactions
- Pagination & Filtering
- Security (Helmet, Rate Limiting, Mongo Sanitize)

## Installation & Usage
bash
# Clone the repository
- git clone https://github.com/WelldoneEsu/fintech-tracker.git

# Navigate into the folder
- cd fintech-tracker

# Install dependencies
- npm install

# Start development server
- npm run dev

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt (Password Hashing)

## Author
- Welldone Esu


---

## ** 6. Frist Commit and push
bash
- git add .
- git commit -m "feat: initial project setup with folder structure and README"
- git branch -M main
- git remote add origin https://github.com/WelldoneEsu/fintech-tracker.git
- git push -u origin main


## API Endpoints
Auth

- POST /api/auth/register → Register new user

-POST /api/auth/login → Login user & return JWT

- GET /api/auth/profile → Get logged-in user (protected)
 
 Transactions

- POST /api/transactions → Create transaction (credit/debit)

- GET /api/transactions?page=1&limit=10&type=credit&start=2025-01-01&end=2025-12-31 → List transactions (pagination + filtering)

- PUT /api/transactions/:id → Update transaction

- DELETE /api/transactions/:id → Delete transaction
 
 ## - Postman collection
{
	"info": {
		"_postman_id": "c2e58001-5bcf-4ca6-b095-964ea1ea9072",
		"name": "Fintech-tracker",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "43058093"
	},
	"item": [
		{
			"name": "New Request",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Wells50\",\n    \"email\": \"well@example.com\",\n    \"accountType\": \"current\",\n    \"password\": \"123456\",\n    \"role\": \"user\"\n}"
				},
				"url": {
					"raw": "http://localhost:5000/api/auth/register",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"auth",
						"register"
					]
				}
			},
			"response": [
				{
					"name": "New Request",
					"originalRequest": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"Wells50\",\n    \"email\": \"well@example.com\",\n    \"accountType\": \"current\",\n    \"password\": \"123456\",\n    \"role\": \"user\"\n}"
						},
						"url": {
							"raw": "http://localhost:5000/api/auth/register",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"auth",
								"register"
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": null,
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "328"
						},
						{
							"key": "ETag",
							"value": "W/\"148-BFr52yEOHL5O/uuKLIeLeT3h4ZA\""
						},
						{
							"key": "Date",
							"value": "Mon, 18 Aug 2025 04:20:45 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"_id\": \"68a2aa1dc6e497eff775843f\",\n    \"name\": \"Wells50\",\n    \"email\": \"well@example.com\",\n    \"role\": \"user\",\n    \"accountType\": \"current\",\n    \"balance\": 0,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTJhYTFkYzZlNDk3ZWZmNzc1ODQzZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NDkwODQ1LCJleHAiOjE3NTU0OTQ0NDV9.TRV6mmGelEloT9tSG03k3qXixnsuVkpGRoewgvWhO_o\"\n}"
				}
			]
		},
		{
			"name": "New Request",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTJhYTFkYzZlNDk3ZWZmNzc1ODQzZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NDkwODQ1LCJleHAiOjE3NTU0OTQ0NDV9.TRV6mmGelEloT9tSG03k3qXixnsuVkpGRoewgvWhO_",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"email\": \"well@example.com\",\r\n    \"password\": \"123456\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"auth",
						"login"
					]
				}
			},
			"response": [
				{
					"name": "New Request",
					"originalRequest": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTJhYTFkYzZlNDk3ZWZmNzc1ODQzZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NDkwODQ1LCJleHAiOjE3NTU0OTQ0NDV9.TRV6mmGelEloT9tSG03k3qXixnsuVkpGRoewgvWhO_",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"email\": \"well@example.com\",\r\n    \"password\": \"123456\"}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/api/auth/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"auth",
								"login"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": null,
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "328"
						},
						{
							"key": "ETag",
							"value": "W/\"148-6zRgE++U+087iA1lnGZKBW9/0Zc\""
						},
						{
							"key": "Date",
							"value": "Mon, 18 Aug 2025 04:24:31 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"_id\": \"68a2aa1dc6e497eff775843f\",\n    \"name\": \"Wells50\",\n    \"email\": \"well@example.com\",\n    \"role\": \"user\",\n    \"accountType\": \"current\",\n    \"balance\": 0,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTJhYTFkYzZlNDk3ZWZmNzc1ODQzZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NDkxMDcxLCJleHAiOjE3NTU0OTQ2NzF9.wEQh85KkJ_mptEpXG3iY0k0_HPeq_Ch151HXJw2HDk0\"\n}"
				}
			]
		},
		{
			"name": "New Request",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTJhYTFkYzZlNDk3ZWZmNzc1ODQzZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NDkxMDcxLCJleHAiOjE3NTU0OTQ2NzF9.wEQh85KkJ_mptEpXG3iY0k0_HPeq_Ch151HXJw2HDk0",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:5000/api/auth/profile",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"auth",
						"profile"
					]
				}
			},
			"response": [
				{
					"name": "New Request",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTJhYTFkYzZlNDk3ZWZmNzc1ODQzZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1NDkxMDcxLCJleHAiOjE3NTU0OTQ2NzF9.wEQh85KkJ_mptEpXG3iY0k0_HPeq_Ch151HXJw2HDk0",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:5000/api/auth/profile",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"auth",
								"profile"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": null,
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "175"
						},
						{
							"key": "ETag",
							"value": "W/\"af-7dl1JN33TUoRODUfXg8VRvWL8NE\""
						},
						{
							"key": "Date",
							"value": "Mon, 18 Aug 2025 04:26:42 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"_id\": \"68a2aa1dc6e497eff775843f\",\n    \"name\": \"Wells50\",\n    \"email\": \"well@example.com\",\n    \"role\": \"user\",\n    \"balance\": 0,\n    \"accountType\": \"current\",\n    \"createdAt\": \"2025-08-18T04:20:45.477Z\",\n    \"__v\": 0\n}"
				}
			]
		}
	]
}
  