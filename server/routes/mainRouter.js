const express = require('express');
const { displayHP, getFriend } = require('../controllers/mainController');
const {createUser,getUser} = require('../controllers/userController');
const router = express.Router();


router.get('/homepage', displayHP, (req, res) => {
  res.set("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  console.log('did i make it here?');
  return res.status(200).json({...res.locals.user});
});

router.get('/getFriend/:name', getUser , getFriend, createUser, getUser, (req, res) => {
  res.set("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  console.log('did i make it here?',{...res.locals.user});
  return res.status(200).json({...res.locals.user});
  // return res.status(200).json({...res.locals.user});
});


/*
once token is retrieved, use it to show info about given user --> profile nav bar 
add friends nav bar 
view friends nav bar to display everything in users's friends? collection
*/

module.exports = router;