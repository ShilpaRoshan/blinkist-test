# Blinkist Coding Challenge

From the challenge I understood that the requirement was to prepare a AB Testing tool for use by the bloggers and influencers who collaborate with Blinkist. The idea is to make them self-sufficient in this regard and for us to provide a platform where we can track the results of AB testing along with providing a mechanism to conduct the tests.

## Solution Overview

1. My solution for this application is to create a tool & dashboard interface. It consists of page-viwes and clicks for both variations.This application consists of two pages `http://127.0.0.1:5173/` and `http://127.0.0.1:5173/dashboard`.
2. In the browser with this link `http://127.0.0.1:5173/`,I have used Web Storage API to store the type of variant.To implement this I have used `Math.random()` to randomly assign either test or control variant (here I assumed A or B variants).
3. Depending on the type of variant stored in localstorage, relevant values are shown in the browser.
4. Once the user clicks on the Signup button, a post request happens inorder to save the type of variant,userId and date in the database.
5. In the backend server, CRUD operations can be performed for different purposes like edit,delete etc., for this case it made more sense to create a `POST` method to store the values in database.
6. To keep track of pageviews,I have used Plausible-tracker `trackPageview` to track the page view event. Inorder to calculate the number of pageviews,I have used `load` event.
7. Everytime the page loads, the `pageView` state value will be incremented by 1 and this value is stored in localStorage.
8. To keep track the click event, I have used Plausible-tracker `trackEvent` to track the event.Inorder to calculate the number of clicks. I have created a `count` state and stored the value in localstorage.
9. In the Dashboard page using ContextAPI we get all the values from other components to Dashboard componet and the results will be shown there.

## How to Run

“\*” Clone the repository make sure to have `npm` and `node` in your local machine.

“\*” Clone the repository:
`git clone git@github.com:ShilpaRoshan/blinkist-test.git`

“\*” Go inside the repo:
`cd blinkist-test`

“\*” Installations:
`npm install`

“\*” Start the Server:
`npm run dev` for client side and `npm start` for server-side
“\*” Visit the app:
`http://127.0.0.1:5173/` for client-side and `http://localhost:8000` for server-side

## Tech stack

1. Nodejs
2. Express.js
3. cors
4. PostgreSQL
5. Postman
6. Pg
7. ReactJs
8. Axios
9. Plausible-tracker
10. uuid
11. React-Router-dom

## Limitations of Submission

1. Implementing the ContextAPI, which enables other components (Dashboard) can access the values of page view and clicks.
2. The number of clicks should be guaranteed to not count more than once per user. Inorder to do this, I need to check if `count` property in localStorage if not then add 1.
