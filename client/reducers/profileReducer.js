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
      console.log("did you get object", action.payload)
    const profileList = state.profileList.slice();
    profileList.push(action.payload);
    const totalProfiles = state.totalProfiles+1;
    return {
      profileList, 
      totalProfiles:totalProfiles,
    };
  }
      
      
      console.log("your payload", action.payload);
        
      // console.log("do you still have newProfile", newProfile);
      
    //  fetch('main/getFriend/', {
    //     method: 'POST',
    //     body: JSON.stringify(nameObj),
    //     headers: { 'Content-Type': 'application/json' },
    //   }
    // )
    //   .then(res=>res.json())
    //   .then(object =>{
    //     console.log("hello",object)
    //     newProfile = object; 
    //   })
    //   .catch(err=>console.log(err));
      
      // console.log("do you still have newProfile", newProfile);
      // const profileList = state.profileList.slice();
      // profileList.push(newProfile);
      // const totalProfiles = state.totalProfiles+1;
      // return {
      //   profileList, 
      //   totalProfiles:totalProfiles,
      // };
    
    case types.DELETE_PROFILE:{
      break;
    }
        


    default: {
      return state;
    }
  }
};  

export default profileReducer;