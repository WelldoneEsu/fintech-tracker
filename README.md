# Fintech-Tracker

## Description
A Node.js and Express-based API for tracking income, expenses, and balance, with secure authentication, categorisation, and filtering features for easy personal finance management.

## Features
- User authentication and secure login
- Add, edit, and delete income records
- Add, edit, and delete expense records
- Automatic calculation of total balance
- Categorization of income and expenses
- Search and filter transactions by date or category
- Responsive API endpoints for easy integration with frontends

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

POST /api/auth/register → Register new user

POST /api/auth/login → Login user & return JWT

GET /api/auth/profile → Get logged-in user (protected)
 
 
 ## - Postman collection

				{
  "info": {
    "_postman_id": "c2e58001-5bcf-4ca6-b095-964ea1ea9072",
    "name": "Fintech Tracker API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Auth",
      "item": [
        {
          "name": "Register User",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Wells50\",\n  \"email\": \"well@example.com\",\n  \"accountType\": \"current\",\n  \"password\": \"123456\",\n  \"role\": \"user\"\n}"
            },
            "url": {
              "raw": "http://localhost:5000/api/auth/register",
              "protocol": "http",
              "host": ["localhost"],
              "port": "5000",
              "path": ["api", "auth", "register"]
            }
          }
        },
        {
          "name": "Login User",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"email\": \"well@example.com\",\n  \"password\": \"123456\"\n}"
            },
            "url": {
              "raw": "http://localhost:5000/api/auth/login",
              "protocol": "http",
              "host": ["localhost"],
              "port": "5000",
              "path": ["api", "auth", "login"]
            }
          }
        },
        {
          "name": "Get Profile",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Authorization",
                "value": "Bearer {{token}}"
              }
            ],
            "url": {
              "raw": "http://localhost:5000/api/auth/profile",
              "protocol": "http",
              "host": ["localhost"],
              "port": "5000",
              "path": ["api", "auth", "profile"]
            }
          }
        }
      ]
    }
  ],
  "variable": [
    {
      "key": "token",
      "value": ""
    }
  ]
}
