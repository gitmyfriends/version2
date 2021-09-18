// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const { getToken, startSession, connectToGitHub } = require('../controllers/ghController');
const router = express.Router();
const { CLIENT_ID } = require('../clientInfo.js');


router.get('/auth', (req, res, next) => {
  // return res.sendStatus(200);
  // console.log(res);
  const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;

  res.set("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");

  return res.redirect(url);
});

router.get('/callback', getToken, startSession, (req, res) => {
  res.set("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  return res.redirect('/');
});

/*
once token is retrieved, use it to show info about given user --> profile nav bar 
add friends nav bar 
view friends nav bar to display everything in users's friends? collection
*/

module.exports = router;




      // Encode with base64
    // const plainCredential = 'client_id =' + ":" + CLIENT_SECRET;
    // encodedCredential = Buffer.from(plainCredential).toString('base64');
    // authorizationField = "Basic " + encodedCredential;
    // let headers = new Headers();
    // const option = {'Authorization' : `Basic ${base64.encode('client_id :' + CLIENT_ID)}`};
    // const option = {'Authorization' : 'client_id ' + CLIENT_ID};
  // res.set('mode', 'no-cors');
  // const url = 'https://github.com/login/oauth/authorize';
  // fetch(url, {
  //   method: 'GET',
  //   headers: {option},
  //   redirect: 'follow'})
  //   // .then(res => next())
  //   .catch(err => console.log(err))

  // res.set('sec-fetch-mode', 'cors');
  // fetch(url)
  // .then(res => {console.log(res); 
  //   return res.text()})
  // .then(data => console.log(data))
  // .catch(err => console.log(err));

    // console.log(res);
  // {
  //   headers: {"Access-Control-Allow-Origin" : 'http://localhost:8080', 
  //   "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT", 
  //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  // }