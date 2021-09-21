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
  repoList: [],
  totalProfiles: 0,
  displayCard: null
}

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case types.ADD_PROFILE:{
    console.log("did you get object", action.payload)
    const profileList = state.profileList.slice();
    const repoList = state.repoList.slice()
    repoList.push(action.payload.public_repos)
    console.log("action payload",typeof action.payload.public_repos)
    profileList.push(action.payload);
    const totalProfiles = state.totalProfiles+1;
    let displayCard = state.displayCard;
    displayCard = null;
    return {
      repoList,
      displayCard,
      profileList, 
      totalProfiles:totalProfiles,
      
    };
  }
    case types.DISPLAY_PROFILE:{
    console.log("hello")
    console.log(action.payload)
    console.log({...state})
    return{
      ...state,
      displayCard:action.payload,
      
    }
    }
    
    case types.DELETE_PROFILE:{
      const profileList = state.profileList.slice();
      profileList.splice(action.payload,1)
      return {
        ...state,
        profileList
      }
    }

    case types.ADD_LIST:{
      const profileList = action.payload;
      return {
        ...state,
        profileList
      }
    }

    default: {
      return state;
    }
  }
};  

export default profileReducer;