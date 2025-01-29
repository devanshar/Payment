
# Pay Up

## Overview
This is a full-stack payment application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to authenticate, check their account balance, and securely transfer money to other users.

## Features
- User authentication (Sign up & Sign in)
- Secure money transfers between users
- Balance checking feature
- JWT-based authentication
- Responsive UI with Tailwind CSS

## Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- Axios for API requests
- React Router for navigation

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose for database operations)
- JSON Web Token (JWT) authentication

## Installation
### Prerequisites:
Ensure you have the following installed:
- Node.js (v16 or later)
- MongoDB


## API Endpoints
### Authentication
- `POST /api/v1/auth/signup` - Register a new user
- `POST /api/v1/auth/signin` - Login user

### Account Management
- `GET /api/v1/account/balance` - Get user balance
- `POST /api/v1/account/transfer` - Transfer money to another user (requires JWT authorization)

## Usage
1. Sign up or sign in.
2. View your account balance.
3. Transfer money to another user.
4. Get a success message upon successful transaction.

## Local Storage Usage

- Upon successful login, the user's JWT token is stored in `localStorage` for session persistence:
  ```js
  localStorage.setItem("token", response.data.token);
  ```
- This token is included in API requests for authentication:
  ```js
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
  ```
- To clear the session, the token is removed from local storage upon logout:
  ```js
  localStorage.removeItem("token");
  ```


## Security Measures
- JWT tokens are used for secure authentication.
- API routes are protected using authentication middleware.


## Contributing
Feel free to contribute by submitting pull requests or reporting issues.


