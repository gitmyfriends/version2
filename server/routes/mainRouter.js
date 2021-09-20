const express = require('express');
const { fetchSelf, fetchFriends } = require('../controllers/APIController');
const { getAllUsers, createUser} = require('../controllers/userController');
const router = express.Router();


router.get('/homepage', fetchSelf, getAllUsers, fetchFriends, (req, res) => {
  res.set("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  console.log('did i make it here?');
  return res.status(200).json([...res.locals.ownProfile, ...res.locals.friendsProfiles]);
});

/* on homepage(or root path /), call get all users on database 
then make a request to github to render all users 
 */

/* 
get all users from the database and save it on res.locals.users
check if requested user is in our res.locals.users by login(unique)
  if so, then next 
  if not, then createUser on new user 
make a request to github to retrieve info on new user */

router.get('/getFriend/:username', getAllUsers, createUser, (req, res) => {
  res.set("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  return res.status(200).json({...res.locals.newProfile});
});


/*
once token is retrieved, use it to show info about given user --> profile nav bar 
add friends nav bar 
view friends nav bar to display everything in users's friends? collection
*/

module.exports = router;