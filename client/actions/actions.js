import { ADD_PROFILE, DELETE_PROFILE, DISPLAY_PROFILE, ADD_LIST } from './constants/actionTypes.js';

export const displayProfile = (profileObj) => ({
   type: DISPLAY_PROFILE,
   payload: profileObj
 })

export const addProfile = (profileObj) => ({
  type: ADD_PROFILE,
  payload: profileObj
})

export const deleteProfile = (name) => ({
  type: DELETE_PROFILE,
  payload: name
})

export const addList = (array) => ({
  type: ADD_LIST,
  payload: array
})

