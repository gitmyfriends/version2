import React, { Component } from 'react';

const SearchBar = props => {
  const { addProfile } = props;
  // const addProfile = (element) =>{
  //   addProfile(element);
  //   element.value = '';
  // }
  const handleKeyDown = (event) => {
    if(event.key === 'Enter') getProfile(event.target)
  }
  const getProfile = (element) => {
      
        console.log(element.value);
      fetch(`/main/getFriend/${element.value}`, {
          method: 'GET',
          //params: JSON.stringify(nameObj),
          headers: { 'Content-Type': 'application/json' },
        })
        .then(res=>res.json())
        .then(profile=>{
          console.log("here is the profile back", profile)
          addProfile(profile[0])
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