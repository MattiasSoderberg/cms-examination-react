# About the project

cms-examination is an examination project for the course Webbutveckling med CMS. 
It is built with React and uses wordpress.com as cms.

## Getting Started with cms-examination

1. Clone the repo
```
Git clone https://github.com/MattiasSoderberg/cms-examination-react.git
```
2. Install npm packages
```
npm install
```
3. Create a .env file
```
REACT_APP_API_URL="https://public-api.wordpress.com/rest/v1.1/sites/webb21matte.wordpress.com/posts/"
```
4. Run the app on localhost:3000
```
npm start
```

## Deploy

The app is automatically deployed with Vercel on every push to main branch through a yaml script.