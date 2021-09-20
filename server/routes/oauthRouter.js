// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const { getToken, startSession, connectToGitHub } = require('../controllers/oauthController');
const router = express.Router();
const { CLIENT_ID } = require('../clientInfo.js');


router.get('/auth', (req, res, next) => {
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



