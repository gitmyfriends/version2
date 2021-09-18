import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  
  // async findFriends() {
  //   // const initObj = {headers: {'Authorization': 'token '+ token}};
  //   const fetchedResponse = await fetch('https://api.github.com/user');
  //   const data = await fetchedResponse.json();
  // }

  render() {
    return (
      // <div class="input-group mb-3">
      //   <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
      //   <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      // </div>

    <form action='/main/getFriend' method='get' className='searchBar'> 
      <label for='name'>Add New Friends</label>
      <br/>
      <input type='text' id='name' name='name' placeholder='Type in a name' />
      <br/>
      <button type="submit" class="btn btn-outline-info">Find</button>
    </form> 
    )
  }
}


export default SearchBar;