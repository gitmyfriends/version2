import React, { Component } from 'react';
import SearchBar from './SearchBar';

const ProfileAdder = props => {
  const { addProfile, deleteProfile } = props; 
  
  return (
    <div className='profileAdder'>
      <div className='searchBar'>
        <SearchBar addProfile={addProfile}/>
      </div>
    </div>
  )
}
export default ProfileAdder;