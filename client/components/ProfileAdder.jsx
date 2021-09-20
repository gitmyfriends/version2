import React, { Component } from 'react';
import SearchBar from './SearchBar';
import DisplayCard from './DisplayCard';
const ProfileAdder = props => {
  const {displayCard, displayProfile,addProfile} = props; 
  console.log("profile adder displayCard",displayCard,);
  return (
    
    <div className='profileAdder'>
      <div className='searchBar'>
        <SearchBar displayProfile={displayProfile}/>
        <DisplayCard displayCard={displayCard} addProfile={addProfile}/>
      </div>
    </div>
  )
}
export default ProfileAdder;