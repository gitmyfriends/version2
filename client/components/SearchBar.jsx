import React, { Component } from 'react';

const SearchBar = props => {
  const { displayProfile } = props;
  const handleKeyDown = (event) => {
    if(event.key === 'Enter') getProfile(event.target)
  }
  const getProfile = (element) => {
      fetch(`/main/getFriend/${element.value}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        .then(res=>res.json())
        .then(profile=>{
          console.log("here is the profile back", profile)
          displayProfile(profile);
        })
  }
  const newProfile = () => getProfile(document.getElementById('name'));
  return (
    <div className='searchBar'>
      <label>Add New Friends</label>
      <br/>
      <input type='text' id='name' placeholder='Type in a name' onKeyDown={handleKeyDown}/>
      <br/>
      <button type="button" id = 'buttonName' onClick={newProfile} className="btn btn-outline-info">Find</button>
    </div>

  )
}

export default SearchBar;