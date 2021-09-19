import * as types from '../actions/constants/actionTypes.js';

// login: 'jlhline',
// avatar_url: 'https://avatars.githubusercontent.com/u/80792840?v=4',
// url: 'https://api.github.com/users/jlhline',
// name: null,
// company: null,
// location: null,
// email: null,
//  bio: null,
// public_repos: 4,
// followers: 1,
// following: 0,
// created_at: '2021-03-16T22:01:18Z',

const initialState = {
  profileList: [],
  totalProfiles: 0
}

const profileReducer = (state = initialState, action) => {
    
  switch (action.type) {

    case types.ADD_PROFILE:{
      const newProfile = {}; 
      fetch('/main/github')
      .then(res=>res.json)
      .then(object =>{
        console.log(object)
        newProfile = object; 
      })
      .catch(err=>console.log(err));
      
      const profileList = state.profileList.slice();
      profileList.push(newProfile);
      const totalProfiles = state.totalProfiles+1;
      return {
        profileList, 
        totalProfiles:totalProfiles,
      };
    }
    // case types.DELETE_PROFILE:{
      
    // }
        


    default: {
      return state;
    }
  }
};  

export default profileReducer;