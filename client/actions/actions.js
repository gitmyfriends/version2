import { ADD_PROFILE, DELETE_PROFILE } from './constants/actionTypes.js';

// export const getProfile = () => ({
//   types: GET_PROFILE,
//   payload: ''
// })

export const addProfile = (name) => ({
  type: ADD_PROFILE,
  payload: name
})

export const deleteProfile = (name) => ({
  type: DELETE_PROFILE,
  payload: name
})

