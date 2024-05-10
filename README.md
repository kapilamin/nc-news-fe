# Northcoders News API

## Introduction

As part of *Northcoder's Skills Bootcamp in Software Development*, we were tasked with building a C.R.U.D. application frontend which uses information from my [backend project](https://github.com/M1nhnho/be-nc-news). This app allows clients to view articles, grouped under topics, along with comments and the users behind them - akin to Reddit or similar news services.

This frontend project was built in HTML, CSS, and Javascript using [React](https://react.dev/) to enable easier management by splitting parts into reusable components that can be conditionally rendered. Additionally, error handling has been implemented and various in-built hooks have been used along with my custom hook to detect window size. Moreover, [Axios](https://axios-http.com/) was used to access the backend API. Responsiveness was also kept in consideration and [WAVE](https://wave.webaim.org/) was used for accessibility to conform to WCAG 2.2 at Level AA.

### Frontend
Netlify: https://kapilamin-ncnews.netlify.app/

Github:  https://github.com/kapilamin/nc-news-fe

### Backend
API:    https://nc-news-xwbn.onrender.com/api

Github: https://github.com/kapilamin/nc-news

## To run this project locally
1. Ensure that you have Node.js installed (see below for minimum requirements)
Instructions for installation of Node and NPM can be found [HERE] (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Clone this repo:
    ```
    git clone https://github.com/kapilamin/nc-news-fe
    ```
3. Navigate to the folder: cd fe-nc-news
4. Install all dependencies required: 
    ```
    npm install
    ```
5. Run the app: 
    ```
    npm run dev
    ```

### Dependency versions
This project was developed using the following:

- Node.js: v21.1.0
- axios: v1.6.7
- react: v18.2.0
- react-dom: v18.2.0
- react-icons": v5.0.1
- react-router-dom: v6.22.3
