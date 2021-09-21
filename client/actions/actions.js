import { ADD_PROFILE, DELETE_PROFILE, DISPLAY_PROFILE, ADD_LIST } from './constants/actionTypes.js';

export const displayProfile = (profileObj) => ({
   type: DISPLAY_PROFILE,
   payload: profileObj
 })

export const addProfile = (profileObj) => ({
  type: ADD_PROFILE,
  payload: profileObj
})

export const deleteProfile = (index) => ({
  type: DELETE_PROFILE,
  payload: index
})

export const addList = (array) => ({
  type: ADD_LIST,
  payload: array
})

