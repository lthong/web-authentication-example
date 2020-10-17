## Web Authentication Example

### Introduction

This project is an example of user authentication.

![demo](https://github.com/lthong/web-authentication-example/blob/master/auth-example-demo.gif)

For the demo, please check [here](https://lthong.github.io/web-authentication-example)!

**Note:** The demo of the project may be incomplete, because the server is set to be used locally, if you want to get the complete demo, please setup the project locally.

### Client

The web authentication application using React and Redux.

```
cd client
yarn
yarn start
```

### Server

Build a scaleable API with authentication using Express, Mongo, and Passport.

**DB Setup**

```
cd server
brew tap mongodb/brew
brew install mongodb-community@4.4
sudo mkdir -p /data/db
sudo chown -R  $USER /data/db
mongod
```

**Server Setup**

```
cd server
yarn
yarn run dev
```

### Features

- Home Page
  - Redirect to login page if user does not login
- Login
  - Form Validation
  - User indentify
  - To keep token when reload page
- Sing up
  - User is unique validation
  - Hash the password
  - Save the user models
  - Auto login if sing up successful
- Logout
  - To clear token when logout
- Authenication
  - Token generation when signin or signup successful
  - Token checking when a user gets some personal information
