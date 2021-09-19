import React, { Component } from 'react';

const SearchBar = props => {
  const { addProfile } = props;
  // const addProfile = (element) =>{
  //   addProfile(element);
  //   element.value = '';
  // }
  return (
    <div className='searchBar'>
      <label>Add New Friends</label>
      <br/>
      <input type='text' id='name' placeholder='Type in a name'/>
      <br/>
      <button type="button" onClick={addProfile} className="btn btn-outline-info">Find</button>
    </div>

  )
}


export default SearchBar;