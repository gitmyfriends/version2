//import fetch 3.0
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const path = require('path');
const { nextTick } = require('process');

const mainController = {
  async fetchSelf(req, res, next) {
    try {
      const token = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/token.json')));
      const initObj = {headers: {'Authorization': 'token '+ token}};
      const fetchedResponse = await fetch('https://api.github.com/user', initObj);
      const data = await fetchedResponse.json();
      res.locals.ownProfile = [data];
      return next();
    } catch(err) {
      return next(err);
    }
  },

  async fetchFriends(req, res, next) {
    const {allUsers} = res.locals;
    try {
      const requests = allUsers.map(username => fetch(`https://api.github.com/users/${username}`));
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map(res => res.json()));
      res.locals.friendsProfiles = [...data];
      console.log(res.locals.profiles);
      return next();
    } catch(err) {
      return next(err);
    }
  },

  async fetchAFriend(req, res, next) {
    const {username} = req.params;
    let {allUsers} = res.locals;
    console.log("allusers", allUsers);
    allUsers = new Set(allUsers);

    try {
      if (allUsers.has(username)) {
        res.locals.newProfile = {rejectQuery:'This person is already your friend.'}
        return next();
      } 
      const fetRes = await fetch(`https://api.github.com/users/${username}`);
      const newUser = await fetRes.json();
      res.locals.newProfile = newUser;
      return next();
    } catch(err) {
      return next(err);
    }
  }
}

module.exports = mainController;