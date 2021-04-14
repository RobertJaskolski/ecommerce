# Ecommerce - ND Shop

## [Live demo](https://ecommerce-website-867c6.web.app/)

Simple shop connected with firebase and stripe payments.

## Description

**A project of a simple general online store to learn how to communicate with firebase and to learn how to handle payments.**

## Languages & tools

**Language:** JavaScript

**Framework:** React + Redux

**Framework backend:** Express (Firebase functions)

**Other tools:**

- Scss
- MaterialUI
- Jest + Enzyme (tests)
- Axios
- Stripe
- firebase
- react-router-dom

# Project Status

The project is ready. There was no plan to do form validation.

**Features:**

- Add products as a Admin
- Shopping cart service
- Order history
- Firebase login (Email and Google)
- Stripe payments (Only make in `withFunctions` branch)
- Redux-Saga for async
- tests (to do)

# Installation and Setup Instructions

## Requirements

- [Firebase Account](https://firebase.google.com/)
- [Stripe Account](https://stripe.com/en-pl?utm_campaign=paid_brand-PL_en_Search_Brand_Stripe-6492221267&utm_medium=cpc&utm_source=google&ad_content=381612492120&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=Cj0KCQjwpdqDBhCSARIsAEUJ0hNZpoCG4Jbx8lmPpdTrRXQL_TgWTPFCTzOMZbeZ45r5oYdMGUflEWYaAm7JEALw_wcB)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Npm](https://www.npmjs.com/)

## Installation

1. After cloning or extracting the .zip files of this repository:  
   `cd ecommerce`

2. Next go to functions file and install dependencies:  
   `cd functions`  
   `nppm i`  
   `cd ..`

3. Next go to client and install dependencies:    
   `yarn`  
   `cd ..`

4. After installation of dependencies, you must create .env and Config files, I've already created sample files in the repository, you need to rename them and provide your environment variables.  
   Rename files:  
   `src\firebase\templateConfig.js` to `src\firebase\firebaseConfig.js`  
   `src\stripe\templateConfig.js` to `src\stripe\stripeConfig.js`  
   `functions\.envSample` to `functions\.env`  
   Enter yours secrets and Keys

5. Start application in root folder (Client):  
   `yarn start`
   
5. Start application in functions folder (Client):  
   `npm run serve`
   

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
